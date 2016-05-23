import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  DatePickerIOS,
  Animated,
  ScrollView
} from 'react-native';
import TimerMixin from 'react-timer-mixin';
import Input from './input';
import Bubble from './bubble';
import IncrementalGroup from 'IncrementalGroup';
import Incremental from 'Incremental';
export default class Tube extends Component {
	state={clipped:false}
	componentDidMount(){
		this.setTimeout(()=>{
			this.scroll.setNativeProps({removeClippedSubviews:true})
		},100)
		
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
					ref={el=>this.scroll=el}
					onTouchStart={this.onTouchStart.bind(this)}
					onTouchMove={this.onTouchMove.bind(this)}
					onTouchEnd={this.onTouchEnd.bind(this)}
					removeClippedSubviews={false} 
					contentContainerStyle={{paddingBottom:90}}>
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
					{this.props.showInput?<Incremental><Input ref={el=>this.input=el}/></Incremental>:null}
			
			</View>
		);
	}
}
Object.assign(Tube.prototype, TimerMixin);
