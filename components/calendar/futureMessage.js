

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import moment from 'moment';
import CustomBubble from './customBubble';
let message={
	text:`When the night breeze blows my hair, I imagine they’re your kisses I can stand missing you this much.`
}
import Icon from 'react-native-vector-icons/Ionicons'
export default class FutureMessage extends Component {
	render() {
		return (
			
			<View style={{backgroundColor:'white',marginTop:7}}>
				<View style={{flexDirection:'row',alignItems:'center',width:320*k,justifyContent:'space-between'}}>
					<View style={{alignItems:'center',flexDirection:'row'}}>
						<Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZtkLkOpnlyOMnP0eUbOi8Vn-lG1xmkeiwBxudHXdcok07ALnL'}}
						 style={{margin:5,height:50,width:50,borderRadius:25}}/>
						<Text style={{margin:5,fontSize:15,}}>Mellisa Lauren</Text>
					</View>

					<Text style={{margin:5,fontSize:12,color:'rgb(120,120,120)',marginRight:10}}>05/07/2017</Text>


				</View>


				<View>
					<CustomBubble message={message} color={GREEN} textColor={'white'}/>
				</View>





			</View>	



		);
	}
}
