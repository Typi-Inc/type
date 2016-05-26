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
import Spinner from 'react-native-spinkit';
import Loading from '../utils/loading';
import Message from './message';
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
		this.loading&&this.loading._onDone()
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
						// keyboardShouldPersistTaps={true}
						onTouchStart={this.onTouchStart.bind(this)}
						onTouchMove={this.onTouchMove.bind(this)}
						onTouchEnd={this.onTouchEnd.bind(this)}
						removeClippedSubviews={false} 
						contentContainerStyle={{paddingBottom:90}}>
						{
							messages.map((message,i)=>{
								return <Message message={message} key={i}/>
							})
						}
					</ScrollView>
				</IncrementalGroup>
				<Input ref={el=>this.input=el}/>
				<Loading ref={el=>this.loading=el}/>
			
			</View>
		);
	}
}
Object.assign(Tube.prototype, TimerMixin);
// <Bubble message={message} key={i}/>