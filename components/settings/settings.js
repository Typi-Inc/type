

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  NavigatorIOS,
  View
} from 'react-native';
import MessageCalendar from './messageCalendar';
import IncrementalGroup from 'IncrementalGroup';
import Loading from '../utils/loading'
export default class Settings extends Component {
	onDateSelect(date){
		console.log(date)
	}
	_onDone(){
		this.loading&&this.loading._onDone()
	}

	render() {
		let MyView=<View style={{flex:1,backgroundColor:'blue'}}/>
		return (
			<NavigatorIOS
			style={{flex:1}} navigationBarHidden
		      initialRoute={{
		        component: MessageCalendar,
		        title: 'My View Title',
		        passProps: { myProp: 'foo' },
		      }}
		    />
		);
	}
}
