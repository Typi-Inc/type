import React, { Component } from 'react'
import {
  AppRegistry
} from 'react-native'
import AppNavigation from './components/appNavigation'
const Dimensions = require('Dimensions')
const windowSize = Dimensions.get('window')
global.k = windowSize.width / 320
global.h = windowSize.height / 568
global.center = { justifyContent: 'center', alignItems: 'center' }
global.APP_COLOR = '#0398EA'
global.GREEN = '#26A65B'
global.ORANGE = '#F89406'
global.BORDER_COLOR = '#E6E6E6'
global.RED = '#F33030'
global.BACKGROUND_GREY = '#FAFAFA'
global.TEXT_GREY = 'rgb(100,100,100)'
global.TRANSPARENT_GREY = 'rgba(230,230,230,.9)'
global.BUBBLE_GREY = '#ECEDF1'

const typi = () => <AppNavigation />
AppRegistry.registerComponent('typi', () => typi)
