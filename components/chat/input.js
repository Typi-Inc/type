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
import {keyboard,openAnimation,fast,veryFast} from '../animations';
import dismissKeyboard from 'dismissKeyboard';
import moment from 'moment';
import IncrementalGroup from 'IncrementalGroup';
import Incremental from 'Incremental';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Input extends Component {
	state={
		text:'',
		showTime:false,
		loading:true,
		goDown:true,
		height:0,
		date: new Date(),
     	timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
	};
	onDateChange(date){
		LayoutAnimation.configureNext(fast)
		
		if(date < new Date) this.setState({date: new Date});
		else this.setState({date: date});
	}
	render() {
		if(this.state.loading) return <View/>
		return (
		<View>
			<View ref={el=>this.main=el} 
				style={{position:'absolute',bottom:0,left:0,
				backgroundColor:'transparent'}}>
				<View style={{backgroundColor:APP_COLOR,padding:6, paddingRight:4,opacity:!this.state.showTime?0:1,
					shadowOffset:{width:4,height:4},shadowOpacity:0.4,borderRadius:4,flexDirection:'row',...center,
					alignSelf:'flex-start',margin:2,marginBottom:2}}>
					<Text style={{color:'white',fontSize:14}}>{moment(this.state.date).calendar()}</Text>
					{this.state.goDown?<View style={{backgroundColor:'white',borderRadius:4,width:20,height:20,...center,marginLeft:6,paddingTop:2}}>
						<TouchableOpacity style={{padding:6}} onPress={()=>this.setState({showTime:false,date:new Date()})}
							><Icon name="ios-close" style={{backgroundColor:'transparent'}} 
						
						size={20} color={'black'} /></TouchableOpacity>
					</View>

						:null}
					
				</View>
				<View ref={el=>this.wrapper=el} 
              		style={{backgroundColor:BACKGROUND_GREY,marginBottom:0,
             	 	height:Math.max(53, (12*k+this.state.height)),borderTopWidth:1,
              		flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-start',
              		borderColor:BORDER_COLOR,width:320*k,padding:7,paddingLeft:0}}>
              		<TouchableOpacity style={{padding:6,paddingBottom:5,...center}} onPress={this.pressTimer.bind(this)}>
	              		{this.state.goDown?<Icon name="md-time" size={24} color={'gray'} />:
	              		<Icon name="ios-keypad" size={25} color={'gray'} />}
              		</TouchableOpacity>
              		<TextInput
              			multiline={true}
              			ref={el=>this.textInput=el}
              			placeholder={'Message'}
                    	placeholderTextColor={'rgb(160,160,160)'}
                   	 	style={{height: Math.max(32, this.state.height+4*k),
                    		fontSize:16,alignItems:'center',backgroundColor:'white',
                      		borderColor: BORDER_COLOR, borderWidth:1,borderRadius:6,
                      		alignSelf:'center',
                      		width:/\S/.test(this.state.text)?238*k:273*k,
                      		paddingLeft:5*k}}
                      	// value={this.state.text}
                      	onChange={(event) => {
                       		// var handle = InteractionManager.createInteractionHandle();
                       		this.requestAnimationFrame(()=>LayoutAnimation.configureNext(fast))
                      		this.setState({
								text: event.nativeEvent.text,
								height: Math.min(event.nativeEvent.contentSize.height,129*k)
	                        });
							// InteractionManager.clearInteractionHandle(handle);

                      	}}
              		/>
              		<TouchableOpacity><Text ref={el=>this.send=el} 
              			style={{marginLeft:5,marginBottom:7,marginRight:5,
              				color:APP_COLOR,fontWeight:'500',
              				fontSize:16,
              				opacity:/\S/.test(this.state.text)?1:0}}>Send</Text>
              		</TouchableOpacity>
              		
              	</View>
          		
			</View>
			<View ref={el=>this.white=el} style={{position:'absolute',bottom:0,height:0,width:320*k,backgroundColor:BACKGROUND_GREY}}/>
			
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
		    
			
		</View>
		);
	}
	pressTimer(){
		if(this.state.goDown){
			this.setState({goDown:false,showTime:true})
			this.white&&this.white.setNativeProps({style:{height:226,bottom:-10}})
			this.datePicker && this.datePicker.setNativeProps({style:{bottom:-10}})
			dismissKeyboard()
			LayoutAnimation.configureNext(keyboard);
			this.main && this.main.setNativeProps({style:{bottom:213}})
		}else{
			this.textInput.focus()
		}
		

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
		this.setState({goDown:true})
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
	    	// LayoutAnimation.configureNext(openAnimation)
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