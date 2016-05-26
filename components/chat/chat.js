

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
		let assem=this.state.contacts.filtered('givenName="Assem"')
		// console.log('assem',assem)
		// console.log(this.state.contacts)
		return (
			<View style={{flex:1,backgroundColor:'white'}}>
				<ScrollableTabView
					style={{backgroundColor:'white'}}
					onChangeTab={this.changeTab.bind(this)}
					tabBarPosition={'overlayTop'}
					renderTabBar={() => <View/>}
				>
		        	<Tube showInput={true} tabLabel="Chat" />
		      		<View style={{flex:1,backgroundColor:TRANSPARENT_GREY,...center}} tabLabel="Future">
		      			{!_.isEmpty(assem)?<Image style={{width:100,height:100}} 
		      				source={{uri:'data:image/png;base64,'+assem[1].picture,isStatic:true}}/>:null}
		      		</View>
		   	 </ScrollableTabView>
		    </View>
		);
	}
}
