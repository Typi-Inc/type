import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  Animated,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import Item from './item';
import {directs} from '../mock';
import PlusButton from '../creation/plusButton';
import Background from '../creation/background'
export default class List extends Component {


	render() {
	return (
		<View style={{flex:1}}>
			<ScrollView removeClippedSubviews={true}>
				{directs.map((item,i)=><Item key={i} item={item}/>)}
			</ScrollView>
			<Background/>
			<PlusButton/>
		</View>
	);
  }
}
