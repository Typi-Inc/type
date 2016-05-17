import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  View
} from 'react-native';
import {homeSearch$,appNav,input} from '../actions/uiactions'
export default class BackButton extends Component {

	back(){
		appNav({nav:'appNav',action:'pop'})
		input({action:'unsubscribe'})
	}
	render() {
		return (
			<TouchableOpacity onPress={this.back.bind(this)}
			 style={{marginTop:3,paddingTop:9,paddingBottom:9,padding:9,}}>
				<Image style={{width:11,
					height:19
				}} source={{uri:'arrowBack',isStatic:true}}/>
			</TouchableOpacity>
		);
  }
}