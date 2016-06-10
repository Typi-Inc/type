
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
import FutureMessage from '../calendar/futureMessage'
let update=ReactNative.addons.update;
export default class StarredItems extends Component {	
	render() {
		// StatusBar.setHidden(false,'none')
		return (
			<View style={{flex:1,backgroundColor:'white'}}>
				
					<ScrollView>

						<FutureMessage starred/>
						<FutureMessage starred/>
						<FutureMessage starred/>
						
						

					</ScrollView>


			</View>
		);
	}
}
Object.assign(StarredItems.prototype, TimerMixin);
