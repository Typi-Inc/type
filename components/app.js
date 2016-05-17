import React, { Component } from 'react';
import {
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
import PhotoButton from './navigation/photoButton'
import Tube from './chat/tube';
import Title from './navigation/title';
import Settings from './settings/settings'
var RCTStatusBarManager = require('NativeModules').StatusBarManager;

let NavigationBarRouteMapper={
	LeftButton(route, navigator, index, navState){
		if(route.name==='home') return <Connect/>;
		return <BackButton/>
	},
	RightButton(route, navigator, index, navState){
		if(route.name==='home') return <SettingsButton/>;
		if(route.name==='tube') return <PhotoButton info={route.info}/>
		return null
	},
	Title(route, navigator, index, navState){
		if(route.name==='home') return <HomeSearch/>;
		return <Title info={route.info}/>
	}
}
import {appNav$,plusButtonPress$,plusButtonPress,cancelCreate} from './actions/uiactions'
export default class App extends Component {
	state={};

	componentWillMount(){
	RCTStatusBarManager.getHeight((e)=>this.setState({statusBarHeight:e.height}))
	}
	componentDidMount(){
		this.sub=appNav$.subscribe(x=>{
			if(x.nav==='appNav' && x.action==='push'){
				this.nav.push({name:x.name,info:x.info})
			}else if(x.nav==='appNav'&& x.action==='pop'){
				this.nav.pop()
			}
		})
		this.sub1=plusButtonPress$.subscribe(x=>{
			if(x.action==='press'){
				this.show()
			}else if(x.action==='hide'){
				Animated.timing(this.anim,{toValue:0,duration:1}).start()
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
		this.anim=this.anim || new Animated.Value(0)
		return (
		<View style={{flex:1}}>
		 	<Navigator ref={el=>this.nav=el}
				initialRoute={{name:'home'}}
				configureScene={this.configureScene.bind(this)}
				onWillFocus={(e)=>dismissKeyboard()}
				renderScene={this.renderApp.bind(this)}
				style={{paddingTop:70,backgroundColor:'white'}}
				navigationBar={
					<Navigator.NavigationBar
						ref={el=>this.navBar=el}
			            routeMapper={NavigationBarRouteMapper}
			            style={{height:70,backgroundColor:'white',borderBottomWidth:1,borderColor:BORDER_COLOR}}
			          />
				}
			/>
			<TouchableWithoutFeedback onPress={this.hide.bind(this)}>
				<Animated.View 
					style={{position:'absolute',top:0,left:0,
					backgroundColor:TRANSPARENT_GREY,width:320*k,
					height:this.anim.interpolate({inputRange:[0,1],outputRange:[0,75*h]})
				}}/>
			</TouchableWithoutFeedback>
		</View>
		);
	}
	renderApp(route,navigator){
		if(route.name==='discovery') return <Discovery/>
		else if(route.name==='settings') return <Settings/>
		else if(route.name==='tube') return <Tube/>
		return <List/>
	}
	configureScene(route,routeStack){
		// if(route.name==='createChannel') return {...Navigator.SceneConfigs.FloatFromBottom, gestures: {}}
		// else if (route.name==='channel') return Navigator.SceneConfigs.FloatFromRight

		// else if (route.name=='imageViewer') return Navigator.SceneConfigs.FadeAndroid
		if(route.name==='discovery') return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight
		return Navigator.SceneConfigs.PushFromRight
	}
}




Object.assign(App.prototype, TimerMixin);