import { Observable } from 'rxjs'
import { Socket, Presence } from '../phoenix'
import realm from '../db'
import _ from 'lodash'

const socketReducerFn = actions => Observable.merge(
  actions.connectToUserChannel$.map(({ id, token }) => {
    const socket = new Socket('http://localhost:4000/socket', {
      params: { token },
      logger: (kind, msg, data) => console.log(`${kind}: ${msg}`, data)
    })
    socket.connect()
    socket.onOpen(e => console.log("OPEN", e))
    socket.onError(e => console.log("ERROR", e))
    socket.onClose(e => console.log("CLOSE", e))

    const channel = socket.channel(`users:${id}`)
    channel
      .join()
      .receive('ok', response => actions.userChannelAfterJoin$.next(response))
      .receive('error', reason => actions.userChannelError$.next(reason))
      .receive('timout', () => actions.userChannelError$.next(`The request has
        timed out please try againg when you will have internet connection`))

    channel.onError(e => actions.userChannelError$.next(e))
    channel.onClose(e => console.log("channel closed", e))

    channel.on('message', msg => {
      actions.userChannelMessage$.next(msg)
    })
    channel.on('status', payload => {
      actions.userChannelMessageStatus$.next(payload)
    })
    channel.on('typing', payload => {
      console.log('typing information has come')
      console.log(payload)
      actions.userChannelTyping$.next(payload)
    })
    return state => ({
      ...state,
      userId: id,
      socket,
      userChannel: channel,
      presences: {}
    })
  }),
  actions.userChannelTyping$.map(({ chatId, userId, status }) => state => {
    console.log('here it is')
    if (status === 'typing') {
      if (!state.typings) {
        state.typings = {}
      }
      if (state.typings[chatId]) {
        if (!_.includes(state.typings[chatId], userId)) {
          state.typings[chatId].push(userId)
        }
      } else {
        state.typings[chatId] = [userId]
      }
    } else {
      const index = state.typings[chatId].indexOf(userId)
      index !== -1 && state.typings[chatId].splice(index, 1)
    }
    console.log(state.typings)
    return state
  }),
  // actions.userChannelAfterJoin$.map(response => state => {
  //   state.userChannel.on('presence_state', presenceState => {
  //     actions.presenceState$.next(presenceState)
  //     // Presence.syncState(state.presences, state)
  //   })
  //   state.userChannel.on('presence_diff', diff => {
  //     actions.presenceDiff$.next(diff)
  //     // Presence.syncDiff(state.presences, diff)
  //   })
  //   return state
  // }),
  // actions.presenceState$.map(presenceState => state => {
  //   console.log('presence shit has come')
  //   console.log(presenceState)
  //   console.log(state.presences)
  //   Presence.syncState(state.presences, presenceState)
  //   console.log(state.presences)
  //   return state
  // }),
  // actions.presenceDiff$.map(diff => state => {
  //   console.log('presence diff shit has come')
  //   console.log(diff)
  //   console.log(state.presences)
  //   Presence.syncDiff(state.presences, diff)
  //   console.log(state.presences)
  //   return state
  // }),
  actions.userChannelMessage$.map(msg => state => {
    realm.write(() => {
      const chat = realm.objects('Chat').filtered(`id = ${msg.chatId}`)[0]
      chat.messages.push({
        ...msg,
        status: 'received'
      })
    })
    state.userChannel
      .push('status', {
        id: msg.id,
        status: 'received'
      })
      .receive('ok', () => {
        console.log('message received')
      })
      .receive('error', reasons => console.log(reasons))
      .receive('timeout', () => console.log('Networking issue. Still waiting...'))
    return state
  }),
  actions.userChannelMessageStatus$.map(({ id, status }) => state => {
    const message = realm.objects('Message').filtered(`id = ${id}`)[0]
    realm.write(() => {
      message.status = status
    })
    return state
  }),
  actions.connectToChatChannel$.map(chat => state => {
    const channel = state.socket.channel(`chats:${chat.id}`)
    channel
      .join()
      .receive('ok', response => actions.chatChannelAfterJoin$.next({ chat, response }))
      .receive('error', reason => actions.chatChannelError$.next(reason))
      .receive('timout', () => actions.chatChannelError$.next(`The request has
        timed out please try againg when you will have internet connection`))

    channel.onError(e => actions.chatChannelError$.next(e))
    channel.onClose(e => console.log("channel closed", e))

    channel.on('message', msg => {
      actions.chatChannelMessage$.next({ chat, msg })
    })
    return {
      ...state,
      chatChannel: channel
    }
  }),
  actions.chatChannelAfterJoin$.map(({ chat, response }) => state => {
    const messages = realm.objects('Message')
      .filtered(`chatId == ${chat.id} and userId != ${state.userId} and status != "read"`)
    if (!_.isEmpty(messages)) {
      state.userChannel.push('statuses', {
        statuses: _.values(messages).map(message => ({ id: message.id, status: 'read' }))
      })
      realm.write(() => {
        _.values(messages).forEach(message => {
          message.status = 'read' // eslint-disable-line
        })
      })
    }
    return state
  }),
  actions.chatChannelMessage$.map(({ chat, msg }) => state => {
    realm.write(() => {
      chat.messages.push({
        ...msg,
        status: 'read'
      })
    })
    state.userChannel
      .push('status', {
        id: msg.id,
        status: 'read'
      })
      .receive('ok', () => {
        console.log('message received')
      })
      .receive('error', reasons => console.log(reasons))
      .receive('timeout', () => console.log('Networking issue. Still waiting...'))
    return state
  }),
  actions.leaveChatChannel$.map(() => state => {
    state.chatChannel.leave()
    return {
      ...state,
      chatChannel: undefined
    }
  }),
  actions.sendMessage$.map(msg => state => {
    const chat = realm.objects('Chat').filtered(`id = ${msg.chatId}`)[0]
    realm.write(() => {
      chat.messages.push({
        id: msg.createdAt,
        ...msg
      })
    })
    state.chatChannel
      .push('message', {
        body: msg.body,
        chat_id: msg.chatId,
        created_at: msg.createdAt,
        publish_at: msg.publishAt,
        user_id: msg.userId
      })
      .receive('ok', updatedMsg => {
        actions.receiveMessageResponse$.next(updatedMsg)
      })
      .receive('error', reasons => console.log(reasons))
      .receive('timeout', () => console.log('Networking issue. Still waiting...'))
    return state
  }),
  actions.receiveMessageResponse$.map(updatedMsg => state => {
    const message = realm.objects('Message').filtered(`createdAt = ${updatedMsg.createdAt}`)[0]
    realm.write(() => {
      message.id = updatedMsg.id
      message.status = updatedMsg.status
    })
    return state
  }),
  actions.sendTypingStatus$
    .merge(
      // TODO this is not finished
      actions.sendTypingStatus$
        .map(() => 'not typing')
        .delay(3000)
    )
    .debounceTime(300)
    .map(status => state => {
      state.chatChannel
        .push('typing', { status })
        .receive('ok', () => {
          console.log('status has successfully been delivered')
        })
        .receive('error', reasons => console.log(reasons))
        .receive('timeout', () => console.log('Networking issue. Still waiting...'))
      return state
    })
)

export default socketReducerFn
