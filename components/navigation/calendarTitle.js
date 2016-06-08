
import TimerMixin from 'react-timer-mixin';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  View
} from 'react-native';
export default class CalendarTitle extends Component {
	render() {
		return (
			<View style={{height:50,width:340*k,backgroundColor:APP_COLOR,...center}}>

				<Text style={{fontWeight:'500',color:'white',fontSize:16}}>July, 2016</Text>



			</View>
		);
	}
}
Object.assign(CalendarTitle.prototype, TimerMixin);
