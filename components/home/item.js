

import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  View
} from 'react-native';
// var Swipeout = require('react-native-swipeout')
import {appNav } from '../actions/uiactions'
export default class Item extends Component {
 	componentWillMount(){
 		this.swipeoutBtns = [
		  {
		    text: 'Close',
		    type:'primary',
		    backgroundColor:RED
		  }
		]
 	}
 	shortenText(text){
 		if(text.length>53){
 			return text.substring(0,53)+'...'
 		}
 		return text
 	}
 	showTube(item){
 		appNav({action:'push',nav:'appNav',name:'chat',info:{title:this.props.item.toWhom.name,item:item}})
 	}
	render() {
		return (
		<TouchableOpacity onPress={this.showTube.bind(this,this.props.item)} style={{overflow:'hidden'}} underlayColor={'rgb(120,120,120'} >
	

			<View style={{flexDirection:'row',padding:10,alignItems:'center',paddingTop:2,paddingBottom:0}}>
				<Image style={{height:60,width:60,borderRadius:60/2}} 
					source={{uri:this.props.item.toWhom.image}}
				/>
				<View style={{marginLeft:4,width:k>1?255*k:245*k,padding:7,paddingRight:10,height:72,
					borderBottomWidth:1,borderColor:BORDER_COLOR}}>
					<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:4}}>
						<Text style={{fontSize:17,fontWeight:'500'}}>
							{this.props.item.toWhom.name}
						</Text>
						<Text style={{color:TEXT_GREY}}>{this.props.item.lastTime}</Text>
					</View>
					<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
						<Text style={{width:200*k,color:TEXT_GREY}}>
							{this.shortenText(this.props.item.lastText)}
						</Text>
						{
							this.props.item.counter>0?
							<View style={{backgroundColor:APP_COLOR,...center,
								padding:6,paddingTop:2,paddingBottom:2,borderRadius:10,
								marginBottom:10}}>
								<Text style={{color:'white'}}>{this.props.item.counter}</Text>
							</View>:
							null
						}
						
					</View>

				</View>
			</View>
		</TouchableOpacity>

		);
	}
}
