import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
export default class Message extends Component {

	state={active:Math.random()>0.5};

	render() {
		// let marginR=this.state.active?{marginLeft:15}:{marginRight:15}
		return (
			<View style={{margin:4,marginTop:18,marginBottom:0,padding:3,paddingBottom:0,paddingTop:0}}>
				<View style={{flexDirection:'row',alignItems:'center'}}>
					<Text style={{fontSize:18,fontWeight:'500'}}>{this.state.active?'Me':'Frank Miller'}  </Text>
					<Text style={{fontSize:12,color:'gray',marginTop:5}}>12:43</Text>
				</View>
				<View style={{borderLeftWidth:2,borderColor:!this.state.active?RED:APP_COLOR,padding:0,paddingLeft:3,marginLeft:1,marginTop:5}}>
					<Text style={{fontSize:16,color:'rgb(80,80,80)',
						paddingHorizontal: 4}}>
						{this.props.message.text}
					</Text>
				</View>


			</View>
		);
	}
}
