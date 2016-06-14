import TimerMixin from 'react-timer-mixin'
import React, {Component} from 'react';
import ReactNative from 'react-native'; 
let {
  AppRegistry,
  Text,
  TouchableOpacity,
  View
} =ReactNative;
import {registerNav,chooseCountry,next$} from '../actions/uiactions'

export default class Next extends Component{
	state={phone:undefined};
	goNext(){
		
		if(this.props.name='phoneEnter'&&this.state.phone){
			registerNav({action:'navigation push',title:this.state.phone,name:'codeEnter'})
		}
	}
	componentWillUnmount(){
		this.nextSubscription.unsubscribe()
	}
	componentDidMount(){
		this.nextSubscription=next$.subscribe((x)=>{
			if(x.action==='getPhone'){
				this.setState({phone:x.phone})
			}
		})
	}
	render(){
		// console.log(this.props.type)
		// let buttonName;
		// if(this.props.type='create channel'){
		// 	buttonName='Создать'
		// }else if(this.props.type='ok'){
		// 	buttonName='Ok'
		// }
		return (

			<TouchableOpacity onPress={this.goNext.bind(this)}
					style={{...center,left:10*k,backgroundColor:APP_COLOR,marginTop:8,marginRight:15*k,
					padding:9,paddingTop:5,paddingBottom:5,borderRadius:3,
				}}>
					<Text style={{fontSize:15,color:'white',fontWeight:'500'}}>Next</Text>
				</TouchableOpacity>

			)
	}

};
Object.assign(Next.prototype, TimerMixin);