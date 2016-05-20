

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';
import Item from '../home/item'
let item={
	toWhom:{name:'Barak Obama',
	image:'http://a57.foxnews.com/media2.foxnews.com/BrightCove/694940094001/2016/05/09/876/493/694940094001_4885965796001_9cc88214-5962-41e4-a293-56e1f55dcc00.jpg?ve=1&tl=1',
	karma:123},lastTime:'09:20',counter:0,
	lastText:'yo'
}
export default class NewChat extends Component {
	state={contacts:[]}
	componentWillMount(){
	

	}
	render() {

	
		return (
		<View style={{flex:1,backgroundColor:'white'}}>
			<Item item={item}/>
		</View>
		);
	}
}
