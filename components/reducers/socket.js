import { Observable } from 'rxjs'
import { Socket } from '../phoenix'
import {
  connectToUserChannel$,
  userChannelJoin$,
  userChannelError$,
  userChannelMessage$,
  userChannelMessageStatus$,
  userChannelTyping$,
} from '../actions/socket'

connectToUserChannel$.subscribe(({ id }) => {
  const socket = new Socket('http://localhost:4000/socket', {
    params: { id },
    logger: (kind, msg, data) => console.log(`${kind}: ${msg}`, data)
  })
  socket.connect()
  socket.onOpen(e => console.log("OPEN", e))
  socket.onError(e => console.log("ERROR", e))
  socket.onClose(e => console.log("CLOSE", e))

  const channel = socket.channel(`users:${id}`)
  channel
    .join()
    .receive('ok', response => userChannelJoin$.next(response))
    .receive('error', reason => userChannelError$.next(reason))
    .receive('timout', () => userChannelError$.next('The request has timed out please try againg when you will have internet connection'))

  channel.onError(e => console.log("something went wrong", e))
  channel.onClose(e => console.log("channel closed", e))

  channel.on('message', msg => {
    userChannelMessage$.next(msg)
  })
  channel.on('message:status', payload => {
    userChannelMessageStatus$.next(payload)
  })
})
