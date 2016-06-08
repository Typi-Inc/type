import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  View
} from 'react-native';
import TimerMixin from 'react-timer-mixin';

import dismissKeyboard from 'dismissKeyboard'
import {homeSearch$,appNav,input} from '../actions/uiactions'
export default class BackButton extends Component {

	back(){
		dismissKeyboard()
		if(this.props.index>1){
			appNav({nav:'appNav',action:'popToTop'})
		}else appNav({nav:'appNav',action:'pop'})
		
		input({action:'unsubscribe'})
		if(this.props.name==='chat'){
			dismissKeyboard()
		}
	}
	render() {
		return (
			<TouchableOpacity onPress={this.back.bind(this)}
			 style={{marginTop:3,paddingTop:9,paddingBottom:9,padding:9,flexDirection:'row',...center}}>
				<Image style={{width:11,
					height:19
				}} source={{uri:'arrowBack',isStatic:true}}/>
				{this.props.name==='chat'?<Text style={{color:APP_COLOR,fontSize:17,marginLeft:5}}>Chats</Text>:null}
			</TouchableOpacity>
		);
  }
}

Object.assign(BackButton.prototype, TimerMixin);
