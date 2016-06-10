

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Switch,
  ScrollView,
  View
} from 'react-native';
export default class Settings extends Component {
	state={chatSwitch:true,groupSwitch:true,previewSwitch:true,taskSwitch:true}
	render() {
		return (
			<View style={{flex:1,backgroundColor:'rgb(240,240,240)'}}>
				<ScrollView>

				<View style={{paddingLeft:15,backgroundColor:'white',marginTop:40}}>
						<View style={{height:47,flexDirection:'row',width:320*k,paddingRight:25,alignItems:'center',justifyContent:'space-between'}}>
							<Text style={{fontSize:16}}>Account Settings</Text>
							

						</View>
					</View>
	
					<View style={{paddingLeft:15,backgroundColor:'white',marginTop:40}}>
						<View style={{height:47,flexDirection:'row',width:320*k,paddingRight:25,alignItems:'center',justifyContent:'space-between'}}>
							<Text style={{fontSize:16}}>Share with Friends</Text>
							

						</View>
					</View>

					<View style={{paddingLeft:15,backgroundColor:'white',marginTop:40}}>
						<View style={{height:47,flexDirection:'row',width:320*k,paddingRight:25,alignItems:'center',justifyContent:'space-between'}}>
							<Text style={{fontSize:16}}>About Typi</Text>
							

						</View>
					</View>



				</ScrollView>

			</View>
			
		);
	}
}
