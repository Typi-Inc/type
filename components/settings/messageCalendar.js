

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  View
} from 'react-native';
import Calendar from 'react-native-calendar';
import IncrementalGroup from 'IncrementalGroup';
import Tube from '../chat/tube'
import Loading from '../utils/loading'
export default class MessageCalendar extends Component {
	onDateSelect(date){
		// console.log(date)
	}
	onDone(){
		this.loading&&this.loading.onDone()
	}
	goTube(){
		this.props.navigator.push({component:Tube,props:{test:true}})
	}
	render() {
		return (
		<View style={{flex:1,backgroundColor:'blue',...center}}>
			<TouchableOpacity onPress={this.goTube.bind(this)}  style={{padding:10,...center,backgroundColor:'white'}}>

				<Text>Navigate to tube</Text>

			</TouchableOpacity>
		</View>
		);
	}
}
