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
  render() {
    const left = this.props.mine ? { left: 6 } : { right: 6 }
    return (
      <View>
        <View
          style={{
            padding: 4,
            paddingTop: 6,
            paddingBottom: 6,
            margin: 6,
            marginRight: this.props.mine ? 70 : 15,
            marginLeft: this.props.mine ? 15 : 70,
            shadowOpacity: 0.2,
            shadowOffset: { width: 1, height: 1 },
            flexDirection: this.props.message.body.length < 10 ? 'row' : 'column',
            backgroundColor: this.props.mine ? 'white' : APP_COLOR,
            borderRadius: this.props.message.body.length < 30 ? 6 : 7,
            alignSelf: this.props.mine ? 'flex-start' : 'flex-end'
          }}
        >
          <Text
            style={{
              fontSize: 16,
              paddingHorizontal: 4,
              color: this.props.mine ? 'black' : 'white'
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
              color: this.props.mine ? 'black' : 'white'
            }}
          >
            {this.showMessageTime(this.props.message)}
          </Text>
        </View>
        <View
          style={{
            width: 0,
            bottom: 3,
            ...left,
            transform: [{ rotate: this.props.mine ? '-110deg' : '110deg' }],
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
            borderBottomColor: this.props.mine ? 'white' : APP_COLOR
          }}
        />
      </View>
    )
  }
}
