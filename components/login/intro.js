import TimerMixin from 'react-timer-mixin'
let UIManager = require('NativeModules').UIManager;
import React, {Component} from 'react';
import ReactNative from 'react-native'; 
let {
  AppRegistry,
  TextInput,
  TouchableOpacity,
  Text,
  View
} =ReactNative;
export default class Intro extends Component{
	state={};
	render(){
		return (

			<View style={{backgroundColor:'white',flex:1,alignItems:'center'}}>
				<TouchableOpacity style={{marginTop:30,padding:10*k,borderRadius:5,...center,borderWidth:1}}>
					<Text style={{fontSize:16,fontWeight:'500'}}>Выберите страну</Text>
				</TouchableOpacity>

			</View>

			)
	}

};
Object.assign(Intro.prototype, TimerMixin);