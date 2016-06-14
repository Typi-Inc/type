import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import ProfileCard from './profileCard';
import IncrementalGroup from 'IncrementalGroup';
import Loading from '../utils/loading';
import Photo from './photo'
export default class Profile extends Component {
	render() {
		return (
			<View style={{flex:1,backgroundColor:'rgb(220,220,220)'}}>
				<ScrollView>
					<ProfileCard/>


					{['http://esq.h-cdn.co/assets/cm/15/06/54d57cea12fe6_-_esq-01-leryn-franco-instagram-2013-mdn.jpg',
					'https://s-media-cache-ak0.pinimg.com/236x/f8/0a/1d/f80a1d4ff11ef31eef5703d9715f1f92.jpg',
					'http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=142165898',
					'https://s-media-cache-ak0.pinimg.com/236x/dc/0f/d3/dc0fd311037c0592ea8255d20837ee71.jpg',
					'https://s-media-cache-ak0.pinimg.com/236x/b8/35/ec/b835ec2eee3c28271c20f703cde15df5.jpg'].map(uri=>{
						return <Photo uri={uri}/>
					})}





				</ScrollView>
			</View>
		);
	}
}
