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
  LayoutAnimation,
  DeviceEventEmitter
} from 'react-native';
import {input$} from '../actions/uiactions';
import {keyboard} from '../animations';
export default class Input extends Component {
	state={height:0};
	
	render() {
		return (
			<View ref={el=>this.main=el} 
				style={{position:'absolute',width:320*k,bottom:0,left:0,
				backgroundColor:BACKGROUND_GREY}}>
				<View ref={el=>this.wrapper=el} 
              		style={{backgroundColor:'white',marginBottom:0,
             	 	height:Math.max(50*k, (12*k+this.state.height)),borderTopWidth:1,
              		flexDirection:'row',alignItems:'flex-end',justifyContent:'flex-start',
              		borderColor:BORDER_COLOR,width:320*k,padding:7}}>
              		<TouchableOpacity>
	              		<Image
	              			style={{width:18,height:18,marginBottom:8*k}}
	              			source={{uri:'clock',isStatic:true}}
	              		/>
              		</TouchableOpacity>
              		<TextInput
              			multiline={true}
              			ref={el=>this.textInput=el}
              			placeholder={'Message'}
                    	placeholderTextColor={'rgb(160,160,160)'}
                   	 	style={{height: Math.max(30*k, this.state.height),marginLeft:7,
                    		fontSize:16,alignItems:'flex-end',backgroundColor:'white',
                      		borderColor: BORDER_COLOR, borderWidth:1,justifyContent:'flex-start',borderRadius:6,
                      		alignSelf:'center',width:274*k,paddingLeft:5*k}}
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
		);
	}
	show(e){
		if(this.main){
			LayoutAnimation.configureNext(keyboard);
			this.main && this.main.setNativeProps({style:{bottom:e.endCoordinates.height}})
      
		}
	}
	hide(e){
		if(this.main){
 	  		LayoutAnimation.configureNext(keyboard);
		    this.main && this.main.setNativeProps({style:{bottom:0}})

 	  	}

	}
	componentDidMount(){
		this.sub=input$.subscribe((x)=>{
			if(x.action='unsubscribe'){
				this.unsubscribe()
			}
		})
		this._keyboardWillShowSubscription= DeviceEventEmitter.addListener('keyboardWillShow', this.show.bind(this));
	    this._keyboardWillHideSubscription= DeviceEventEmitter.addListener('keyboardWillHide', this.hide.bind(this));
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