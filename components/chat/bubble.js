import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'
import moment from 'moment'
export default class Bubble extends Component {
  showMessageTime(message) {
    const createdAt = moment(message.createdAt)
    return `${createdAt.hour()}:${createdAt.minute()}`
  }
  showStatus(message) {
    switch (message.status) {
      case 'sending':
        return 'single tick'
      case 'received':
        return 'double tick'
      case 'read':
        return 'coloured tick'
      default:
        return 'clock'
    }
  }
  render() {
    const left = this.props.mine ? { right: 6 } : { left: 6 }
    return (
      <View>
        <View
          style={{
            padding: 4,
            paddingTop: 6,
            paddingBottom: 6,
            margin: 6,
            marginRight: this.props.mine ? 15 : 70,
            marginLeft: this.props.mine ? 70 : 15,
            shadowOpacity: 0.2,
            shadowOffset: { width: 1, height: 1 },
            flexDirection: this.props.message.body.length < 10 ? 'row' : 'column',
            backgroundColor: this.props.mine ? APP_COLOR : 'white',
            borderRadius: this.props.message.body.length < 30 ? 6 : 7,
            alignSelf: this.props.mine ? 'flex-end' : 'flex-start'
          }}
        >
          <Text
            style={{
              fontSize: 16,
              paddingHorizontal: 4,
              color: this.props.mine ? 'white' : 'black'
            }}
          >
            {this.props.message.body}
          </Text>
          <Text
            style={{
              fontSize: 11,
              paddingTop: 5,
              alignSelf: this.props.message.body.length < 10 ? 'center' : 'flex-end',
              paddingHorizontal: 4,
              color: this.props.mine ? 'white' : 'black'
            }}
          >
            {this.showMessageTime(this.props.message)}
            {this.props.mine ? this.showStatus(this.props.message) : ''}
          </Text>
        </View>
        <View
          style={{
            width: 0,
            bottom: 3,
            ...left,
            transform: [{ rotate: this.props.mine ? '110deg' : '-110deg' }],
            position: 'absolute',
            height: 0,
            borderRadius: 4,
            backgroundColor: 'transparent',
            borderStyle: 'solid',
            borderLeftWidth: 8,
            borderRightWidth: 8,
            borderBottomWidth: 16,
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: this.props.mine ? APP_COLOR : 'white'
          }}
        />
      </View>
    )
  }
}
