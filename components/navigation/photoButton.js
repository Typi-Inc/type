

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
export default class PhotoButton extends Component {
	render() {
		return (
			<Image 
				style={{height:42,width:42,borderRadius:42/2,marginTop:2,marginRight:5}} 
				source={{uri:this.props.info.item.toWhom.image}}/>
		);
	}
}
