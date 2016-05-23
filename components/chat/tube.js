import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  DatePickerIOS,
  InteractionManager,
  Animated,
  ScrollView
} from 'react-native';
import TimerMixin from 'react-timer-mixin';
import Input from './input';
import Bubble from './bubble';
import IncrementalGroup from 'IncrementalGroup';
import Incremental from 'Incremental';
export default class Tube extends Component {
	state={clipped:false,loading:true};
	componentDidMount(){
		InteractionManager.runAfterInteractions(()=>{
			this.scroll&&this.scroll.setNativeProps({removeClippedSubviews:true})
			this.setState({loading:false})
		})
	
		
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
		if(this.state.loading){
			return <View style={{flex:1,backgroundColor:'white',...center}}>
				<Text>Loading...</Text>
			</View>
		}
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
					
					
				</ScrollView>
				<Input ref={el=>this.input=el}/>
			
			</View>
		);
	}
}
Object.assign(Tube.prototype, TimerMixin);
