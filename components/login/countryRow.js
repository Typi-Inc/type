import TimerMixin from 'react-timer-mixin'
import React, {Component} from 'react';
import ReactNative from 'react-native'; 
let {
  AppRegistry,
  Text,
  View,
  Image,
  TouchableOpacity
} =ReactNative;
import dismissKeyboard from 'dismissKeyboard'
import {chooseCountry,registerNav} from '../actions/uiactions'
import Incremental from 'Incremental'
export default class CountryRow extends Component{
	state={};
	_onPress(country){
		dismissKeyboard()
		chooseCountry({action:'chooseCountry',country:country})
		registerNav({action:'pop'})
	}
	render(){
		let rowData=this.props.rowData
		return (

			<Incremental><TouchableOpacity onPress={this._onPress.bind(this,rowData)} style={{alignSelf:'flex-end',borderBottomWidth:1,borderColor:'rgb(240,240,240)',
				padding:13,paddingLeft:5,overflow:rowData.name==='Barbados'?'visible':'hidden',
				flexDirection:'row',width:310*k,justifyContent:'space-between',alignItems:'center'}}>

					<Text style={{fontSize:18,}}>{rowData.name}</Text>
					
					<Text style={{fontSize:17,fontWeight:'500'}}>{rowData.dial_code}</Text>

				</TouchableOpacity></Incremental>

			)
	}

};
Object.assign(CountryRow.prototype, TimerMixin);