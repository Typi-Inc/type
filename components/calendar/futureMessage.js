

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
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
			
			<View style={{marginTop:7}}>
				<View style={{flexDirection:'row',alignItems:'center',width:320*k,justifyContent:'space-between'}}>
					<View style={{alignItems:'center',flexDirection:'row'}}>
						<Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZtkLkOpnlyOMnP0eUbOi8Vn-lG1xmkeiwBxudHXdcok07ALnL'}}
						 style={{margin:5,height:40,width:40,borderRadius:20}}/>
						<Text style={{margin:5,fontSize:17,}}>Mellisa Lauren</Text>
					</View>

					<View style={{flexDirection:'row'}}>
						{this.props.starred?null:
							<TouchableOpacity style={{padding:10,marginRight:15,}}>
								<Icon name="md-create" size={20} color={APP_COLOR} />
							</TouchableOpacity>
						}
						<TouchableOpacity style={{padding:10,marginRight:10,}}>
							<Icon name="md-trash" size={22} color={RED} />
						</TouchableOpacity>

					</View>


				</View>


				<CustomBubble message={message} color={this.props.starred?APP_COLOR:GREEN} textColor={'white'}/>





			</View>	



		);
	}
}
