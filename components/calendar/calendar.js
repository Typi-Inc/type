
import TimerMixin from 'react-timer-mixin';
import React, { Component } from 'react';
import ReactNative,{
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Animated,
  StatusBar,
  View
} from 'react-native';
import moment from 'moment';
import Loading from '../utils/loading';
import IncrementalGroup from 'IncrementalGroup';
let update=ReactNative.addons.update;
export default class Calendar extends Component {
	state={today:new Date,dates:this.getDates(moment(),moment().add(30,'days')),activeDay:moment()};
	componentWillMount(){
		// this.getDates(moment(),moment().add(500,'days'))
	}
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
	_onScroll(){
		let last=this.state.dates[this.state.dates.length-1]
		let result=this.getDates(last,last.clone().add(7,'days'))
		this.setState({dates:update(this.state.dates,{$push:result})})
	}

	render() {
		StatusBar.setHidden(false,'none')
		return (
			<View style={{flex:1,backgroundColor:'white'}}>

					<ScrollView 
						scrollEventThrottle={100}
						onScroll={this._onScroll.bind(this)}
						removeClippedSubviews horizontal pagingEnabled showsHorizontalScrollIndicator={false}>

						{this.state.dates.map((date,i)=>{
							// console.log(date.format('ddd'))
							return <View style={{overflow:i>7?'hidden':'visible',width:320*k/7,height:60,...center,borderLeftWidth:1,borderBottomWidth:1,borderColor:'rgb(180,180,180)'}}>
								<TouchableOpacity style={{width:320*k/7,height:60,...center}}>
									<Text style={{color:'rgb(140,140,140)'}}>{date.format('ddd')}</Text>
									<Text>{date.format('D')}</Text>
									<View style={{marginTop:3,height:6,width:6,borderRadius:3,backgroundColor:ORANGE}}/>
								</TouchableOpacity>
							</View>
						})}





					</ScrollView>


			</View>
		);
	}
}
Object.assign(Calendar.prototype, TimerMixin);
