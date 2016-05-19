import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Animated,
  TouchableOpacity,
  DatePickerIOS,
  InteractionManager,
  LayoutAnimation,
  DeviceEventEmitter
} from 'react-native';
import {input$} from '../actions/uiactions';
import {keyboard,openAnimation} from '../animations';
import dismissKeyboard from 'dismissKeyboard';
import moment from 'moment';
import IncrementalGroup from 'IncrementalGroup';
import Incremental from 'Incremental';
export default class Input extends Component {
	state={
		loading:true,
		goDown:true,
		height:0,
		date: new Date(),
     	timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
	};
	onDateChange(date){
		LayoutAnimation.configureNext(openAnimation)
		if(date < new Date) this.setState({date: new Date});
		else this.setState({date: date});
	}
	
	getDate(){

	}
	
	render() {
		// if(this.state.loading) return null
		return (
		<View>
			<View ref={el=>this.main=el} 
				style={{position:'absolute',width:320*k,bottom:0,left:0,
				backgroundColor:'transparent'}}>
				<View style={{backgroundColor:ORANGE,padding:7, paddingRight:8,
					shadowOffset:{width:4,height:4},shadowOpacity:0.4,borderRadius:4,
					alignSelf:'flex-start',margin:2,marginBottom:2}}>
					<Text style={{color:'white',fontSize:12}}>{moment(this.state.date).calendar()}</Text>

				</View>
				<View ref={el=>this.wrapper=el} 
              		style={{backgroundColor:BACKGROUND_GREY,marginBottom:0,
             	 	height:Math.max(53, (12*k+this.state.height)),borderTopWidth:1,
              		flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-start',
              		borderColor:BORDER_COLOR,width:320*k,padding:7,paddingLeft:0}}>
              		<TouchableOpacity style={{padding:6,paddingBottom:10*k,...center}} onPress={this.pressTimer.bind(this)}>
	              		<Image
	              			style={{width:20,height:20,}}
	              			source={{uri:'clock',isStatic:true}}
	              		/>
              		</TouchableOpacity>
              		<TextInput
              			multiline={true}
              			ref={el=>this.textInput=el}
              			placeholder={'Message'}
                    	placeholderTextColor={'rgb(160,160,160)'}
                   	 	style={{height: Math.max(32, this.state.height+4*k),
                    		fontSize:16,alignItems:'center',backgroundColor:'white',
                      		borderColor: BORDER_COLOR, borderWidth:1,borderRadius:6,
                      		alignSelf:'center',width:273*k,paddingLeft:5*k}}
                      	// value={this.state.text}
                      	onChange={(event) => {
                      		this.setState({
								text: event.nativeEvent.text,
								height: Math.min(event.nativeEvent.contentSize.height,129*k)
	                        });
                      	}}
              		/>
              	</View>
          		
			</View>
			<View ref={el=>this.white=el} style={{position:'absolute',bottom:0,height:0,width:320*k,backgroundColor:BACKGROUND_GREY}}/>
			<IncrementalGroup disabled={false} >
				<Incremental>
					<View ref={el=>this.datePicker=el} style={{position:'absolute',bottom:-230,left:0,
						paddingBottom:0*h,...center,paddingLeft:k>1?20*k:0,backgroundColor:BACKGROUND_GREY,paddingTop:0
						// backgroundColor:'rgba(34,167,240,0.4)'
					}}>
						<DatePickerIOS
						style={{width:320*k}}
						ref={el=>this.datePicker1=el} 
							// style={{height:100=}}
					        	date={this.state.date}
					        	mode="datetime"
					        	timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
					       		onDateChange={this.onDateChange.bind(this)}
					       	 />
			    	</View>
		    	</Incremental>
			</IncrementalGroup>
			
		</View>
		);
	}
	pressTimer(){
		this.setState({goDown:false})
		this.white&&this.white.setNativeProps({style:{height:216,bottom:-10}})
		this.datePicker && this.datePicker.setNativeProps({style:{bottom:-10}})
		dismissKeyboard()
		LayoutAnimation.configureNext(keyboard);
		this.main && this.main.setNativeProps({style:{bottom:200}})

	}
	show(e){
		this.setState({goDown:true})
		LayoutAnimation.configureNext(keyboard);
		this.datePicker && this.datePicker.setNativeProps({style:{bottom:-230}})
		this.white&&this.white.setNativeProps({style:{height:e.endCoordinates.height,bottom:0}})
		this.main && this.main.setNativeProps({style:{bottom:e.endCoordinates.height}})	
	}
	keyboardIsUp(){
		return this.state.goDown
	}
	dismissTimer(){
		this.white&&this.white.setNativeProps({style:{height:10}})
		LayoutAnimation.configureNext(keyboard);
		this.datePicker && this.datePicker.setNativeProps({style:{bottom:-230}})
		
		this.main && this.main.setNativeProps({style:{bottom:0}})
	}
	hide(e){
		if(!this.state.goDown) return;
		this.white&&this.white.setNativeProps({style:{height:0}})
	  	LayoutAnimation.configureNext(keyboard);
	    this.main && this.main.setNativeProps({style:{bottom:0}})
	}
	componentDidMount(){
		this.sub=input$.subscribe((x)=>{
			if(x.action='unsubscribe'){
				this.unsubscribe()
			}
		});
		this._keyboardWillShowSubscription= DeviceEventEmitter.addListener('keyboardWillShow', this.show.bind(this));
	    this._keyboardWillHideSubscription= DeviceEventEmitter.addListener('keyboardWillHide', this.hide.bind(this));
	    InteractionManager.runAfterInteractions(()=>{
	    	this.setState({loading:false},()=>{
	    		// this.setTimeout(()=>{let handle=ReactNative.findNodeHandle(this.datePicker1)
		    	// 	UIManager.measure(handle,(x,y,width,height,pagex,pagey)=>{
		    	// 		console.log(height,'this is height bayb')
		    	// 	})
	    		// },100)
	    	})
	    })
	}
	componentWillUnmount(){
	  	this.unsubscribe()
	}

	unsubscribe(){
		this._keyboardWillShowSubscription.remove()
	  	this._keyboardWillHideSubscription.remove()
	  	this.sub.unsubscribe()
	}

}
Object.assign(Input.prototype, TimerMixin);