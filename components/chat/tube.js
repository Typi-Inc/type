

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  DatePickerIOS,
  Animated,
  ScrollView
} from 'react-native';
import Input from './input';
import Bubble from './bubble';
import IncrementalGroup from 'IncrementalGroup';
import Incremental from 'Incremental';
export default class Tube extends Component {

	componentDidMount(){

	}
	componentWillUnmount(){

	}
	
	onTouchStart(){
		this.touchMove=false
	}
	onTouchMove(){
		this.touchMove=true
	}
	onTouchEnd(){
		if(!this.touchMove && !this.input.keyboardIsUp()) this.input.dismissTimer()
	}
	_onDone(){
		Animated.timing(this.anim,{toValue:0,duration:100}).start()
	}

	render() {
		this.anim=this.anim || new Animated.Value(1)
		return (

			<View style={{flex:1,backgroundColor:'white'}}>
				
				<ScrollView 
					onTouchStart={this.onTouchStart.bind(this)}
					onTouchMove={this.onTouchMove.bind(this)}
					onTouchEnd={this.onTouchEnd.bind(this)}
					removeClippedSubviews={true} 
					contentContainerStyle={{paddingBottom:80}}>
					<Bubble/>
					<Bubble/>
					<Bubble/>
					<Bubble/>
					<Bubble/>
					<Bubble/>
					<Bubble/>
					<Bubble/>
					<Bubble/>
				</ScrollView>
					<Incremental><Input ref={el=>this.input=el}/></Incremental>
			
			</View>
		);
	}
}
