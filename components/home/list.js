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
import TimerMixin from 'react-timer-mixin';
import Item from './item';
import {directs} from '../mock';
import PlusButton from '../creation/plusButton';
import Background from '../creation/background';
// import WindowedListView from 'WindowedListView';
export default class List extends Component {

	state={clippedSubviews:false}
	componentDidMount(){
		// this.setTimeout(()=>this.scroll.setNativeProps({removeClippedSubviews:true}),100)
	}
	render() {
		// console.log(WindowedListView)
	return (
		<View style={{flex:1,backgroundColor:'white'}}>
			<ScrollView
				automaticallyAdjustContentInsets={true}
				ref={el=>this.scroll=el}
			 	removeClippedSubviews={true}
				>
				{directs.map((item,i)=><Item key={i} item={item}/>)}
			</ScrollView>
			<Background/>
			<PlusButton/>
		</View>
	);
  }
}
Object.assign(List.prototype, TimerMixin);
