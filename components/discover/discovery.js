

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import realm from '../db';
import {ListView} from 'realm/react-native';
import {countries} from '../mock';
export default class Discovery extends Component {
	constructor(props){
		super(props)
		// var getSectionData = (dataBlob, sectionID) => {
  //      	 	return dataBlob[sectionID];
  //   	}
  //  		 var getRowData = (dataBlob, sectionID, rowID) => {
  //   	    return dataBlob[sectionID + ':' + rowID];
  //  		}
	    this.state= {
	        // loaded : false,
	        // notFound:false,
	        // foundCountries:[],
	        dataSource : new ListView.DataSource({
	            // getSectionData          : getSectionData,
	            // getRowData              : getRowData,
	            rowHasChanged           : (row1, row2) => row1 !== row2,
	            // sectionHeaderHasChanged : (s1, s2) => s1 !== s2
	        })
	    }
	}
	getData(){
		let length = countries.length,
            dataBlob = {},
            sectionIDs = [],
            rowIDs = [],
            i,
            j;
       	for (i = 0; i < 25; i++) {
       		sectionIDs.push(i)
       		dataBlob[`${i}`]=firstLetters[i]
       		rowIDs[i]=[] 
       	}
       	for (i = 0; i < length; i++) {
       		for (j = 0; j < 25; j++) {
       			if(countries[i].name[0]===dataBlob[`${j}`]){
       				rowIDs[j].push(countries[i].name)
       				dataBlob[`${j}:${rowIDs[j][rowIDs[j].indexOf(countries[i].name)]}`]=countries[i]
       			}
       		}
       	}
       	console.log(dataBlob,rowIDs,sectionIDs)
       	 this.setState({
            dataSource : this.state.dataSource.cloneWithRows([{givenName:'george '}]),
        	loaded:true
        });
    }

	render() {
		console.log('here',ListView)
		return (
			<View style={{flex:1,backgroundColor:'blue'}}>
			  <ListView
                	// automaticallyAdjustContentInsets={true}
                	// removeClippedSubviews={true}
                    dataSource = {this.state.dataSource}
                    style      = {{backgroundColor:'white'}}
                    renderRow  = {this.renderRow.bind(this)}
                    // renderSectionHeader = {this.renderSectionHeader.bind(this)}
                />

            </View>
		);
	}
	renderRow(rowData,sectionID,rowId){
		// console.log(rowData)
		// if(sectionID>2) return <IncrementalGroup disabled={true}><CountryRow key={rowData.givenName} rowData={rowData} /></IncrementalGroup>
		return <View>
		<Text>{rowData.givenName}</Text>
	</View>
	}
	renderSectionHeader(section){
		return <View key={section} style={{overflow:'hidden',padding:10,backgroundColor:'rgb(245,245,245)'}}>
		<Text style={{fontWeight:'bold',fontSize:16}}>{section}</Text></View>
	}
}
