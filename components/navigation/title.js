

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
export default class Title extends Component {
	render() {
		return (
			<Text style={{fontSize:18,marginTop:10,fontWeight:'500'}}>{this.props.info.title}</Text>
		);
	}
}
