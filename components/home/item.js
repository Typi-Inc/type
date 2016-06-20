import React, { Component } from 'react'
import {
  Text,
  TouchableOpacity,
  Image,
  View
} from 'react-native'
import { appNav, homeSearch } from '../actions/uiactions'
import moment from 'moment'

export default class Item extends Component {
  componentWillMount() {
    this.swipeoutBtns = [
      {
        text: 'Close',
        type: 'primary',
        backgroundColor: RED
      }
    ]
  }
  getImageURI(chat) {
    if (chat.isGroupChat) {
      return chat.image
    }
    const profilePics = chat.contacts[0].profilePics.filtered('primary = true')
    return profilePics.length !== 0 ? profilePics[0].image : undefined
  }
  getName(chat) {
    if (chat.isGroupChat) {
      return chat.groupName
    }
    return this.props.item.contacts[0].fullName
  }
  showLastMessageBody(chat) {
    const message = chat.messages[chat.messages.length - 1]
    return message.body
  }
  showLastMessageTime(chat) {
    const message = chat.messages[chat.messages.length - 1]
    const createdAt = moment(message.createdAt)
    return `${createdAt.hour()}:${createdAt.minute()}`
  }
  showTube(item) {
    appNav({
      action: 'push',
      nav: 'appNav',
      name: 'chat',
      info: { title: this.props.item.contacts[0].fullName, item }
    })
    homeSearch({ action: 'blur' })
  }
  shortenText(text) {
    if (text.length > 53) {
      return `${text.substring(0, 53)}...`
    }
    return text
  }
  render() {
    // console.log(this.props.item)
    return (
      <TouchableOpacity
        onPress={this.showTube.bind(this, this.props.item)}
        style={{ overflow: 'hidden' }}
        underlayColor={'rgb(120,120,120'}
      >
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            alignItems: 'center',
            paddingTop: 2,
            paddingBottom: 0
          }}
        >
          <Image
            style={{ height: 60, width: 60, borderRadius: 60 / 2 }}
            source={{ uri: this.getImageURI(this.props.item) }}
          />
          <View
            style={{
              marginLeft: 4,
              width: k > 1 ? 255 * k : 245 * k,
              padding: 7,
              paddingRight: 10,
              height: 72
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 4
              }}
            >
              <Text style={{ fontSize: 17, fontWeight: '500' }}>
                {this.getName(this.props.item)}
              </Text>
              <Text style={{ color: TEXT_GREY }}>
                {this.showLastMessageTime(this.props.item)}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Text
                style={{
                  width: 200 * k,
                  color: TEXT_GREY,
                  fontWeight: this.props.item.notificationCount > 0 ? 'bold' : 'normal'
                }}
              >
                {this.shortenText(this.showLastMessageBody(this.props.item))}
              </Text>
              {
                this.props.item.notificationCount > 0 ?
                  <View
                    style={{
                      backgroundColor: APP_COLOR,
                      ...center,
                      padding: 6,
                      paddingTop: 2,
                      paddingBottom: 2,
                      borderRadius: 10,
                      marginBottom: 10
                    }}
                  >
                    <Text style={{ color: 'white' }}>{this.props.item.notificationCount}</Text>
                  </View> :
                  null
              }
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}
