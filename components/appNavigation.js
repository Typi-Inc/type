import React, { Component } from 'react'
import {
  Navigator,
  View
} from 'react-native'
import DrawerWithApp from './drawerWithApp'
import RegistrationNavigation from './login/registrationNavigation'
import socketActions from './actions/socket'
import state$ from './rx-state/state'
import realm from './db'
// realm.write(() => {
//   realm.deleteAll()
// })
// import './genRealmData'
state$.subscribe(state => state) // dummy subscription to make state machine work

export default class AppNavigation extends Component {
  componentDidMount() {
    const me = realm.objects('Me')[0]
    socketActions.connectToUserChannel$.next(me)
  }
  configureScene(route, routeStack){
    return Navigator.SceneConfigs.PushFromRight
  }
  renderApp(route, navigator) {
    if (route.name === 'home'){
      return <DrawerWithApp />
    }
    // else if (route.name === 'registration')
    return <RegistrationNavigation />
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Navigator
          ref={el => this.nav = el}
          initialRoute={{ name: 'home' }}
          configureScene={this.configureScene.bind(this)}
          renderScene={this.renderApp.bind(this)}
        />
      </View>
    )
  }
}
