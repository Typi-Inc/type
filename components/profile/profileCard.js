

import React, { Component } from 'react';
import ReactNative, {
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
  Animated,
  TouchableOpacity,
  View
} from 'react-native';
import {appNav} from '../actions/uiactions';
import Icon from 'react-native-vector-icons/Ionicons';
export default class ProfileCard extends Component {

	visitEdit(){
		appNav({action:'push',nav:'appNav',name:'editProfile',info:{title:'Edit Profile'}})
	}
	takePhoto(){

	}

	openImage(){
		Animated.spring(this.anim,{toValue:this.anim._value>0?0:1,tension:140,friction:16}).start()
	}
	render() {
		this.anim=this.anim || new Animated.Value(0)

		return (
			<View style={{flex:1,backgroundColor:'white',...center,marginBottom:10}}>
				<TouchableWithoutFeedback onPress={this.openImage.bind(this)}>
					<Animated.Image 
					style={{height:this.anim.interpolate({inputRange:[0,1],outputRange:[100,320*k]}),
						width:this.anim.interpolate({inputRange:[0,1],outputRange:[100,320*k]}),
						borderRadius:this.anim.interpolate({inputRange:[0,1],outputRange:[50,0]}),
						margin:this.anim.interpolate({inputRange:[0,1],outputRange:[5,0]})}} 
					source={{uri:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQBDQ3xvBDeKP7UBAuWMQOiCjiWBuj4Gr2D6NSAYsX3hS0XLYxKfQ'}} /></TouchableWithoutFeedback>
				<View style={{flexDirection:'row',alignItems:'center'}}>
					<TouchableOpacity onPress={this.visitEdit.bind(this)}><View style={{height:50,width:50,borderRadius:10,borderWidth:2,borderColor:'rgb(220,220,220)',...center,marginLeft:10}}>
							<Icon name="md-create" size={24} color={GREEN} />
						</View>
					</TouchableOpacity>
					<View style={{...center}}>
						<Text style={{fontSize:18,margin:5}}>Kayne West</Text>
						<Text style={{color:'rgb(160,160,160)',margin:5,width:190,textAlign:'center'}}>I am the hero of this music generation. Genius of the world.</Text>
					</View>
					<View style={{height:50,width:50,borderRadius:10,borderWidth:2,borderColor:'rgb(220,220,220)',...center,marginRight:10}}>
						<Icon name="md-camera" size={24} color={GREEN} />
					</View>
				</View>
			</View>
		);
	}
}
