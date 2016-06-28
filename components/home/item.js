import React, { Component } from 'react'
import {
  Text,
  TouchableOpacity,
  Image,
  View
} from 'react-native'
import { appNav, homeSearch } from '../actions/uiactions'
import moment from 'moment'
import _ from 'lodash'
import realm from '../db'

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
  getContactNameById(chat, id) {
    if (!chat.isGroupChat) {
      return
    }
    // this.props.item.contact.filter(contact => contact.id == )
    return this.props.item.contacts[0].fullName
  }
  getName(chat) {
    if (chat.isGroupChat) {
      return chat.groupName
    }
    return this.props.item.contacts[0].fullName
  }
  getNotificationCount(chat) {
    const me = realm.objects('Me')[0]
    return chat.messages.filtered(`userId != ${me.id} and status != "read"`).length
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
  whoIsTyping(chat, typing) {
    if (!chat.isGroupChat || _.isEmpty(typing)) {
      return
    }

    const result = typing
      .map(userId => realm.objects('Contact').filtered(`id = ${userId}`)[0].fullName)
      .reduce((prev, curr) => `${prev} ${curr}`)

    return result
  }
  render() {
    console.log(this.props.item.typing)
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
              {
                !_.isEmpty(this.props.item.typing) ?
                  <Text
                    style={{
                      width: 200 * k,
                      color: TEXT_GREY,
                      fontWeight: this.getNotificationCount(this.props.item) > 0 ? 'bold' : 'normal'
                    }}
                  >
                    {this.whoIsTyping(this.props.item, this.props.item.typing)} is typing...
                  </Text> :
                  <Text
                    style={{
                      width: 200 * k,
                      color: TEXT_GREY,
                      fontWeight: this.getNotificationCount(this.props.item) > 0 ? 'bold' : 'normal'
                    }}
                  >
                    {this.shortenText(this.showLastMessageBody(this.props.item))}
                  </Text>
              }
              {
                this.getNotificationCount(this.props.item) > 0 ?
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
                    <Text style={{ color: 'white' }}>
                      {this.getNotificationCount(this.props.item)}
                    </Text>
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
