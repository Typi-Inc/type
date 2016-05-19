
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
   Animated,
   Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {plusButtonPress,cancelCreate$} from '../actions/uiactions'
export default class PlusButton extends Component {
	state={active:false}
	componentDidMount(){
		this.sub=cancelCreate$.subscribe(x=>{
			if(x.action==='cancel'){
				this.dismiss()
			}
		})
	}
	componentWillUnmount(){
		this.sub.unsubscribe()
	}
	handlePress(){
		plusButtonPress({action:'press'})
		Animated.spring(this.anim1,{toValue:1,tension:140,friction:16}).start(
			()=>this.setState({active:true}))

	}
	startChatting(){
		console.log('hello world')
	}
	creactGroup(){

	}
	broadcast(){

	}
	dismiss(){
			Animated.spring(this.anim1,{toValue:0,tension:140,friction:16}).start(()=>{this.setState({active:false})})
	}

	render() {
		this.anim1=this.anim1 || new Animated.Value(0)
		this.anim1=this.anim1 || new Animated.Value(0)
		this.anim3=this.anim3 || new Animated.Value(0)
		return (
			<View>
			<TouchableWithoutFeedback onPress={this.state.active?this.startChatting.bind(this):this.handlePress.bind(this)}>
				<Animated.View style={{shadowOpacity:this.anim1.interpolate({inputRange:[0,1],outputRange:[0,0.5]}),
					shadowOffset:{width:4,height:4},}}>
				<Animated.Image source={{uri:'http://a57.foxnews.com/media2.foxnews.com/BrightCove/694940094001/2016/05/09/876/493/694940094001_4885965796001_9cc88214-5962-41e4-a293-56e1f55dcc00.jpg?ve=1&tl=1'}} 
					style={{
					height:55,
					width:55,
					borderRadius:55/2,
					position:'absolute',
					bottom:this.anim1.interpolate({inputRange:[0,1],outputRange:[14,230]}),
					right:17,
					opacity:this.anim1.interpolate({inputRange:[0,.5,1],outputRange:[0,0,1]}),
				}}/>
				</Animated.View>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback onPress={this.state.active?this.startChatting.bind(this):this.handlePress.bind(this)}>
					<Animated.View style={{position:'absolute',
						bottom:this.anim1.interpolate({inputRange:[0,1],outputRange:[14,160]}),
						right:17,
						opacity:this.anim1.interpolate({inputRange:[0,.2,1],outputRange:[0,1,1]}),
						shadowOpacity:this.anim1.interpolate({inputRange:[0,1],outputRange:[0,0.5]}),
						shadowOffset:{width:4,height:4},
						backgroundColor:ORANGE,...center,
						height:55,width:55,borderRadius:55/2}}>
						
						<Animated.Image source={{uri:'broadcast',isStatic:true}} style={{
							height:20,
							width:20,

						}}/>
					</Animated.View>
				</TouchableWithoutFeedback>

				<TouchableWithoutFeedback onPress={this.state.active?this.startChatting.bind(this):this.handlePress.bind(this)}>
					


					<Animated.View style={{position:'absolute',
						bottom:this.anim1.interpolate({inputRange:[0,1],outputRange:[14,90]}),
						right:17,
						opacity:this.anim1.interpolate({inputRange:[0,0.1,1],outputRange:[0,1,1]}),
						shadowOpacity:this.anim1.interpolate({inputRange:[0,1],outputRange:[0,0.5]}),
						shadowOffset:{width:4,height:4},
						backgroundColor:GREEN,...center,
						height:55,width:55,borderRadius:55/2}}>
						
						<Animated.Image source={{uri:'group',isStatic:true}} style={{
							height:17,
							width:25,

						}}/>
					</Animated.View>
				</TouchableWithoutFeedback>
				

				<TouchableWithoutFeedback onPress={this.state.active?this.startChatting.bind(this):this.handlePress.bind(this)}>

					<View style={{position:'absolute',flexDirection:'row',alignItems:'center',
							bottom:14,right:14,}}>
						<Animated.View style={{marginRight:20,padding:6,backgroundColor:'white',
						opacity:this.anim1.interpolate({inputRange:[0,.8,1],outputRange:[0,0,1]}),
							shadowOpacity:0.3,shadowOffset:{width:1,height:2},borderRadius:3
						}}>
							<Animated.Text style={{color:TEXT_GREY,
								fontSize:this.anim1.interpolate({inputRange:[0,.3,1],outputRange:[0.1,2,15]})
							}}>Start messaging</Animated.Text>
						</Animated.View>
						<View style={{
							shadowOpacity:0.5,shadowOffset:{width:3,height:3},
							backgroundColor:APP_COLOR,...center,
							height:60,width:60,borderRadius:60/2}}>
							<Animated.Text style={{fontSize:this.anim1.interpolate({inputRange:[0,0.7,1],outputRange:[27,27,0.01]}),
								color:'white',
								backgroundColor:'transparent',
								opacity:this.anim1.interpolate({inputRange:[0,0.3,1],outputRange:[1,1,0]}),
								transform:[{rotate:this.anim1.interpolate({inputRange:[0,1],outputRange:['0deg','120deg']})}],
								alignSelf:'center',marginBottom:3}}>
								+
							</Animated.Text>
							<Animated.Image source={{uri:'create',isStatic:true}} style={{
								height:this.anim1.interpolate({inputRange:[0,0.7,1],outputRange:[0,10,25]}),
								width:this.anim1.interpolate({inputRange:[0,0.7,1],outputRange:[0,7,23]}),
								opacity:this.anim1.interpolate({inputRange:[0,0.7,1],outputRange:[0,0,1]}),
								transform:[{rotate:this.anim1.interpolate({inputRange:[0,1],outputRange:['-120deg','0deg']})}],
							}}/>
						</View>
					</View>
				</TouchableWithoutFeedback>

			</View>


		);
	}
}




