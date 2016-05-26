

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {chatTitle$} from '../actions/uiactions';
class Dots extends Component {
	render() {
		return (
			<View style={{flexDirection:'row',alignSelf:'center',margin:5,backgroundColor:'transparent'}}>
				<View   style={{width:7,height:7,borderRadius:5,
				backgroundColor:this.props.activeTab===0?APP_COLOR:TRANSPARENT_GREY,marginRight:3}}/>
				<View style={{width:7,height:7,borderRadius:5,
				backgroundColor:this.props.activeTab===1?APP_COLOR:TRANSPARENT_GREY,marginLeft:3}}/>
			</View>
		);
	}
}
export default class Title extends Component {
	state={activeTab:0};
	componentDidMount(){
		this.sub=chatTitle$.subscribe(x=>{
			x && this.setState({activeTab:x.activeTab})

		})
	}
	componentWillUnmount(){
		this.sub.unsubscribe()
	}
	render() {
		return (
			<View style={{...center}}>
				<Text style={{fontSize:15,fontWeight:'500'}}>{this.props.info.title}</Text>
				<Text style={{fontSize:11}}>Online</Text>
				<Dots activeTab={this.state.activeTab}/>
			</View>
		);
	}
}
