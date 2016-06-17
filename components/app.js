import React, { Component } from 'react';
import ReactNative, {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  Animated,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import List from './home/list'
import dismissKeyboard from 'dismissKeyboard';
import TimerMixin from 'react-timer-mixin';
import HomeSearch from './navigation/homeSearch';
import Connect from './navigation/connect';
import SettingsButton from './navigation/settingsButton';
import BackButton from './navigation/backButton';
import Discovery from './discover/discovery';
import PhotoButton from './navigation/photoButton';
import Chat from './chat/chat';
import Tube from './chat/tube';
import Title from './navigation/title';
import ChatTitle from './navigation/chatTitle';
import Settings from './settings/settings';
import NewChat from './creation/newChat';
import NewGroup from './creation/newGroup';
import realm from './db';
import _ from 'lodash';
import Profile from './profile/profile';
import EditProfile from './profile/editProfile';
import Notifications from './settings/notifications';
import StarredItems from './settings/starredItems';
import Calendar from './calendar/calendar';
import CalendarTitle from './navigation/calendarTitle';
import NewBroadcast from './creation/newBroadcast';
var RCTStatusBarManager = require('NativeModules').StatusBarManager;
let Contacts=ReactNative.NativeModules.RNUnifiedContacts
let NavigationBarRouteMapper={
	LeftButton(route, navigator, index, navState){
		if(route.name==='home') return null;
		if(route.name==='calendar') return null;
		return <BackButton  index={index} name={route.name}/>
	},
	RightButton(route, navigator, index, navState){
		if(route.name==='home') return <SettingsButton/>;
		if(route.name==='chat') return <PhotoButton navigator={navigator} info={route.info}/>
		return null
	},
	Title(route, navigator, index, navState){
		if(route.name==='home') return <HomeSearch/>;
		else if(route.name==='chat') return <ChatTitle info={route.info}/>;
		else if(route.name==='calendar') return <CalendarTitle/>;
		return <Title info={route.info}/>
	}
}
import {appNav$,plusButtonPress$,plusButtonPress,cancelCreate,calendar,sideMenu} from './actions/uiactions'
export default class App extends Component {
	state={};
	writeContactsToRealmAsync(contacts){
		realm.write(()=>{
			// realm.deleteAll()
      const realmContacts = realm.objects('Contact')
			for (let contact of contacts){
				if(_.isEmpty(realm.objects('Contact').filtered(`id="${contact.identifier}"`)))
          realm.create('Contact',{
            id: realmContacts.length,
						givenName:contact.givenName,
						fullName:contact.fullName,
						id:contact.identifier,
						imageDataAvailable:contact.imageDataAvailable,
						picture:contact.imageDataAvailable?contact.thumbnailImageData:null,
						organizationName:contact.organizationName,
						phones:contact.phoneNumbers.map((phoneNumber)=>({
							id:phoneNumber.identifier,countryCode:phoneNumber.countryCode,number:phoneNumber.digits
						})),
						emailAddresses:contact.emailAddresses.map((emailAddress)=>({
							id:emailAddress.identifier,value:emailAddress.value
					})),
				})
			}
		})
	}
	componentWillMount(){
		Contacts.getContacts( (error, contacts) =>  {
			if (error) {
				// console.error(error);
			}
			else {
				this.writeContactsToRealmAsync(contacts)
			}
		});
	}
	componentDidMount(){

		this.sub=appNav$.subscribe(x=>{
			calendar({action:'unsubscribe'})
			if(x.nav==='appNav' && x.action==='push'){
				// if(x.name==='chat')this.nav.replaceAtIndex({name:'home'},1)
				// this.nav.replacePrevious({name:'home'})
				this.nav.push({name:x.name,info:x.info})
				// this.props.toggle(false)
			}else if(x.nav==='appNav'&& x.action==='pop'){
				this.nav.pop()
				// this.props.toggle(true)
			}else if(x.nav==='appNav' && x.action==='popToTop'){
				this.nav.popToTop()
				// this.props.toggle(true)
			}
		})
		this.sub1=plusButtonPress$.subscribe(x=>{
			if(x.action==='press'){
				this.show()
			}else if(x.action==='hide'){
				Animated.timing(this.anim,{toValue:0,duration:1}).start()
			}else if(x.action==='clean'){
				this.anim.setValue(0)
			}
		})
	}
	componentWillUnmount(){
		this.sub.unsubscribe()
		this.sub1.unsubscribe()
	}
	show(){
		Animated.timing(this.anim,{toValue:1,duration:1}).start()
	}
	hide(){
		plusButtonPress({action:'hide'})
		cancelCreate({action:'cancel'})
	}
	render() {
		// menu=<View style={{flex:1,...center}}><Text> hello</Text></View>

		this.anim=this.anim || new Animated.Value(0)
		return (
		<View style={{flex:1}}>
		 	<Navigator ref={el=>this.nav=el}
				initialRoute={{name:'home'}}
				configureScene={this.configureScene.bind(this)}
				// onWillFocus={(e)=>dismissKeyboard()}
				onDidFocus={(e)=>{
					if(e.name!=='home'){
						sideMenu({action:'disableGesture'})
					}else{
						sideMenu({action:'enableGesture'})
					}
					// console.log(e,'did foucsuign',this.nav&&this.nav.getCurrentRoutes().length)
					if(this.nav&&this.nav.getCurrentRoutes().length>2&&e.name!=='editProfile'){
						this.nav.replacePrevious({name:'home'})
						// this.setTimeout(()=>{
						// 	this.nav.immediatelyResetRouteStack([{name:'home'},{...this.nav.getCurrentRoutes()[2]}])
						// },0)
					}
				}}
				renderScene={this.renderApp.bind(this)}
				style={{paddingTop:70,backgroundColor:'white',}}
				navigationBar={
					<Navigator.NavigationBar
						ref={el=>this.navBar=el}
			            routeMapper={NavigationBarRouteMapper}
			            style={{height:70,backgroundColor:'white',borderBottomWidth:0.5,borderColor:'rgb(200,200,200)'}}
			          />
				}
			/>
			<TouchableWithoutFeedback onPress={this.hide.bind(this)}>
				<Animated.View
					style={{position:'absolute',top:0,left:0,
					backgroundColor:TRANSPARENT_GREY,width:320*k,
					height:this.anim.interpolate({inputRange:[0,1],outputRange:[0,70]})
				}}/>
			</TouchableWithoutFeedback>
		</View>
		);
	}
	renderApp(route,navigator){
		if(route.name==='discovery') return <Discovery/>;
		else if(route.name==='settings') return <Settings/>;
		else if(route.name==='chat') return <Chat showInput={true} info={route.info}/>;
		else if(route.name==='newChat') return <List disabled={true}/>;
		else if(route.name==='newGroup') return <NewGroup/>;
		else if(route.name==='newBroadcast') return <NewBroadcast/>;
		else if(route.name==='calendar') return <Calendar/>;
		else if(route.name==='home') return <List/>;
		else if(route.name==='notifications') return <Notifications/>;
		else if(route.name==='starred') return <StarredItems/>;
		else if(route.name==='profile') return <Profile/>;
		else if(route.name==='editProfile') return <EditProfile/>;

	}
	configureScene(route,routeStack){
		if(route.name==='newChat'||route.name==='newGroup'||route.name==='discovery')
			return {...Navigator.SceneConfigs.FloatFromBottom, gestures: {}};
		// if(route.name==='settings') return {...Navigator.SceneConfigs.PushFromRight, gestures: {}};
		else if (route.name==='chat') return {...Navigator.SceneConfigs.PushFromRight, defaultTransitionVelocity:5}

		// else if (route.name=='imageViewer') return Navigator.SceneConfigs.FadeAndroid
		else if(route.name==='calendar'||route.name==='notifications'||route.name==='settings' || route.name==='starred')
			return {...Navigator.SceneConfigs.HorizontalSwipeJumpFromRight, gestures: {},defaultTransitionVelocity:7};
		return Navigator.SceneConfigs.PushFromRight;
	}
}
Object.assign(App.prototype, TimerMixin);
