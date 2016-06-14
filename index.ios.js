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
import AppNavigation from './components/appNavigation';
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
import DrawerWithApp from './components/drawerWithApp';
class typi extends Component {
  render() {
    return (
	 <AppNavigation/>
    );
  }
}
AppRegistry.registerComponent('typi', () => typi);
