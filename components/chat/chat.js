

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import Tube from './tube';
class Dots extends Component {
	render() {
		return (
				<View style={{flexDirection:'row',alignSelf:'center',margin:5,backgroundColor:'transparent'}}>

				<View   style={{width:7,height:7,borderRadius:5,
					backgroundColor:this.props.activeTab===0?APP_COLOR:TRANSPARENT_GREY,marginRight:3}}/>


				<View style={{width:7,height:7,borderRadius:5,
					backgroundColor:this.props.activeTab===1?APP_COLOR:TRANSPARENT_GREY,marginLeft:3}}/>


			</View>
		);
	}
}
export default class Chat extends Component {
	render() {

		return (
			<View style={{flex:1,backgroundColor:'white'}}>
				<ScrollableTabView
				renderTabBar={()=><DefaultTabBar backgroundColor='rgba(255, 255, 255, 0.7)' />}
					tabBarPosition={'overlayTop'}
					// renderTabBar={() => <Dots/>}
				>
		        	<Tube showInput={true} tabLabel="Chat" />
		      		<View tabLabel="Future" style={{flex:1,backgroundColor:'red'}} />
		   	 </ScrollableTabView>
		    </View>
		);
	}
}
