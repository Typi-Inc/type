import React, { Component } from 'react'
import {
  View
} from 'react-native'
import { ListView } from 'realm/react-native'
import TimerMixin from 'react-timer-mixin'
import IncrementalGroup from 'IncrementalGroup'
import Item from './item'
import Loading from '../utils/loading'
import PlusButton from '../creation/plusButton'
import Background from '../creation/background'
// import '../genRealmData'
import realm from '../db'

export default class List extends Component {
  state={
    clippedSubviews: false,
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    })
  }
  componentWillMount() {
    this.setTimeout(
      () => this.scroll && this.scroll.setNativeProps({ removeClippedSubviews: true }),
      100
    )
    this.setState({ dataSource: this.state.dataSource.cloneWithRows(this.getDataSource()) })
  }
  getDataSource() {
    const chats = realm.objects('Chat').slice()
    const sortedChats = chats.sort(
      (a, b) =>
        a.messages[a.messages.length - 1].createdAt < b.messages[b.messages.length - 1].createdAt
    )
    return sortedChats
  }
  onDone() {
    this.loading && this.loading.onDone()
  }
  renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    return <View
      style={{
        width: 250 * k,
        marginLeft: 70 * k,
        height: 1,
        backgroundColor: BORDER_COLOR
      }}
    />
  }
  renderRow(row, sectionId, rowId) {
    return <Item item={row} key={rowId} />
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <IncrementalGroup onDone={this.onDone.bind(this)} disabled={false}>
          <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ListView
              automaticallyAdjustContentInsets
              // ref={el=>this.scroll=el}
              renderSeparator={this.renderSeparator.bind(this)}
              dataSource={this.state.dataSource}
              renderRow={this.renderRow.bind(this)}
              removeClippedSubviews={false}
            />
            <Background />
            {this.props.disabled ? null : <PlusButton />}
          </View>
        </IncrementalGroup>
        <Loading delay={200} ref={el => this.loading = el} />
      </View>
    )
  }
}
Object.assign(List.prototype, TimerMixin)
