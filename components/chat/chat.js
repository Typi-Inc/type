import React, { Component } from 'react'
import {
  InteractionManager,
  View
} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Tube from './tube'
import { chatTitle } from '../actions/uiactions'
import StarredItems from '../settings/starredItems'
import socketActions from '../actions/socket'

export default class Chat extends Component {
  state = { showFuture: false }
  componentDidMount() {
    socketActions.connectToChatChannel$.next(this.props.info.item)
    InteractionManager.runAfterInteractions(() => {
      this.setState({ showFuture: true })
    })
  }
  componentWillUnmount() {
    // realm.removeListener('change', this.onChange.bind(this))
    socketActions.leaveChatChannel$.next()
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
          renderTabBar={() => <View />}
          contentProps={{
            keyboardShouldPersistTaps: true
          }}
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
