import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
export default class Bubble extends Component {

	state={active:Math.random()>0.5};

	render() {
		// let marginR=this.state.active?{marginLeft:15}:{marginRight:15}
		return (
			<View style={{padding:4,paddingTop:6,overflow:'hidden',
				paddingBottom:6,margin:6,marginRight:this.state.active?70:10,
				marginLeft:this.state.active?10:70,
				flexDirection:this.props.message.text.length<30?'row':'column',
				backgroundColor:this.state.active?BUBBLE_GREY:APP_COLOR,
				borderRadius:14,alignSelf:this.state.active?"flex-start":"flex-end"}}>

				<Text style={{fontSize:16,
					paddingHorizontal: 4,color:this.state.active?"black":"white"}}>
					{this.props.message.text}
				</Text>
				<Text style={{fontSize:11,paddingTop:2,
					alignSelf:this.props.message.text.length<30?'center':'flex-end',
					paddingHorizontal: 4,color:this.state.active?"black":"white"}}>         12:34
				</Text>


			</View>
		);
	}
}
