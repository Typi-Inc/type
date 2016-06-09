

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';
import {appNav,sideMenu} from '../actions/uiactions';
import TimerMixin from 'react-timer-mixin';
import Icon from 'react-native-vector-icons/Ionicons';
import MDIcon from 'react-native-vector-icons/MaterialIcons';
export default class Menu extends Component {
	visitProfile(){
		this.setTimeout(()=>sideMenu({action:'close'}),200)
		appNav({nav:'appNav',action:'push',name:'discovery',info:{title:'Connect'}})
	}
	visitCalendar(){
		this.setTimeout(()=>sideMenu({action:'close'}),200)
		appNav({nav:'appNav',action:'push',name:'calendar',info:{title:'Connect'}})
	}
	render() {
		return (
			<View style={{backgroundColor:'#2d2d2d',flex:1}}>
				<ScrollView contentContainerStyle={{flex:1}}>
				
					<TouchableOpacity onPress={this.visitProfile.bind(this)}
					style={{flex:2.5,...center}}>
						<View style={{...center}}>
							<Image source={{uri:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTOHYUwxK20Tmwj53Tcisraeqzk0wbrSq1_3GQY5ynkS2kdYU7L'}} 
							style={{width:100*k,height:100*k,borderRadius:50*k}}/>
							<Text style={{fontSize:18,color:'white',marginTop:5}}>Jessika Makbridge</Text>
						</View>
					</TouchableOpacity>
					<View style={{backgroundColor:'#383737',width:250*k,height:2}}/>
						<TouchableOpacity onPress={this.visitCalendar.bind(this)} style={{flex:1,justifyContent:'center',alignItems:'flex-start',paddingLeft:14}}>
						<View style={{flexDirection:'row',...center}}>
							<MDIcon name="perm-contact-calendar" size={27} color={APP_COLOR} />
							<Text style={{fontSize:18,fontWeight:'400',color:'white',marginLeft:9}}>Calendar of the future</Text>
						</View>
					</TouchableOpacity>
					<View style={{backgroundColor:'#383737',width:250*k,height:2}}/>
					<TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'flex-start',paddingLeft:14}}>
						<View style={{flexDirection:'row',...center}}>
							<Icon name="md-star-outline" size={28} color={'#f8e71c'} />
							<Text style={{fontSize:18,fontWeight:'400',color:'white',marginLeft:10}}>Starred items</Text>
						</View>
					</TouchableOpacity>
					<View style={{backgroundColor:'#383737',width:250*k,height:2}}/>

					<TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'flex-start',paddingLeft:14}}>
						<View style={{flexDirection:'row',...center}}>
							<MDIcon name="notifications-none" size={27} color={ORANGE} />
							<Text style={{fontSize:18,fontWeight:'400',color:'white',marginLeft:10}}>Notifications</Text>
						</View>
					</TouchableOpacity>

					<View style={{backgroundColor:'#383737',width:250*k,height:2}}/>

				

					<TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'flex-start',paddingLeft:14}}>
						<View style={{flexDirection:'row',...center}}>
							<Icon name="md-share" size={28} color={GREEN} />
							<Text style={{fontSize:18,fontWeight:'400',color:'white',marginLeft:10}}>Share with friends</Text>

						</View>
					</TouchableOpacity>
				</ScrollView>
			</View>
		);
	}
}
Object.assign(Menu.prototype, TimerMixin);