//<Animated.View style={{marginRight:20,padding:6,backgroundColor:'white',
// 	position:'absolute',
// 	opacity:this.anim1.interpolate({inputRange:[0,.8,1],outputRange:[0,0,1]}),
// 	shadowOpacity:0.3,shadowOffset:{width:1,height:2},borderRadius:3,
// 	bottom:this.anim1.interpolate({inputRange:[0,1],outputRange:[14,243]}),
// 	right:94,

// }}>
// 	<Animated.Text style={{color:TEXT_GREY,
// 		fontSize:this.anim1.interpolate({inputRange:[0,.6,1],outputRange:[0.1,0.1,15]})
// 	}}>New note to myself</Animated.Text>
// </Animated.View>
// <Animated.View style={{marginRight:20,padding:6,backgroundColor:'white',
// 	position:'absolute',
// 	opacity:this.anim1.interpolate({inputRange:[0,.8,1],outputRange:[0,0,1]}),
// 	shadowOpacity:0.3,shadowOffset:{width:1,height:2},borderRadius:3,
// 	bottom:this.anim1.interpolate({inputRange:[0,1],outputRange:[14,173]}),
// 	right:94,

// }}>
// 	<Animated.Text style={{color:TEXT_GREY,
// 		fontSize:this.anim1.interpolate({inputRange:[0,.6,1],outputRange:[0.1,0.1,15]})
// 	}}>New broadcast</Animated.Text>
// </Animated.View>

// <Animated.View style={{marginRight:20,padding:6,backgroundColor:'white',
// 	position:'absolute',
// 	opacity:this.anim1.interpolate({inputRange:[0,.8,1],outputRange:[0,0,1]}),
// 	shadowOpacity:0.3,shadowOffset:{width:1,height:2},borderRadius:3,
// 	bottom:this.anim1.interpolate({inputRange:[0,1],outputRange:[14,103]}),
// 	right:94,

// }}>
// 	<Animated.Text style={{color:TEXT_GREY,
// 		fontSize:this.anim1.interpolate({inputRange:[0,.3,1],outputRange:[0.1,0.1,15]})
// 	}}>Create a group</Animated.Text>
// </Animated.View>

