

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  DatePickerIOS,
  ScrollView
} from 'react-native';
import Input from './input';
import Bubble from './bubble'
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

	render() {
		return (

			<View style={{flex:1,backgroundColor:'white'}}>
				
				<ScrollView 
					onTouchStart={this.onTouchStart.bind(this)}
					onTouchMove={this.onTouchMove.bind(this)}
					onTouchEnd={this.onTouchEnd.bind(this)}
					removeClippedSubviews={true} contentContainerStyle={{paddingBottom:80}}>
					<Bubble/>
					<Bubble/>
					<Bubble/>
					<Bubble/>
					<Bubble/>
					<Bubble/>
					<Bubble/>
					<Bubble/>
					<Bubble/>
					<Bubble/>
					<Bubble/>
					<Bubble/>
					<Bubble/>
					<Bubble/>
					<Bubble/>
					<Bubble/>
					<Bubble/>
					<Bubble/>
					<Bubble/>
					<Bubble/>
					<Bubble/>
					<Bubble/>
					<Bubble/>
					<Bubble/>
					<Bubble/>
					<Bubble/>
					<Bubble/>
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
				<Input ref={el=>this.input=el}/>
			</View>
		);
	}
}
