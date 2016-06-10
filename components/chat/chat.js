

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import _ from 'lodash'
import realm from '../db'
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import Tube from './tube';
import {chatTitle} from '../actions/uiactions';
import List from '../home/list';
import StarredItems from '../settings/starredItems';
export default class Chat extends Component {
	state={contacts:realm.objects('Contact')};
	changeTab(obj){
		chatTitle({activeTab:obj['i']})
	}

	render() {
		let assem=this.state.contacts.filtered('givenName="Assem"')
		return (
			<View style={{flex:1,backgroundColor:'white'}}>
				<ScrollableTabView
					style={{backgroundColor:'white'}}
					onChangeTab={this.changeTab.bind(this)}
					tabBarPosition={'overlayTop'}
					renderTabBar={() => <View/>}
				>
		        	<Tube showInput={true} tabLabel="Chat" />
		      		<StarredItems tabLabel="Future"/>
		   	 </ScrollableTabView>
		    </View>
		);
	}
}
