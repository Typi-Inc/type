import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  LayoutAnimation,
  TouchableOpacity,
  View
} from 'react-native';
import TimerMixin from 'react-timer-mixin';

import {keyboard} from '../animations'
import {homeSearch,homeSearch$} from '../actions/uiactions'
export default class HomeSearch extends Component {
	state={text:''}
	_onFocus(){
		homeSearch({value:'focusing'})
		LayoutAnimation.configureNext(keyboard)
		this.input.setNativeProps({style:{width:254*k,backgroundColor:'white',marginLeft:30*k}})
		this.cancelText.setNativeProps({style:{fontSize:15}})
	}
	cancel(arg){
		homeSearch({value:'bluring'})
		if(arg==='cancelButton'){
			if(this.state.text!==''){
				// registerNav({action:'searchText',text:''})
			 	this.setState({text:''})}
			this.input.blur()
		}else{
			LayoutAnimation.configureNext(keyboard)
			this.input.setNativeProps({style:{width:267*k,backgroundColor:'rgb(238,238,238)',marginLeft:10*k}})
			this.cancelText.setNativeProps({style:{fontSize:0.001}})
		}
	}
  componentWillMount(){
    this.sub=homeSearch$.subscribe(x=>{
      if(x.action==='blur'){
        console.log('blir')
        this.setTimeout(()=>this.input&&this.input.blur(),800)
      }
    })
  }
  componentWillUnmount(){
    this.sub.unsubscribe()
  }
  render() {
    return (
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginRight:28*k,}}>
			<TextInput autoCorrect={false} ref={(e)=>this.input=e} clearButtonMode={'while-editing'}
				style={{paddingLeft:10,marginTop:5,marginLeft:35,backgroundColor:'rgb(240,240,240)',marginLeft:10,
					width:267*k,height:35,borderRadius:5,marginRight:5}}
			   	value={this.state.text}
         		onFocus={this._onFocus.bind(this)}
                onBlur={this.cancel.bind(this)}
                placeholder={'Search Typi'}
                placeholderTextColor={'rgb(140,140,140)'}
                onChange={(event) => {
                  // event.nativeEvent.text.length===0?this.submit.setNativeProps({style:{backgroundColor:'gray'}}):this.submit.setNativeProps({style:{backgroundColor:'#0084b4'}})
                  // registerNav({action:'searchText',text:event.nativeEvent.text})
                  this.setState({
                      text: event.nativeEvent.text,})
                    
                  }}
			/>
       <TouchableOpacity onPress={this.cancel.bind(this,'cancelButton')} 
      style={{padding:3,paddingLeft:0,}}>
        <Text style={{fontWeight:'500',fontSize:0.01,marginRight:5*k,marginTop:4,}}
         ref={el=>this.cancelText=el}>Cancel</Text>
      </TouchableOpacity>
      </View>
    );
  }
}
Object.assign(HomeSearch.prototype, TimerMixin);


