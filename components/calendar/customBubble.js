import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Incremental from 'Incremental';
export default class CustomBubble extends Component {

	state={};

	render() {
		// console.log(this.props.index,this.props.message.text)
		return (
			<View style={{padding:4,paddingTop:6,
				paddingBottom:6,margin:6,marginRight:70,
				marginLeft:20,shadowOpacity:0.4,shadowColor:'gray',shadowOffset:{width:2,height:2},
				flexDirection:this.props.message.text.length<10?'row':'column',
				backgroundColor:this.props.color,
				borderRadius:this.props.message.text.length<30?6:7,alignSelf:"flex-start"}}>

				<Text style={{fontSize:16,
					paddingHorizontal: 4,color:this.props.textColor}}>
					{this.props.message.text}
				</Text>
				<Text style={{fontSize:11,paddingTop:5,
					alignSelf:this.props.message.text.length<10?'center':'flex-end',
					paddingHorizontal: 4,color:this.props.textColor}}>      12:34
				</Text>


			</View>
		);
	}
}
