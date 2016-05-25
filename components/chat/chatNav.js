// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   Navigator,
//   Animated,
//   TouchableWithoutFeedback,
//   View
// } from 'react-native';
// import dismissKeyboard from 'dismissKeyboard';
// import TimerMixin from 'react-timer-mixin';
// import BackButton from '../navigation/backButton';
// import PhotoButton from '../navigation/photoButton';
// import Chat from './chat';
// import Tube from './tube';
// import Title from '../navigation/title';
// import Settings from '../settings/settings';
// import NewChat from '../creation/newChat';
// import NewGroup from '../creation/newGroup';
// import NewBroadcast from '../creation/newBroadcast';
// var RCTStatusBarManager = require('NativeModules').StatusBarManager;

// let NavigationBarRouteMapper={
// 	LeftButton(route, navigator, index, navState){
// 		if(route.name==='home') return <Connect/>;
// 		return <BackButton/>
// 	},
// 	RightButton(route, navigator, index, navState){
// 		if(route.name==='home') return <SettingsButton/>;
// 		if(route.name==='chats') return <PhotoButton info={route.info}/>
// 		return null
// 	},
// 	Title(route, navigator, index, navState){
// 		// console.log(route,navigator.getCurrentRoutes())
// 		if(route.name==='home') return <HomeSearch/>;
// 		console.log(route,'route here')
// 		return null
// 	}
// }
// import {appNav$,plusButtonPress$,plusButtonPress,cancelCreate} from '../actions/uiactions'
// export default class ChatNav extends Component {
// 	state={};

// 	componentWillMount(){

// 	// RCTStatusBarManager.getHeight((e)=>this.setState({statusBarHeight:e.height}))
// 	}
// 	componentDidMount(){
// 	}
// 	componentWillUnmount(){
// 	}
// 	render() {
// 		this.anim=this.anim || new Animated.Value(0)
// 		return (
// 		<View style={{flex:1}}>
// 		 	<Navigator ref={el=>this.nav=el}
// 				initialRoute={{name:'chat'}}
// 				configureScene={this.configureScene.bind(this)}
// 				onWillFocus={(e)=>{
// 					// if(e.name==='chat'){
// 					// 	console.log('aim here')
// 					// 	this.nav.immediatelyResetRouteStack([{name:'home'}])

// 					// }

// 					dismissKeyboard()}}
// 				// onDidFocus={(e)=>{
// 				// 	// console.log(e,'did foucsuign',this.nav&&this.nav.getCurrentRoutes().length)	
// 				// 	if(this.nav&&this.nav.getCurrentRoutes().length>2){
// 				// 		this.nav.replacePrevious({name:'home'})
// 				// 	}
// 				// }}
// 				renderScene={this.renderChat.bind(this)}
// 				style={{paddingTop:70,backgroundColor:'white'}}
// 				navigationBar={
// 					<Navigator.NavigationBar
// 						ref={el=>this.navBar=el}
// 			            routeMapper={NavigationBarRouteMapper}
// 			            style={{height:70,backgroundColor:'white',borderBottomWidth:1,borderColor:BORDER_COLOR}}
// 			          />
// 				}
// 			/>
// 		</View>
// 		);
// 	}
// 	renderChat(route,navigator){
// 		return <Tube showInput={true}/>;
// 	}
// 	configureScene(route,routeStack){
// 		return Navigator.SceneConfigs.PushFromRight;
// 	}
// }
// Object.assign(ChatNav.prototype, TimerMixin);

