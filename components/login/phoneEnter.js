import TimerMixin from 'react-timer-mixin'
import React, { Component } from 'react'
import ReactNative from 'react-native'
const {
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  View
} = ReactNative
import dismissKeyboard from 'dismissKeyboard'
import { chooseCountry$, registerNav, next } from '../actions/uiactions'
import registrationActions from '../actions/registration'

export default class PhoneEnter extends Component {
  state = { country: { name: 'Kazakhstan', dial_code: '+7', code: 'KZ' } }
  componentDidMount() {
    this.chooseCountrySubscription = chooseCountry$.subscribe(x => {
      if (x.action === 'chooseCountry') {
        this.setState({ country: x.country })
      }
    })
  }
  componentWillUnmount() {
    this.chooseCountrySubscription.unsubscribe()
  }
  chooseCountry() {
    dismissKeyboard()
    registerNav({ action: 'navigation push', name: 'countryPicker', title: 'choose country' })
  }
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1, alignItems: 'center', paddingLeft: 10 }}>
        <TouchableOpacity
          onPress={() => this.chooseCountry()}
          style={{
            width: 310 * k,
            alignSelf: 'flex-end',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20 * k,
            paddingLeft: 4,
            alignItems: 'center',
            borderBottomWidth: 1,
            borderColor: 'rgb(225,225,225)'
          }}
        >
          <Text style={{ fontSize: 18 }}>{this.state.country.name}</Text>
          <Image source={{ uri: 'arrowGray', isStatic: true }} style={{ height: 16, width: 9 }} />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 18 * k,
            paddingLeft: 4,
            width: 310 * k,
            alignSelf: 'flex-end',
            borderBottomWidth: 1,
            borderColor: 'rgb(225,225,225)'
          }}
        >
          <Text style={{ fontSize: 20 }}>
            {this.state.country.dial_code}
          </Text>
          <TextInput
            autoFocus
            keyboardType={'number-pad'}
            ref={e => this.input = e}
            clearButtonMode={'while-editing'}
            style={{
              marginLeft: 20,
              fontSize: 20,
              width: 300 * k,
              height: 30,
              borderRadius: 5,
              marginRight: 5
            }}
            value={this.state.text}
            placeholder={'Your phone number'}
            placeholderTextColor={'rgb(140,140,140)'}
            onChange={(event) => {
              this.setState({
                text: event.nativeEvent.text
              })
              next({
                action: 'getPhone',
                phone: `${this.state.country.dial_code}${event.nativeEvent.text}`
              })
            }}
          />
        </View>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 10,
            width: 280,
            color: 'rgb(160,160,160)',
            fontSize: 17,
            alignSelf: 'center',
            lineHeight: 24
          }}
        >
          Please confirm your country code and enter your phone number.
        </Text>
      </View>
    )
  }
}

Object.assign(PhoneEnter.prototype, TimerMixin)
