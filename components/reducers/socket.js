import { Observable } from 'rxjs'
import { Socket } from '../phoenix'
import realm from '../db'

const socketReducerFn = actions => Observable.merge(
  actions.connectToUserChannel$.map(({ id, token }) => {
    const socket = new Socket('http://localhost:4000/socket', {
      params: { token },
      logger: (kind, msg, data) => console.log(`${kind}: ${msg}`, data)
    })
    socket.connect()
    socket.onOpen(e => console.log("OPEN", e))
    // socket.onError(e => console.log("ERROR", e))
    socket.onClose(e => console.log("CLOSE", e))

    const channel = socket.channel(`users:${id}`)
    channel
      .join()
      .receive('ok', response => actions.userChannelJoin$.next(response))
      .receive('error', reason => actions.userChannelError$.next(reason))
      .receive('timout', () => actions.userChannelError$.next(`The request has
        timed out please try againg when you will have internet connection`))

    channel.onError(e => actions.userChannelError$.next(e))
    channel.onClose(e => console.log("channel closed", e))

    channel.on('message', msg => {
      actions.userChannelMessage$.next(msg)
    })
    channel.on('message:status', payload => {
      actions.userChannelMessageStatus$.next(payload)
    })
    return state => ({
      ...state,
      socket,
      userChannel: channel
    })
  }),
  actions.connectToChatChannel$.map(chat => state => {
    const channel = state.socket.channel(`chats:${chat.id}`)
    channel
      .join()
      .receive('ok', response => actions.chatChannelJoin$.next(response))
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
  actions.chatChannelMessage$.map(({ chat, msg }) => state => {
    realm.write(() => {
      chat.messages.push(msg)
    })
    return state
  }),
  actions.leaveChatChannel$.map(() => state => {
    state.chatChannel.leave()
    return {
      ...state,
      chatChannel: undefined
    }
  })
)

export default socketReducerFn
