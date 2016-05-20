import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {homeSearch$,appNav} from '../actions/uiactions'
export default class Connect extends Component {
	componentDidMount(){
		this.sub=homeSearch$.subscribe(x=>{
			if(x.value==='focusing'){
				this.hide()
			}else if(x.value==='bluring'){
				this.show()
			}
		})
	}
	componentWillUnmount(){
		this.sub.unsubscribe()
	}
	show(){
		Animated.timing(this.anim,{toValue:0,duration:250}).start()
	}
	hide(){
		Animated.timing(this.anim,{toValue:1,duration:250}).start()
	}
	connect(){
		appNav({nav:'appNav',action:'push',name:'discovery',info:{title:'Connect'}})
	}
	render() {
		this.anim=this.anim || new Animated.Value(0)
		return (
		<Animated.View style={{left:this.anim.interpolate({inputRange:[0,1],outputRange:[0,-100]}),}}>
			<TouchableOpacity onPress={this.connect.bind(this)}
			 style={{marginTop:3,marginLeft:7,paddingTop:7,paddingBottom:9,padding:6,paddingLeft:2,}}>
				<Icon name="ios-person-add" size={30} color={APP_COLOR} />
				
			</TouchableOpacity>
		</Animated.View>
		);
  }
}