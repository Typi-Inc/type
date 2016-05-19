import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
export default class Bubble extends Component {

	state={active:Math.random()>0.5};

	render() {
		let marginR=this.state.active?{marginLeft:15}:{marginRight:15}
		return (
			<View style={{padding:12,paddingTop:6,overflow:'hidden',
				paddingBottom:6,margin:5,...marginR,
				backgroundColor:this.state.active?BUBBLE_GREY:APP_COLOR,
				borderRadius:14,alignSelf:this.state.active?"flex-start":"flex-end"}}>

				<Text style={{fontSize:16,width:Math.max(100,150),color:this.state.active?"black":"white"}}>
					Hello this is the first message and This is second message
				</Text>


			</View>
		);
	}
}
