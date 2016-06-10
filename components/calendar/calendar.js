
import TimerMixin from 'react-timer-mixin';
import React, { Component } from 'react';
import ReactNative,{
  StyleSheet,
  Text,
  ScrollView,
  TouchableHighlight,
  Animated,
  StatusBar,
  View
} from 'react-native';
import moment from 'moment';
import Loading from '../utils/loading';
import IncrementalGroup from 'IncrementalGroup';
import {calendar} from '../actions/uiactions';
import CalendarTitle from '../navigation/calendarTitle';
import FutureMessage from './futureMessage'
let update=ReactNative.addons.update;
export default class Calendar extends Component {
	state={today:new Date,
		dates:this.getDates(moment(),moment().add(25,'days')),
		activeDay:moment().add(1,'days')};
	
	getDates(startDate,stopDate){
		let dateArray=[]
	 	let currentDate=startDate;
	    while (stopDate-currentDate>86400000) {
	        dateArray.push( currentDate )
	        currentDate = currentDate.clone().add(1,'days');
	    }
	    return dateArray
	}
	_onDone(){
		this.loading&&this.loading._onDone()
	}
	_onScroll(e){
		if(this.state.dates.length>600) return;
		let last=this.state.dates[this.state.dates.length-1].clone().add(1,'days');
		let result=this.getDates(last,last.clone().add(16,'days'));	
		this.setState({dates:update(this.state.dates,{$push:result})})
	}
	selectActiveDay(date){
		this.setState({activeDay:date})
		calendar({action:'setDate',date:date})
	}	
	render() {
		// StatusBar.setHidden(false,'none')
		return (
			<View style={{flex:1,backgroundColor:'white'}}>
				<View style={{flex:1}}>

					<ScrollView 
						scrollEventThrottle={500}
						onScroll={this._onScroll.bind(this)}
						removeClippedSubviews horizontal 
						showsHorizontalScrollIndicator={false}>

						{this.state.dates.map((date,i)=>{
							let isActive=this.state.activeDay.format('ddd D MMM YYYY')===date.format('ddd D MMM YYYY')
							return <View style={{overflow:i>7?'hidden':'visible',
								width:320*k/6.5,height:70,...center,borderLeftWidth:1,
								borderBottomWidth:1,borderColor:'rgb(180,180,180)'}}>
								<TouchableHighlight underlayColor={'#049df1'} onPress={this.selectActiveDay.bind(this,date)} 
								>
									<View style={{width:320*k/6.5,height:70,...center,backgroundColor:isActive?APP_COLOR:'white'}}>
										<Text style={{color:isActive?'white':'rgb(140,140,140)'}}>{date.format('ddd')}</Text>
										<Text style={{color:isActive?'white':'black'}}>{date.format('D')}</Text>
										<View style={{marginTop:3,height:6,width:6,borderRadius:3,backgroundColor:isActive?APP_COLOR:GREEN}}/>
									</View>
								</TouchableHighlight>
							</View>
						})}

					</ScrollView>
				</View>
				<View style={{flex:5.85,backgroundColor:'rgb(255,255,255)'}}>
					<ScrollView>

						<FutureMessage/>
						<FutureMessage/>
						<FutureMessage/>
						
						

					</ScrollView>
				</View>


			</View>
		);
	}
}
Object.assign(Calendar.prototype, TimerMixin);
