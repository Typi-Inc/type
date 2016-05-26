

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Contact extends Component {
	render() {
		let contact=this.props.contact
		return (
			<View style={{flexDirection:'row',overflow:'hidden',padding:10}}>

				<Text style={{fontSize:16,flex:5}}>{contact.fullName}</Text>

				<Text style={{color:APP_COLOR}}>Invite</Text>

			</View>
		);
	}
}
