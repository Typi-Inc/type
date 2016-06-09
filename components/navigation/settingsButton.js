import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {homeSearch$,appNav,sideMenu} from '../actions/uiactions'
export default class SettingsButton extends Component {
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
		Animated.timing(this.anim,{toValue:1,duration:200}).start()
	}
	openSettings(){
		console.log('open settings')
		sideMenu({action:'open'})
		// appNav({nav:'appNav',action:'push',info:{title:'Settings'},name:'settings'})
	}
	render() {
		this.anim=this.anim || new Animated.Value(0)
		return (
		<Animated.View style={{right:this.anim.interpolate({inputRange:[0,1],outputRange:[0,-100]}),}}>

			<TouchableOpacity onPress={this.openSettings.bind(this)}
			  style={{marginTop:4,marginLeft:7,paddingTop:5,paddingBottom:9,paddingRight:7,paddingLeft:0,}}>

				<Icon name="menu" size={27} color={APP_COLOR} />


			</TouchableOpacity>
		</Animated.View>
		);
  }
}