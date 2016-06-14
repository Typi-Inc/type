

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import Lightbox from 'react-native-lightbox';
export default class Photo extends Component {
	render() {
		return (
			<View style={{flex:1,backgroundColor:'white',...center,marginBottom:15}}>
				<Text style={{margin:5}}>18 Septemeber, at 12:32</Text>
				<Lightbox><Image style={{width:320*k,height:320*k,}} source={{uri:this.props.uri}}/></Lightbox>
				<Text style={{margin:7}}>Hello this is the comment or caption section</Text>
			</View>
		);
	}
}
