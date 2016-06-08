
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import {plusButtonPress$,plusButtonPress,cancelCreate} from '../actions/uiactions'
export default class Background extends Component {
	componentDidMount(){
		this.sub=plusButtonPress$.subscribe(x=>{
			if(x.action==='press'){
				this.show()
			}else if(x.action==='hide'){
				Animated.timing(this.anim,{toValue:0,duration:1}).start()
			}else if(x.action==='clean'){
				this.anim.setValue(0)
			}else if(x.action==='unsubscribe'){
				this.sub.unsubscribe()
				
			}
		})
	}
	componentWillUnmount(){
		this.sub.unsubscribe()
	}
	show(){
		Animated.timing(this.anim,{toValue:1,duration:1}).start()

	}
	hide(){
		plusButtonPress({action:'hide'})
		cancelCreate({action:'cancel'})

	}
	render() {
		this.anim=this.anim || new Animated.Value(0)
		return (
			<TouchableWithoutFeedback onPress={this.hide.bind(this)}>
				<Animated.View 
					style={{position:'absolute',top:0,left:0,
					backgroundColor:TRANSPARENT_GREY,width:320*k,
					height:this.anim.interpolate({inputRange:[0,1],outputRange:[0,568*h]})
				}}/>
			</TouchableWithoutFeedback>

			)	
	}
}
