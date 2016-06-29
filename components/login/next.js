import TimerMixin from 'react-timer-mixin'
import React, { Component } from 'react'
import ReactNative from 'react-native'
const {
  Text,
  TouchableOpacity
} = ReactNative
import { registerNav, next$ } from '../actions/uiactions'
import deviceInfo from 'react-native-device-info'
import registrationActions from '../actions/registration'

let phone;
export default class Next extends Component {
  state = { phone: undefined }
  componentDidMount() {
    this.nextSubscription = next$.subscribe(x => {
      if (x.action === 'getPhone') {
        this.setState({ phone: x.phone })
        phone = x.phone
      }
      if (x.action === 'getCode') {
        this.setState({ code: x.code })
      }
    })
  }
  componentWillUnmount() {
    this.nextSubscription.unsubscribe()
  }
  goNext() {
    if (this.props.name === 'phoneEnter') {
      const uuid = deviceInfo.getUniqueID()
      registrationActions.register$.next({
        registration: {
          country_code: this.state.phone.slice(0, 2),
          number: this.state.phone.slice(2),
          region: 'KZ',
          uuid
        }
      })
      registerNav({ action: 'navigation push', title: this.state.phone, name: 'codeEnter' })
    }
    if (this.props.name === 'codeEnter') {
      const params = {
        verification: {
          country_code: phone.slice(0, 2),
          number: phone.slice(2),
          region: 'KZ',
          code: this.state.code
        }
      }
      registrationActions.verify$.next(params)
    }
  }
  render() {
    return (
      <TouchableOpacity
        onPress={this.goNext.bind(this)}
        style={{
          ...center,
          left: 10 * k,
          backgroundColor: APP_COLOR,
          marginTop: 8,
          marginRight: 15 * k,
          padding: 9,
          paddingTop: 5,
          paddingBottom: 5,
          borderRadius: 3
        }}
      >
        <Text style={{ fontSize: 15, color: 'white', fontWeight: '500' }}>Next</Text>
      </TouchableOpacity>
    )
  }
}
Object.assign(Next.prototype, TimerMixin)
