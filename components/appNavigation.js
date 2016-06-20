import React, { Component } from 'react'
import {
  Navigator,
  View
} from 'react-native'
import DrawerWithApp from './drawerWithApp'
import RegistrationNavigation from './login/registrationNavigation'
import state$ from './rx-state/state'
import connect from './rx-state/connect'
import socketActions from './actions/socket'
import realm from './db'
// import './genRealmData'

class AppNavigation extends Component {
  componentDidMount() {
    const me = realm.objects('Me')[0]
    this.props.connectToUserChannel(me)
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
  renderApp(route, navigator) {
    if (route.name === 'home') return <DrawerWithApp />
    else if (route.name === 'registration') return <RegistrationNavigation />
  }
  configureScene(route, routeStack){
    return Navigator.SceneConfigs.PushFromRight
  }
}

export default connect(state$, () => ({
  connectToUserChannel(params) { socketActions.connectToUserChannel$.next(params) }
}))(AppNavigation)
