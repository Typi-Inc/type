import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  Navigator,
  View
} from 'react-native'
import DrawerWithApp from './drawerWithApp'
import RegistrationNavigation from './login/registrationNavigation'
import state$ from './rx-state/state'
import connect from './rx-state/connect'
import socketActions from './actions/socket'
class AppNavigation extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.connectToUserChannel({ id: 6 })
  }
	render() {
		return (
		<View style={{flex:1}}>
		 	<Navigator ref={el=>this.nav=el}
				initialRoute={{name:'home'}}
				configureScene={this.configureScene.bind(this)}
				renderScene={this.renderApp.bind(this)}
			/>
		</View>
		);
	}
	renderApp(route,navigator){
		if(route.name==='home') return <DrawerWithApp/>;
		else if(route.name==='registration') return <RegistrationNavigation/>


	}
	configureScene(route,routeStack){
		return Navigator.SceneConfigs.PushFromRight;
	}
}

export default connect(state$, state => ({
  connectToUserChannel(params) { socketActions.connectToUserChannel$.next(params) }
}))(AppNavigation)
