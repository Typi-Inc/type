import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';
import TimerMixin from 'react-timer-mixin';
import _ from 'lodash'
import realm from '../db';
// import {ListView} from 'realm/react-native';
import Loading from '../utils/loading';
import Contact from './contact';
import IncrementalGroup from 'IncrementalGroup';
let contacts=realm.objects('Contact');
export default class Discovery extends Component {
	constructor(props){
		super(props)
		var getSectionData = (dataBlob, sectionID) => {
       	 	return dataBlob[sectionID];
    	}
   		 var getRowData = (dataBlob, sectionID, rowID) => {
    	    return dataBlob[sectionID + ':' + rowID];
   		}
	    this.state= {
	        dataSource : new ListView.DataSource({
	            getSectionData          : getSectionData,
	            getRowData              : getRowData,
	            rowHasChanged           : (row1, row2) => row1 !== row2,
	            sectionHeaderHasChanged : (s1, s2) => s1 !== s2
	        })
	    }
	}
	componentWillMount(){
		this.getData()
	}
	getData(){
		let length = contacts.length,
            dataBlob = {},
            sectionIDs = [],
            rowIDs = [],
            i=-1,
            users,
            j;
            for (let letter of ['A',
            	'B','C','D','E','F','G','H','I','J','K',
            	'L','M','N','O','P','Q','R','S','T',
            	'U','V','W','X','Y','Z','#','А','Б','В','Г','Д','Е','Ж','З','И',
            	'Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ш','Щ','Ъ','Ы','Ь','Э','Ю','Я']){
            	users=contacts.filtered(`givenName BEGINSWITH[c] "${letter}"`)

            	if(users.length>0){
            		i++
            		rowIDs[i]=[]
            		sectionIDs.push(letter)
            		dataBlob[letter]=letter
            	}
            	userLength = users.length;
            	for(j = 0; j < userLength; j++) {
            		user = users[j];
            		rowIDs[i].push(user.id);
            		dataBlob[letter+ ':' + user.id] = user;
            	}
            }
       	this.setState({
            dataSource : this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),
        	loaded:true
        });
    }
	render() {
		return (
			<View style={{flex:1,backgroundColor:'blue'}}>
			  <ListView
                	// automaticallyAdjustContentInsets={true}
                	removeClippedSubviews={true}
                    dataSource = {this.state.dataSource}
                    style      = {{backgroundColor:'white'}}
                    renderRow  = {this.renderRow.bind(this)}
                    renderSectionHeader = {this.renderSectionHeader.bind(this)}
                    renderSeparator={this.renderSeparator.bind(this)}
                />
            </View>
		);
	}
	renderRow(rowData,sectionID,rowId){
		return <IncrementalGroup disabled={sectionID==='A'}><Contact contact={rowData}/></IncrementalGroup>
	}
	renderSeparator(sectionID, rowID, adjacentRowHighlighted){
		return <View style={{width:320*k,height:0.5,backgroundColor:TRANSPARENT_GREY}}/>
	}
	renderSectionHeader(section){
		return <View key={section} style={{padding:10,backgroundColor:'rgb(245,245,245)'}}>
		<Text style={{fontWeight:'bold',fontSize:16}}>{section}</Text></View>
	}
}
Object.assign(Discovery.prototype, TimerMixin);
