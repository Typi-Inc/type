

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import Input from './input'
export default class Tube extends Component {
	render() {
		return (

			<View style={{flex:1,backgroundColor:'white'}}>
				<ScrollView>
					<Text>Draf</Text>
				</ScrollView>
				<Input/>
			</View>
		);
	}
}
