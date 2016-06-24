import React, { Component } from 'react'
import {
  Image
} from 'react-native'
import _ from 'lodash'
export default class PhotoButton extends Component {
  state = { height: 320 * k, width: 320 * k }
  getImage(chat) {
    if (chat.isGroupChat) {
      return chat.image
    }
    return _.values(chat.contacts[0].profilePics).filter(pic => pic.primary)[0].image
  }
  render() {
    return (
      <Image
        style={{ height: 42, width: 42, borderRadius: 42 / 2, marginTop: 2, marginRight: 5 }}
        source={{ uri: this.getImage(this.props.info.item) }}
      />
    )
  }
}
