

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';
export default class NewChat extends Component {
	state={contacts:[]}
	componentWillMount(){
	

	}
	render() {

	
		return (
		<View style={{flex:1,backgroundColor:'white'}}>
			<ScrollView>

			
				<Text> hello </Text>
				

			</ScrollView>
		</View>
		);
	}
}
