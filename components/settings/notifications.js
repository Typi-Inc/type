

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
					<Text style={{fontSize:13,color:'gray',marginTop:30,marginLeft:15}}>MESSAGE NOTIFICATIONS</Text>
					<View style={{paddingLeft:15,backgroundColor:'white',marginTop:8}}>
						<View style={{height:47,flexDirection:'row',width:320*k,paddingRight:25,alignItems:'center',justifyContent:'space-between'}}>
							<Text style={{fontSize:16}}>Show Notifications</Text>
							<Switch
								onValueChange={(value) => this.setState({chatSwitch: value})}
								onTintColor={APP_COLOR}
								// tintColor={REDz}
								value={this.state.chatSwitch} />

						</View>

						<View style={{height:1,backgroundColor:'rgb(230,230,230)',width:320*k}}/>

						<View style={{height:47,flexDirection:'row',width:320*k,paddingRight:15,alignItems:'center',justifyContent:'space-between'}}>
							<Text style={{fontSize:16}}>Sound</Text>
							<View/>

						</View>


					</View>
					<Text style={{fontSize:13,color:'gray',marginTop:40,marginLeft:15}}>GROUP NOTIFICATIONS</Text>
					<View style={{paddingLeft:15,backgroundColor:'white',marginTop:8}}>
						<View style={{height:47,flexDirection:'row',width:320*k,paddingRight:25,alignItems:'center',justifyContent:'space-between'}}>
							<Text style={{fontSize:16}}>Show Notifications</Text>
							<Switch
								onValueChange={(value) => this.setState({groupSwitch: value})}
								onTintColor={APP_COLOR}
								// tintColor={REDz}
								value={this.state.groupSwitch} />

						</View>

						<View style={{height:1,backgroundColor:'rgb(230,230,230)',width:320*k}}/>

						<View style={{height:47,flexDirection:'row',width:320*k,paddingRight:15,alignItems:'center',justifyContent:'space-between'}}>
							<Text style={{fontSize:16}}>Sound</Text>
							<View/>

						</View>


					</View>
					<Text style={{fontSize:13,color:'gray',marginTop:40,marginLeft:15}}>TASKS NOTIFICATIONS</Text>
					<View style={{paddingLeft:15,backgroundColor:'white',marginTop:8}}>
						<View style={{height:47,flexDirection:'row',width:320*k,paddingRight:25,alignItems:'center',justifyContent:'space-between'}}>
							<Text style={{fontSize:16}}>Show Notifications</Text>
							<Switch
								onValueChange={(value) => this.setState({taskSwitch: value})}
								onTintColor={APP_COLOR}
								// tintColor={REDz}
								value={this.state.taskSwitch} />

						</View>

						<View style={{height:1,backgroundColor:'rgb(230,230,230)',width:320*k}}/>

						<View style={{height:47,flexDirection:'row',width:320*k,paddingRight:15,alignItems:'center',justifyContent:'space-between'}}>
							<Text style={{fontSize:16}}>Sound</Text>
							<View/>

						</View>


					</View>
					<View style={{paddingLeft:15,backgroundColor:'white',marginTop:40}}>
						<View style={{height:47,flexDirection:'row',width:320*k,paddingRight:25,alignItems:'center',justifyContent:'space-between'}}>
							<Text style={{fontSize:16}}>Show Preview</Text>
							<Switch
								onValueChange={(value) => this.setState({previewSwitch: value})}
								onTintColor={APP_COLOR}
								// tintColor={REDz}
								value={this.state.previewSwitch} />

						</View>
					</View>
					<Text style={{fontSize:14,color:'gray',marginTop:7,marginLeft:15}}>Preview message text inside new message notifications.</Text>
						<View style={{paddingLeft:15,backgroundColor:'white',marginTop:30,}}>
						<View style={{height:47,flexDirection:'row',width:320*k,paddingRight:25,alignItems:'center',justifyContent:'space-between'}}>
							<Text style={{fontSize:16,color:RED}}>Reset Notifications Settings</Text>
						</View>

					</View>
					<Text style={{fontSize:14,color:'gray',marginTop:7,marginLeft:15,marginBottom:30,marginRight:5}}>Reset all notification settings, incuding custom notification settings for you chats.</Text>



				</ScrollView>

			</View>
			
		);
	}
}
