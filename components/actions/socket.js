import { Subject } from 'rxjs'

export const connectToUserChannel$ = new Subject
export const userChannelJoin$ = new Subject
export const userChannelError$ = new Subject
export const userChannelMessage$ = new Subject
export const userChannelMessageStatus$ = new Subject
export const userChannelTyping$ = new Subject

export const connectToChatChannel$ = new Subject
export const chatChannelJoin$ = new Subject
export const chatChannelError$ = new Subject
export const chatChannelMessage$ = new Subject
