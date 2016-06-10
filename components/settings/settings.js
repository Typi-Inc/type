

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Switch,
  ScrollView,
  View
} from 'react-native';
export default class Notifications extends Component {
	state={chatSwitch:true,groupSwitch:true,previewSwitch:true,taskSwitch:true}
	render() {
		return (
			<View style={{flex:1,backgroundColor:'rgb(240,240,240)'}}>
				<ScrollView>
					<Text style={{fontSize:13,color:'gray',marginTop:30,marginLeft:15}}>ACCOUNT</Text>
					<View style={{paddingLeft:15,backgroundColor:'white',marginTop:8}}>
						<View style={{height:47,flexDirection:'row',width:320*k,paddingRight:25,alignItems:'center',justifyContent:'space-between'}}>
							<Text style={{fontSize:16}}>Account Settings</Text>
						</View>

						


					</View>
					<Text style={{fontSize:13,color:'gray',marginTop:40,marginLeft:15}}>SOCIAL</Text>
					<View style={{paddingLeft:15,backgroundColor:'white',marginTop:8}}>
						<View style={{height:47,flexDirection:'row',width:320*k,paddingRight:25,alignItems:'center',justifyContent:'space-between'}}>
							<Text style={{fontSize:16}}>Share with Friends</Text>
						</View>

						<View style={{height:1,backgroundColor:'rgb(230,230,230)',width:320*k}}/>

						<View style={{height:47,flexDirection:'row',width:320*k,paddingRight:15,alignItems:'center',justifyContent:'space-between'}}>
							<Text style={{fontSize:16}}>Facebook page</Text>
						</View>
						<View style={{height:1,backgroundColor:'rgb(230,230,230)',width:320*k}}/>

						<View style={{height:47,flexDirection:'row',width:320*k,paddingRight:15,alignItems:'center',justifyContent:'space-between'}}>
							<Text style={{fontSize:16}}>Our Blog</Text>
						</View>


					</View>
					<Text style={{fontSize:13,color:'gray',marginTop:40,marginLeft:15}}>PRODUCT AND BRAND</Text>
					<View style={{paddingLeft:15,backgroundColor:'white',marginTop:8,marginBottom:40}}>
						<View style={{height:47,flexDirection:'row',width:320*k,paddingRight:25,alignItems:'center',justifyContent:'space-between'}}>
							<Text style={{fontSize:16}}>About Typi</Text>
						</View>

						<View style={{height:1,backgroundColor:'rgb(230,230,230)',width:320*k}}/>

						<View style={{height:47,flexDirection:'row',width:320*k,paddingRight:15,alignItems:'center',justifyContent:'space-between'}}>
							<Text style={{fontSize:16}}>Intellectual Property and License</Text>
							<View/>

						</View>


					</View>



				</ScrollView>

			</View>
			
		);
	}
}
