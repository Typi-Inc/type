import React, { Component } from 'react';
import ReactNative, {
  StyleSheet,
  Text,
  View,
  DatePickerIOS,
  Image,
  InteractionManager,
  Animated,
  RefreshControl,
  ScrollView,
  LayoutAnimation
} from 'react-native';
import {messages, newMessages} from '../mock';
let UIManager = require('NativeModules').UIManager;

import TimerMixin from 'react-timer-mixin';
import Input from './input';
import Bubble from './bubble';
import IncrementalGroup from 'IncrementalGroup';
import Incremental from 'Incremental';
import Spinner from 'react-native-spinkit';
import Loading from '../utils/loading';
import Message from './message';
import {tube$} from '../actions/uiactions';
var update = ReactNative.addons.update;
import dismissKeyboard from 'dismissKeyboard';
import {keyboard} from '../animations'
export default class Tube extends Component {
	state={clipped:false,loading:true,refreshing:false,refreshColor:'transparent',messages:messages,clippedSubviews:true};
	componentDidMount(){

		InteractionManager.runAfterInteractions(()=>{
			this.scroll&&this.scroll.setNativeProps({removeClippedSubviews:true})
			// this.setState({loading:false})
		})
	}
	handleScroll(e){
		if (e.nativeEvent.contentOffset.y<0){
			this.contentOffset=0
		}else{
			this.contentOffset=1
		}
		// console.log(e.nativeEvent.contentSize.height)
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
	_onRefresh(){
		if(this.state.messages.length>15) this.setState({refreshing:false});
		else{
			this.setState({refreshing:true,refreshColor:APP_COLOR},()=>{

				this.setTimeout(()=>{
					let list=newMessages.concat(this.state.messages)
					// LayoutAnimation.configureNext(keyboard)
					this.setState({messages:update(this.state.messages,{$unshift:newMessages})},)
					
				},500)


			})
		}
		
	}
	onContentSizeChange(contentWidth,contentHeight){
		// this.setState({clippedSubviews:false},()=>{
			
			this.handle = ReactNative.findNodeHandle(this['90'])
			if(this.handle) UIManager.measure(this.handle,(x,y,w,h,px,py)=>{
				this.scroll.scrollTo({x:0,y:py-160,animated:false})
				// this.setTimeout(()=>{this.setState({clippedSubviews:true})},500)
			})

		// })
		

		
		// this.setState({offset:contentHeight-this.contentHeight+20})
		// this.contentHeight=contentHeight
	}
	render() {

		// this.setTimeout(()=>dismissKeyboard(),200)
		this.anim=this.anim || new Animated.Value(1)
		this.anim1=this.anim1 || new Animated.Value(0)
		this.contentHeight=this.contentHeight||0
		return (
		<Image style={{flex:1}} source={{uri:"wall1",isStatic:true}}>
			<View style={{flex:1}}>
					<ScrollView 
						ref={el=>this.scroll=el}
						 refreshControl={this.state.messages.length>15?null:
				          <RefreshControl
				          	// title={'loading'}
				          	tintColor={this.state.refrechColor}
				            refreshing={this.state.refreshing}
				            onRefresh={this._onRefresh.bind(this)}
				          />
				        }
				        onContentSizeChange={this.onContentSizeChange.bind(this)}
						scrollEventThrottle={100}
						onScroll={this.handleScroll.bind(this)}
						onTouchStart={this.onTouchStart.bind(this)}
						onTouchMove={this.onTouchMove.bind(this)}
						onTouchEnd={this.onTouchEnd.bind(this)}
						removeClippedSubviews={false} 
						contentContainerStyle={{paddingBottom:90}}>
						{
							this.state.messages.map((message,i)=>{
								return  <Bubble ref={el=>this[`${i}`]=el} index={i} message={message} key={i}/>
							})
						}
					</ScrollView>
				<Input show={this.show.bind(this)} hide={this.hide.bind(this)} setBottom={this.setBottom.bind(this)} ref={el=>this.input=el}/>
				
			
			</View>
		</Image>
		);
	}
}
Object.assign(Tube.prototype, TimerMixin);
