

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';
import Spinner from 'react-native-spinkit';
export default class Loading extends Component {
	defaultProps={delay:100};
	_onDone(){
		Animated.timing(this.anim,{toValue:0,duration:300,delay:this.props.delay}).
			start(()=>Animated.timing(this.anim1,{toValue:1,duration:1}).start())
	}
	render() {
		this.anim=this.anim || new Animated.Value(1)
		this.anim1=this.anim1 || new Animated.Value(0)
		return (
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
		);
	}
}
