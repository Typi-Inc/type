import React, { Component } from 'react'
import {
  InteractionManager,
  View
} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Tube from './tube'
import { chatTitle } from '../actions/uiactions'
import StarredItems from '../settings/starredItems'
import state$ from '../rx-state/state'
import connect from '../rx-state/connect'
import socketActions from '../actions/socket'
import realm from '../db'

class Chat extends Component {
  state = { showFuture: false }
  componentDidMount() {
    // realm.addListener('change', this.onChange.bind(this))
    this.props.connectToChatChannel(this.props.info.item)
    InteractionManager.runAfterInteractions(() => {
      this.setState({ showFuture: true })
    })
  }
  componentWillUnmount() {
    // realm.removeListener('change', this.onChange.bind(this))
    this.props.leaveChatChannel()
  }
  changeTab(obj) {
    chatTitle({ activeTab: obj['i'] })
  }
  render() {
    // let assem=this.state.contacts.filtered('givenName="Assem"')
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollableTabView
          style={{ backgroundColor: 'white' }}
          onChangeTab={this.changeTab.bind(this)}
          tabBarPosition={'overlayTop'}
          renderTabBar={() => <View />}
        >
          <Tube showInput tabLabel="Chat" chat={this.props.info.item} />
            {
              this.state.showFuture ?
                <StarredItems tabLabel="Future" /> :
                <View tabLabel="Future" />
            }
        </ScrollableTabView>
      </View>
    )
  }
}

export default connect(state$, () => ({
  connectToChatChannel(chat) { socketActions.connectToChatChannel$.next(chat) },
  leaveChatChannel() { socketActions.leaveChatChannel$.next() }
}))(Chat)
