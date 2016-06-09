/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import App from './components/app'
let Dimensions = require('Dimensions');
let windowSize = Dimensions.get('window');
global.k=windowSize.width/320;
global.h=windowSize.height/568;
global.center={justifyContent:'center',alignItems:'center'};
global.APP_COLOR="#0398EA";
global.GREEN="#26A65B";
global.ORANGE="#F89406";
global.BORDER_COLOR="#E6E6E6";
global.RED="#F33030";
global.BACKGROUND_GREY="#FAFAFA";
global.TEXT_GREY="rgb(100,100,100)";
global.TRANSPARENT_GREY="rgba(230,230,230,.9)";
global.BUBBLE_GREY='#ECEDF1';
import {sideMenu$} from './components/actions/uiactions';
import Menu from './components/settings/menu';
class typi extends Component {
  state={disableGestures:false};
  toggle(val){
  	this.setState({disableGestures:val,isOpen:false})
  }
  componentWillMount(){
  	this.sub=sideMenu$.subscribe(x=>{
  		if(x.action==='close'){
  			// this.setState({isOpen:false})
        this.sideMenu.openMenu(false)
  		}else if(x.action==='open'){
        // this.setState({isOpen:true})
        this.sideMenu.openMenu(true)
      }
      else if(x.action==='disableGesture'){
        if(!this.state.disableGestures) this.setState({disableGestures:true})
      }else if(x.action==='enableGesture'){
        if(this.state.disableGestures) this.setState({disableGestures:false})
      }
  	})
  }
  render() {
	let menu=<Menu/>

    return (
	<SideMenu ref={(el)=>this.sideMenu=el}
   isOpen={this.state.isOpen} edgeHitWidth={100} openMenuOffset={250*k}
	 	bounceBackOnOverdraw={false}
	 	onChange={(value)=>{
	 		// StatusBar.setHidden(value, 'slide') 
	 	}}
		disableGestures={this.state.disableGestures} menuPosition={'right'} menu={menu}>

      <App toggle={this.toggle.bind(this)}/>
    </SideMenu>
    );
  }
}
AppRegistry.registerComponent('typi', () => typi);
