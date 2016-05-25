

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import realm from '../db'
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import Tube from './tube';
import {chatTitle} from '../actions/uiactions';
import List from '../home/list';
export default class Chat extends Component {
	state={contacts:realm.objects('Contact')};
	changeTab(obj){
		// console.log(obj['i'])
		chatTitle({activeTab:obj['i']})
	}
	componentWillMount(){
		console.log(this.state.contacts.length)

	}
	render() {
		// console.log(this.state.contacts.filtered('givenName="Assem"'))

		return (
			<View style={{flex:1,backgroundColor:'white'}}>
				<ScrollableTabView
				style={{backgroundColor:'white'}}
				onChangeTab={this.changeTab.bind(this)}
					tabBarPosition={'overlayTop'}
					renderTabBar={() => <View/>}
				>
		        	<Tube showInput={true} tabLabel="Chat" />
		      		<View style={{flex:1,backgroundColor:TRANSPARENT_GREY}} tabLabel="Future"/>
		   	 </ScrollableTabView>
		    </View>
		);
	}
}
