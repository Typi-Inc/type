import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  Animated,
  TouchableWithoutFeedback,
  ListView,
  NavigatorIOS,
  View
} from 'react-native';
import TimerMixin from 'react-timer-mixin';
import Item from './item';
import Loading from '../utils/loading';
import {directs} from '../mock';
import PlusButton from '../creation/plusButton';
import Background from '../creation/background';
import IncrementalGroup from 'IncrementalGroup';
import SideMenu from 'react-native-side-menu';
export default class List extends Component {

	state={clippedSubviews:false,
		dataSource : new ListView.DataSource({
	            rowHasChanged: (row1, row2) => row1 !== row2,
	        })
	}
	componentWillMount(){
		this.setTimeout(()=>this.scroll&&this.scroll.setNativeProps({removeClippedSubviews:true}),100)
		this.setState({dataSource:this.state.dataSource.cloneWithRows(directs)})

	}
	_onDone(){
		this.loading&&this.loading._onDone()
	}

	render() {
		return (
			<View style={{flex:1,backgroundColor:'white'}}>
				<IncrementalGroup onDone={this._onDone.bind(this)}  disabled={false}>
					<View style={{flex:1,backgroundColor:'white'}}>
						
							<ListView
								automaticallyAdjustContentInsets={true}
								// ref={el=>this.scroll=el}
								renderSeparator={this.renderSeparator.bind(this)}
								dataSource={this.state.dataSource}
								renderRow={this.renderRow.bind(this)}
							 	removeClippedSubviews={false}
								/>
						
							<Background/>
							{this.props.disabled?null:<PlusButton/>}
							
					</View>
				</IncrementalGroup>
				<Loading delay={200} ref={el=>this.loading=el}/>
			</View>
		);
	}
	renderSeparator(sectionID, rowID, adjacentRowHighlighted){
		return <View style={{width:250*k,marginLeft:70*k,height:1,backgroundColor:BORDER_COLOR}}/>
	}
	renderRow(row,sectionId,rowId){
		return <Item item={row} key={rowId}/>	   
	}
}
Object.assign(List.prototype, TimerMixin);
