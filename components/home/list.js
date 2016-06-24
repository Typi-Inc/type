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
import realm from '../db'

export default class List extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }
  state = {
    clippedSubviews: false,
    chats: realm.objects('Chat').slice()
  }
  componentWillMount() {
    realm.removeListener('change', this.onChange)
    this.setTimeout(
      () => this.scroll && this.scroll.setNativeProps({ removeClippedSubviews: true }),
      100
    )
  }
  componentDidMount() {
    realm.addListener('change', this.onChange)
  }
  onChange() {
    this.setState({ chats: realm.objects('Chat').slice() })
  }
  onDone() {
    this.loading && this.loading.onDone()
  }
  getDataSource(chats) {
    const sortedChats = chats.sort(
      (a, b) =>
        b.messages[b.messages.length - 1].createdAt - a.messages[a.messages.length - 1].createdAt
    )
    return sortedChats
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
              dataSource={
                new ListView.DataSource({
                  rowHasChanged: (row1, row2) => row1 !== row2
                })
                .cloneWithRows(this.getDataSource(this.state.chats))
              }
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
