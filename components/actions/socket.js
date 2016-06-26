import { Subject } from 'rxjs'

const socket = {
  connectToUserChannel$: new Subject,
  userChannelAfterJoin$: new Subject,
  userChannelError$: new Subject,
  userChannelMessage$: new Subject,
  userChannelMessageStatus$: new Subject,
  userChannelTyping$: new Subject,
  sendStatusFromUserChannel$: new Subject,

  connectToChatChannel$: new Subject,
  chatChannelAfterJoin$: new Subject,
  chatChannelError$: new Subject,
  chatChannelMessage$: new Subject,
  sendMessage$: new Subject,
  leaveChatChannel$: new Subject,
  receiveMessageResponse$: new Subject
}

export default socket
