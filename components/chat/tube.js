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
import {tube$} from '../actions/uiactions'
export default class Tube extends Component {
	state={clipped:false,loading:true};
	componentDidMount(){
		InteractionManager.runAfterInteractions(()=>{
			this.scroll&&this.scroll.setNativeProps({removeClippedSubviews:true})
			this.setState({loading:false})
		})
	}
	handleScroll(e){
		if (e.nativeEvent.contentOffset.y<0){
			this.contentOffset=0
		}else{
			this.contentOffset=1
		}
	}
	show(offset,h){
		this.keyboardHeight=offset
		this.scroll && this.scroll.setNativeProps({style:{bottom:offset+h},contentInset:{top:offset+h}})
	}
	hide(h){
		this.keyboardHeight=0
		this.scroll && this.scroll.setNativeProps({style:{bottom:h},contentInset:{top:h}})

		// this.scroll && this.scroll.setNativeProps({contentInset:{top:h}})
		if(this.contentOffset===0) this.scroll&&this.scroll.setNativeProps({contentOffset:{y:-20}})
	}
	setBottom(h){
		this.scroll && this.scroll.setNativeProps({style:{bottom:this.keyboardHeight+h}})
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
		return (

			<View style={{flex:1,backgroundColor:'white'}}>
				<IncrementalGroup onDone={this._onDone.bind(this)} disabled={false}>
					<ScrollView 
						ref={el=>this.scroll=el}

						scrollEventThrottle={100}
						onScroll={this.handleScroll.bind(this)}
						onTouchStart={this.onTouchStart.bind(this)}
						onTouchMove={this.onTouchMove.bind(this)}
						onTouchEnd={this.onTouchEnd.bind(this)}
						removeClippedSubviews={false} 
						contentContainerStyle={{paddingBottom:90}}>
						{
							messages.map((message,i)=>{
								return  <Bubble index={i} message={message} key={i}/>
							})
						}
					</ScrollView>
				</IncrementalGroup>
				<Input show={this.show.bind(this)} hide={this.hide.bind(this)} setBottom={this.setBottom.bind(this)} ref={el=>this.input=el}/>
				<Loading ref={el=>this.loading=el}/>
			
			</View>
		);
	}
}
Object.assign(Tube.prototype, TimerMixin);
