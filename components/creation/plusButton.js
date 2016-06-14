
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
   Animated,
   Image,
  TouchableWithoutFeedback,
} from 'react-native';
import TimerMixin from 'react-timer-mixin';
import {plusButtonPress,cancelCreate$,appNav} from '../actions/uiactions'
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
		appNav({action:'push',nav:'appNav',name:'newChat',info:{title:'New chat'}})
		this.clean()
	}
	clean(){
		plusButtonPress({action:'clean'})
		this.setTimeout(()=>{
			
			this.anim1.setValue(0)
			this.setState({active:false})
		},300)
		
	}
	createGroup(){
		appNav({action:'push',nav:'appNav',name:'newGroup',info:{title:'New group'}})
		this.clean()
	}
	broadcast(){
		appNav({action:'push',nav:'appNav',name:'discovery',info:{title:'Connect'}})
		this.clean()
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
				<TouchableWithoutFeedback onPress={this.broadcast.bind(this)}>
					<Animated.View
						style={{position:'absolute',flexDirection:'row',alignItems:'center',
							bottom:this.anim1.interpolate({inputRange:[0,1],outputRange:[-50,160]}),
							right:17,
						}}
					>
						<Animated.View style={{marginRight:20,padding:6,backgroundColor:'white',
						opacity:this.anim1.interpolate({inputRange:[0,.8,1],outputRange:[0,0,1]}),
							shadowOpacity:0.3,shadowOffset:{width:1,height:2},borderRadius:3
						}}>
							<Text style={{color:TEXT_GREY,
								fontSize:15
								}}>Invite friends</Text>
						</Animated.View>
						<Animated.View style={{
						opacity:this.anim1.interpolate({inputRange:[0,0.6,1],outputRange:[0,0,1]}),
						shadowOpacity:this.anim1.interpolate({inputRange:[0,1],outputRange:[0,0.5]}),
						shadowOffset:{width:4,height:4},
						backgroundColor:ORANGE,...center,
						height:55,width:55,borderRadius:55/2}}>
							<Animated.Image source={{uri:'invite',isStatic:true}} style={{
								height:16,
								width:19,

							}}/>
						</Animated.View>
					</Animated.View>
				</TouchableWithoutFeedback>
				<TouchableWithoutFeedback onPress={this.createGroup.bind(this)}>
					<Animated.View
						style={{position:'absolute',flexDirection:'row',alignItems:'center',
							bottom:this.anim1.interpolate({inputRange:[0,1],outputRange:[-50,90]}),
							right:17,
						}}
					>
						<Animated.View style={{marginRight:20,padding:6,backgroundColor:'white',
						opacity:this.anim1.interpolate({inputRange:[0,.8,1],outputRange:[0,0,1]}),
							shadowOpacity:0.3,shadowOffset:{width:1,height:2},borderRadius:3
						}}>
							<Text style={{color:TEXT_GREY,
								fontSize:15
								}}>New group</Text>
						</Animated.View>

						<Animated.View style={{
							opacity:this.anim1.interpolate({inputRange:[0,0.5,1],outputRange:[0,0,1]}),
							shadowOpacity:this.anim1.interpolate({inputRange:[0,1],outputRange:[0,0.5]}),
							shadowOffset:{width:4,height:4},
							backgroundColor:GREEN,...center,
							height:55,width:55,borderRadius:55/2}}>
							
							<Animated.Image source={{uri:'group',isStatic:true}} style={{
								height:17,
								width:25,

							}}/>
						</Animated.View>
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
								fontSize:this.anim1.interpolate({inputRange:[0,1],outputRange:[0.1,15]})
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
Object.assign(PlusButton.prototype, TimerMixin);


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

