
import TimerMixin from 'react-timer-mixin';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View
} from 'react-native';
import {calendar$,appNav} from '../actions/uiactions';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
export default class CalendarTitle extends Component {
	state={date:moment()}
	componentWillMount(){
		this.sub=calendar$.subscribe(x=>{
			if(x.action==='setDate'){
				if(x.date.format('MMMM, YYYY')!==this.state.date.format('MMMM, YYYY')){
					this.setState({date:x.date})
				}
			}else if(x.action==='unsubscribe'){
				this.sub&&this.sub.unsubscribe()
			}
		})
	}
	componentWillUnmount(){
		this.sub.unsubscribe()
	}
	render() {
		return (
			<View style={{height:50,width:340*k,backgroundColor:APP_COLOR,...center}}>
				<TouchableOpacity onPress={()=>appNav({action:'pop',nav:'appNav'})}
					style={{...center,position:'absolute',bottom:0,left:10,padding:10}}>
					<Icon  name="ios-arrow-back" size={28} color={'white'} />
				</TouchableOpacity>

				<Text style={{fontWeight:'500',color:'white',fontSize:16}}>{this.state.date.format('MMMM, YYYY')}</Text>


			</View>
		);
	}
}
Object.assign(CalendarTitle.prototype, TimerMixin);
