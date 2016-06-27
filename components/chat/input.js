import TimerMixin from 'react-timer-mixin'
import React, { Component } from 'react'
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  DatePickerIOS,
  InteractionManager,
  LayoutAnimation,
  DeviceEventEmitter
} from 'react-native'
import { input$ } from '../actions/uiactions'
import { keyboard, fast } from '../animations'
import dismissKeyboard from 'dismissKeyboard'
import moment from 'moment'
import Icon from 'react-native-vector-icons/Ionicons'
import socketActions from '../actions/socket'
import realm from '../db'
import _ from 'lodash'

export default class Input extends Component {
  state={
    text: '',
    showTime: false,
    loading: true,
    goDown: true,
    height: 0,
    date: new Date(),
    timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60
  }
  componentDidMount() {
    this.sub = input$.subscribe(x => {
      if (x.action === 'unsubscribe') {
        this.unsubscribe()
      }
    })
    this.keyboardWillShowSubscription =
      DeviceEventEmitter.addListener('keyboardWillShow', this.show.bind(this))
    this.keyboardWillHideSubscription =
      DeviceEventEmitter.addListener('keyboardWillHide', this.hide.bind(this))
    InteractionManager.runAfterInteractions(() => {
      // LayoutAnimation.configureNext(openAnimation)
      this.setState({ loading: false }, () => {
        // this.setTimeout(()=>{let handle=ReactNative.findNodeHandle(this.datePicker1)
        //   UIManager.measure(handle,(x,y,width,height,pagex,pagey)=>{
        //   })
        // },100)
      })
    })
  }
  componentWillUnmount() {
    this.unsubscribe()
  }
  onDateChange(date) {
    LayoutAnimation.configureNext(fast)
    if (date < new Date) this.setState({ date: new Date })
    else this.setState({ date })
  }
  pressTimer() {
    if (this.state.goDown) {
      this.setState({ goDown: false, showTime: true })
      this.white && this.white.setNativeProps({ style: { height: 226, bottom: -10 } })
      this.datePicker && this.datePicker.setNativeProps({ style: { bottom: -10 } })
      dismissKeyboard()
      LayoutAnimation.configureNext(keyboard)
      this.main && this.main.setNativeProps({ style: { bottom: 213 } })
      this.props.show(226, this.addHeight)
    } else {
      this.textInput.focus()
    }
  }
  show(e) {
    this.setState({ goDown: true })
    this.keyboardHeight = e.endCoordinates.height
    LayoutAnimation.configureNext(keyboard)
    this.props.show(e.endCoordinates.height, this.addHeight)
    this.datePicker && this.datePicker.setNativeProps({ style: { bottom: -230 } })
    this.white && this.white.setNativeProps({
      style: { height: e.endCoordinates.height, bottom: 0 }
    })
    this.main && this.main.setNativeProps({ style: { bottom: e.endCoordinates.height } })
  }
  keyboardIsUp() {
    return this.state.goDown
  }
  dismissTimer() {
    this.white && this.white.setNativeProps({ style: { height: 10 } })
    LayoutAnimation.configureNext(keyboard)
    this.datePicker && this.datePicker.setNativeProps({ style: { bottom: -230 } })
    this.props.hide(this.addHeight)
    this.main && this.main.setNativeProps({ style: { bottom: 0 } })
    this.setState({ goDown: true })
  }
  hide() {
    if (!this.state.goDown) return
    this.keyboardHeight = 0
    this.white && this.white.setNativeProps({ style: { height: 0 } })
    LayoutAnimation.configureNext(keyboard)
    this.main && this.main.setNativeProps({ style: { bottom: 0 } })
    this.props.hide(this.addHeight)
  }
  unsubscribe() {
    this.keyboardWillShowSubscription.remove()
    this.keyboardWillHideSubscription.remove()
    this.sub.unsubscribe()
  }
  dateToDisplay(date) {
    const d = moment(date)
    if (d.diff(moment(), 'days') > 3) {
      // console.log('date is here ',d.format('ddd D MMM h:m A'))
      return d.format('dddd h:mm A, D MMMM')
    }
    return d.calendar()
  }
  sendMessage() {
    socketActions.sendMessage$.next({
      body: _.trim(this.state.text),
      chatId: this.props.chat.id,
      createdAt: Date.now(),
      userId: realm.objects('Me')[0].id
    })
    this.setState({
      text: '',
      height: 0
    })
  }
  render() {
    // console.log(SwipeableListView)
    this.addHeight = this.addHeight || 0
    this.keyboardHeight = this.keyboardHeight || 0
    // if(this.state.loading) return <View/>
    let date = this.dateToDisplay(this.state.date)
    return (
      <View>
        <View
          ref={el => this.main = el}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            backgroundColor: 'transparent'
          }}
        >
          <View
            style={{
              backgroundColor: GREEN,
              padding: 6,
              paddingRight: 4,
              opacity: !this.state.showTime ? 0 : 1,
              shadowOffset: { width: 4, height: 4 },
              shadowOpacity: 0.4,
              borderRadius: 2,
              flexDirection: 'row',
              ...center,
              alignSelf: 'flex-start',
              margin: 4,
              marginBottom: 2
            }}
          >
            <Text style={{ color: 'white', fontSize: 14 }}>{date}</Text>
            {
              this.state.goDown ?
                <View
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 4,
                    width: 20,
                    height: 20,
                    ...center,
                    marginLeft: 6,
                    paddingTop: 2
                  }}
                >
                  <TouchableOpacity
                    style={{ padding: 6 }}
                    onPress={() => this.setState({ showTime: false, date: new Date() })}
                  >
                    <Icon
                      name="ios-close"
                      style={{ backgroundColor: 'transparent' }}
                      size={20}
                      color={'black'}
                    />
                  </TouchableOpacity>
                </View> : null
            }
          </View>
          <View
            ref={el => this.wrapper = el}
            style={{
              backgroundColor: BACKGROUND_GREY,
              marginBottom: 0,
              height: Math.max(43, (12 * k + this.state.height)),
              borderTopWidth: 0.5,
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'flex-start',
              borderColor: BORDER_COLOR,
              width: 320 * k,
              padding: 7, paddingLeft: 0
            }}
          >
            <TouchableOpacity
              style={{
                padding: 7,
                paddingRight: 6,
                paddingBottom: 0,
                alignItems: 'flex-end',
                justifyContent: 'flex-end'
              }}
              onPress={this.pressTimer.bind(this)}
            >
              {
                this.state.goDown ?
                  <Icon
                    name="md-time"
                    style={{ alignSelf: 'flex-end' }}
                    size={25}
                    color={'rgb(160,160,160)'}
                  /> :
                  <Icon
                    name="ios-keypad"
                    size={26}
                    color={'rgb(160,160,160)'}
                  />
              }
            </TouchableOpacity>
            <TextInput
              multiline
              ref={el => this.textInput = el}
              placeholder={'Message'}
              placeholderTextColor={'rgb(160,160,160)'}
              style={{
                height: Math.max(30, this.state.height + 4 * k),
                marginBottom: 2,
                fontSize: 15,
                alignItems: 'center',
                backgroundColor: 'white',
                borderColor: 'rgb(210,210,210)',
                borderWidth: 1,
                borderRadius: 3,
                alignSelf: 'center',
                width: /\S/.test(this.state.text) ? 238 * k : 273 * k,
                paddingLeft: 7
              }}
              value={this.state.text}
              onChange={(event) => {
                // var handle = InteractionManager.createInteractionHandle();
                // this.requestAnimationFrame(() => LayoutAnimation.configureNext(fast))
                if (event.nativeEvent.text.length > 0) {
                  socketActions.sendTypingStatus$.next('typing')
                } else {
                  socketActions.sendTypingStatus$.next('not typing')
                }
                this.setState({
                  text: event.nativeEvent.text,
                  height: Math.min(event.nativeEvent.contentSize.height, 129 * k)
                })
                this.addHeight = this.state.height < 25 * k ? 0 : this.state.height - 30 * k
                this.props.setBottom(this.addHeight)
              }}
            />
            <TouchableOpacity onPress={e => this.sendMessage(e)}>
              <Text
                ref={el => this.send = el}
                style={{
                  marginLeft: 5,
                  marginBottom: 2,
                  marginRight: 5,
                  color: APP_COLOR,
                  fontWeight: '500',
                  fontSize: 16,
                  opacity: /\S/.test(this.state.text) ? 1 : 0
                }}
              >Send</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          ref={el => this.white = el}
          style={{
            position: 'absolute',
            bottom: 0,
            height: 0,
            width: 320 * k,
            backgroundColor: BACKGROUND_GREY
          }}
        />
        {
          this.state.loading ? null :
            <View
              ref={el => this.datePicker = el}
              style={{
                position: 'absolute',
                bottom: -230,
                left: 0,
                paddingBottom: 0 * h,
                ...center,
                paddingLeft: k > 1 ? 20 * k : 0,
                backgroundColor: BACKGROUND_GREY,
                paddingTop: 0
                // backgroundColor:'rgba(34,167,240,0.4)'
              }}
            >
              <DatePickerIOS
                style={{ width: 320 * k }}
                ref={el => this.datePicker1 = el}
                // style={{height:100=}}
                date={this.state.date}
                mode="datetime"
                timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
                onDateChange={this.onDateChange.bind(this)}
              />
            </View>
        }
      </View>
    )
  }
}
Object.assign(Input.prototype, TimerMixin)
