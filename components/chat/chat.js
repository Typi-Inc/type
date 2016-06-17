

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  InteractionManager,
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
	state={showFuture:false};
	changeTab(obj){
		chatTitle({activeTab:obj['i']})
	}
	componentDidMount(){
		InteractionManager.runAfterInteractions(()=>{
			this.setState({showFuture:true})
		})
	}
	render() {
		// let assem=this.state.contacts.filtered('givenName="Assem"')
		return (
			<View style={{flex:1,backgroundColor:'white'}}>
				<ScrollableTabView
					style={{backgroundColor:'white'}}
					onChangeTab={this.changeTab.bind(this)}
					tabBarPosition={'overlayTop'}
					renderTabBar={() => <View/>}
				>
		        	<Tube showInput={true} tabLabel="Chat" chat={this.props.info.item} />
		      		{
		      			this.state.showFuture?<StarredItems tabLabel="Future"/>:
		      				<View tabLabel="Future"/>
		      		}
		   	 </ScrollableTabView>
		    </View>
		);
	}
}
