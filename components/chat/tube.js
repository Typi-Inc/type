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
import {messages} from '../mock'
import TimerMixin from 'react-timer-mixin';
import Input from './input';
import Bubble from './bubble';
import IncrementalGroup from 'IncrementalGroup';
import Incremental from 'Incremental';
import Spinner from 'react-native-spinkit'
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
		Animated.timing(this.anim,{toValue:0,duration:200,delay:100}).
			start(()=>Animated.timing(this.anim1,{toValue:1,duration:1}).start())
		// this.setTimeout(()=>this.spinner&&this.spinner.setNativeProps({isVisible:false}),200)
	}

	render() {
		this.anim=this.anim || new Animated.Value(1)
		this.anim1=this.anim1 || new Animated.Value(0)
		// if(this.state.loading){
		// 	return <View style={{flex:1,backgroundColor:'white',...center}}>
		// 		<Text>Loading...</Text>
		// 	</View>
		// }
		return (

			<View style={{flex:1,backgroundColor:'white'}}>
				<IncrementalGroup onDone={this._onDone.bind(this)} disabled={false}>
					<ScrollView 
						ref={el=>this.scroll=el}
						onTouchStart={this.onTouchStart.bind(this)}
						onTouchMove={this.onTouchMove.bind(this)}
						onTouchEnd={this.onTouchEnd.bind(this)}
						removeClippedSubviews={false} 
						contentContainerStyle={{paddingBottom:90}}>
						{
							messages.map((message,i)=>{
								return <Bubble message={message} key={i}/>
							})
						}
					</ScrollView>
				</IncrementalGroup>
				<Input ref={el=>this.input=el}/>
				<Animated.View style={{
					bottom:0,top:this.anim1.interpolate({inputRange:[0,1],outputRange:[0,700]}),
					position:'absolute',left:0,
					width:320*k,
					opacity:this.anim,backgroundColor:'white',...center
				}}>
					<Spinner ref={el=>this.spinner=el}
					style={{marginBottom:50}} isVisible={true} 
						size={30} type={'Wave'} color={APP_COLOR}/>
				</Animated.View>
			
			</View>
		);
	}
}
Object.assign(Tube.prototype, TimerMixin);
