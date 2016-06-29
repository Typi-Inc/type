import TimerMixin from 'react-timer-mixin'
import React, { Component } from 'react'
import ReactNative from 'react-native'
const {
  Text,
  View,
  Navigator
} = ReactNative
import EnterCode from './enterCode'
import PhoneEnter from './phoneEnter'
import Intro from './intro'
import EnterUsername from './enterUsername'
import CountryPicker from './countryPicker'
import CountrySearchInput from './countrySearchInput'
import BackButton from '../navigation/backButton'
import Next from './next'
import { registerNav$ } from '../actions/uiactions'
const RCTStatusBarManager = require('NativeModules').StatusBarManager

const NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if (route.name === 'countryPicker') {
      return <BackButton name={'countryPicker'} navigator={navigator} index={index} route={route} />
    } else if (route.name === 'phoneEnter') {
      return null
    }
    return <BackButton name={route.name} index={index} route={route} navigator={navigator} />
  },
  RightButton(route, navigator, index, navState) {
    if (route.name === 'countryPicker') return null
    return <Next name={route.name} />
  },
  Title(route, navigator, index, navState) {
    if (route.name === 'countryPicker') return <CountrySearchInput />
    return <View style={{ paddingTop: 10 }}>
      <Text style={{ fontSize: 18 }}>{route.title}</Text>
    </View>
  }
}

export default class RegistrationNavigation extends Component {
  state = { height: 0, statusBarHeight: 20 }
  componentWillMount() {
    this.regusterNavSubscription = registerNav$.subscribe(x => {
      if (x.action === 'navigation push') {
        this.nav && this.nav.push({ name: x.name, routeInfo: x.info, title: x.title })
      } else if (x.action === 'pop') {
        this.nav && this.nav.pop()
      }
    })
    RCTStatusBarManager.getHeight(e => this.setState({ statusBarHeight: e.height }))
  }
  componentWillUnmount() {
    this.registerNavSubscription.unsubscribe()
  }
  renderCreateChannel(route, navigator) {
    if (route.name === 'phoneEnter') {
      return <PhoneEnter />
    } else if (route.name === 'codeEnter') {
      return <EnterCode />
    } else if (route.name === 'intro') {
      return <Intro />
    } else if (route.name === 'usernameEnter') {
      return <EnterUsername />
    } else if (route.name === 'countryPicker') {
      return <CountryPicker />
    }
  }
  setHeightOfNavigation(height) {
    this.setState({ height })
  }
  render() {
    return (
      <Navigator
        style={{ paddingTop: 70 }}
        ref={el => this.nav = el}
        configureScene={(route, routeStack) => {
          if (route.name === 'countryPicker') return Navigator.SceneConfigs.FloatFromBottom

          return { ...Navigator.SceneConfigs.HorizontalSwipeJump, gestures: {} }
        }}
        navigator={this.props.navigator}
        initialRoute={{ name: 'phoneEnter', info: this.props.routeInfo, title: 'Your Phone' }}
        renderScene={this.renderCreateChannel.bind(this)}
        navigationBar={
          <Navigator.NavigationBar
            // navigator={navigator}
            // topNav={this.props.topNav}
            ref={el => this.navBar = el}
            routeMapper={NavigationBarRouteMapper}
            style={{
              height: 70,
              backgroundColor: 'white',
              borderBottomWidth: 0.5,
              borderColor: 'rgb(215,215,215)'
            }}
          />
        }
      />
    )
  }
}
Object.assign(RegistrationNavigation.prototype, TimerMixin)
