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
import Icon from 'react-native-vector-icons/Ionicons';

import dismissKeyboard from 'dismissKeyboard'
import {homeSearch$,appNav,input,registerNav} from '../actions/uiactions'
export default class BackButton extends Component {

	back(){
		dismissKeyboard()
		if(this.props.name==='editProfile'||this.props.name==='profile'){
			appNav({nav:'appNav',action:'pop'})
			return;
		}
		if(this.props.index>1){
			appNav({nav:'appNav',action:'popToTop'})
		}else appNav({nav:'appNav',action:'pop'})
		
		input({action:'unsubscribe'})
		if(this.props.name==='chat'){
			dismissKeyboard()
		}
		if(this.props.name==='countryPicker'||this.props.name==='codeEnter'){
			registerNav({nav:'registerNav',action:'pop'})
		}
	}
	render() {
		return (
			<TouchableOpacity onPress={this.back.bind(this)}
			 style={{marginBottom:1,paddingTop:9,paddingBottom:9,padding:9,flexDirection:'row',...center}}>
				<Icon  name="ios-arrow-back" size={28} color={APP_COLOR} />
				{this.props.name==='chat'?<Text style={{color:APP_COLOR,fontSize:17,marginLeft:7,marginBottom:3}}>Chats</Text>:null}
			</TouchableOpacity>
		);
  }
}

Object.assign(BackButton.prototype, TimerMixin);
