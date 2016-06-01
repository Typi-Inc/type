

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View
} from 'react-native';
import Calendar from 'react-native-calendar';
import IncrementalGroup from 'IncrementalGroup';
import Loading from '../utils/loading'
export default class Settings extends Component {
	onDateSelect(date){
		console.log(date)
	}
	_onDone(){
		this.loading&&this.loading._onDone()
	}

	render() {
		return (
		<View style={{flex:1,backgroundColor:'white'}}>
			<IncrementalGroup onDone={this._onDone.bind(this)} disabled={false}>
				<Calendar
				  calendarContainer={{backgroundColor:'blue'}}
				  monthContainer={{backgroundColor:'blue'}}
				  scrollEnabled={true}              // False disables swiping. Default: True
				  // showControls={true}               // False hides prev/next buttons. Default: False
				  titleFormat={'MMMM YYYY'}         // Format for displaying current month. Default: 'MMMM YYYY'
				  dayHeadings={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun']}               // Default: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
				  // prevButtonText={'Prev'}           // Text for previous button. Default: 'Prev'
				  // nextButtonText={'Next'}           // Text for next button. Default: 'Next'
				  onDateSelect={(date) => this.onDateSelect.bind(this,date)} // Callback after date selection
				  // onTouchPrev={this.onTouchPrev.bind(this)}    // Callback for prev touch event
				  // onTouchNext={this.onTouchNext.bind(this)}    // Callback for next touch event
				  // onSwipePrev={this.onSwipePrev.bind(this)}    // Callback for back swipe event
				  // onSwipeNext={this.onSwipeNext.bind(this)}    // Callback for forward swipe event
				  eventDates={['2016-07-01']}       // Optional array of moment() parseable dates that will show an event indicator
				  selectedDate={'2016-05-27'}       // Day to be selected
				  customStyle={{day: {fontSize: 16, textAlign: 'center'},
				  	weekendDayText:{color:'black'},weekendHeading:{color:'black'},
				  	currentDayText:{color:GREEN},calendarHeading:{borderTopWidth:0},
				  	eventIndicator:{backgroundColor:ORANGE},currentDayCircle:{backgroundColor:GREEN},
				  	calendarContainer:{backgroundColor:'white'}}} 

				 />
			</IncrementalGroup>
			<Loading delay={300} ref={el=>this.loading=el}/>
		</View>
		);
	}
}
