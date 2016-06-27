import React, { Component } from 'react'
import ReactNative, {
  View,
  Image,
  InteractionManager,
  Animated,
  RefreshControl,
  ScrollView
} from 'react-native'
const UIManager = require('NativeModules').UIManager
import TimerMixin from 'react-timer-mixin'
import Input from './input'
import Bubble from './bubble'
import state$ from '../rx-state/state'
import connect from '../rx-state/connect'
import realm from '../db'
const update = ReactNative.addons.update

class Tube extends Component {
  state = {
    clipped: false,
    loading: true,
    refreshing: false,
    refreshColor: 'transparent',
    clippedSubviews: true,
    user: realm.objects('Me')[0]
  }
  componentDidMount() {
    // this.scrollToBottom()
    InteractionManager.runAfterInteractions(() => {
      this.scroll && this.scroll.setNativeProps({ removeClippedSubviews: true })
    })
  }
  // scrollToBottom() {
  //   const innerScrollView = this.scroll.refsInnerScrollView
  //   console.log(Object.keys(this.scroll.refs))
  //   const scrollView = this.scroll.refs.ScrollView;
  //   console.log(innerScrollView)
  //   requestAnimationFrame(() => {
  //     innerScrollView.measure((innerScrollViewX, innerScrollViewY, innerScrollViewWidth, innerScrollViewHeight) => {
  //       scrollView.measure((scrollViewX, scrollViewY, scrollViewWidth, scrollViewHeight) => {
  //         var scrollTo = innerScrollViewHeight - scrollViewHeight + innerScrollViewY
  //         if (innerScrollViewHeight < scrollViewHeight) {
  //           return
  //         }
  //         this.scroll.scrollTo(scrollTo)
  //       })
  //     })
  //   })
  // }
  onTouchStart() {
    this.touchMove = false
  }
  onTouchMove() {
    this.touchMove = true
  }
  onTouchEnd() {
    'calling this shit'
    if (!this.touchMove && !this.input.keyboardIsUp()) {
      this.input.dismissTimer()
    }
  }
  onContentSizeChange(contentWidth, contentHeight) {
    this.handle = ReactNative.findNodeHandle(this.scroll)
    if (this.handle) {
      UIManager.measure(this.handle, (x, y, w, h, px, py) => {
        this.scroll.scrollTo({ x: 0, y: contentHeight - h, animated: false })
      })
    }
  }
  onRefresh() {
    if (this.state.messages.length > 15) {
      this.setState({ refreshing: false })
    } else {
      this.setState({ refreshing: true, refreshColor: APP_COLOR }, () => {
        this.setTimeout(() => {
          const list = newMessages.concat(this.state.messages)
          // LayoutAnimation.configureNext(keyboard)
          this.setState({ messages: update(this.state.messages, { $unshift: newMessages }) })
        }, 500)
      })
    }
  }
  setBottom(h) {
    this.scroll && this.scroll.setNativeProps({ style: { bottom: this.keyboardHeight + h } })
  }
  hide(h) {
    this.keyboardHeight = 0
    this.scroll && this.scroll.setNativeProps({ style: { bottom: h }, contentInset: { top: h } })
    if (this.contentOffset === 0) {
      this.scroll && this.scroll.setNativeProps({ contentOffset: { y: -20 } })
    }
  }
  show(offset, h) {
    this.keyboardHeight = offset
    this.scroll && this.scroll.setNativeProps({
      style: { bottom: offset + h },
      contentInset: { top: offset + h }
    })
  }
  handleScroll(e) {
    if (e.nativeEvent.contentOffset.y < 0) {
      this.contentOffset = 0
    } else {
      this.contentOffset = 1
    }
  }
  onDone() {
    this.loading && this.loading.onDone()
  }
  render() {
    this.anim = this.anim || new Animated.Value(1)
    this.anim1 = this.anim1 || new Animated.Value(0)
    this.contentHeight = this.contentHeight || 0
    return (
      <Image style={{ flex: 1 }} source={{ uri: 'wall1', isStatic: true }}>
        <View style={{ flex: 1 }}>
          <ScrollView
            ref={el => this.scroll = el}
            refreshControl={
              this.props.chat.messages.length > 15 ? null :
                <RefreshControl
                  tintColor={this.state.refrechColor}
                  refreshing={this.state.refreshing}
                  onRefresh={this.onRefresh.bind(this)}
                />
            }
            onContentSizeChange={this.onContentSizeChange.bind(this)}
            scrollEventThrottle={100}
            onScroll={this.handleScroll.bind(this)}
            onTouchStart={this.onTouchStart.bind(this)}
            onTouchMove={this.onTouchMove.bind(this)}
            onTouchEnd={this.onTouchEnd.bind(this)}
            removeClippedSubviews={false}
            contentContainerStyle={{ paddingBottom: 90 }}
          >
            {
              this.props.chat.messages.map((message, i) =>
                <Bubble
                  ref={el => this[`${i}`] = el}
                  index={i}
                  message={message}
                  key={i}
                  mine={message.userId === this.state.user.id}
                />
              )
            }
          </ScrollView>
          <Input
            ref={el => this.input = el}
            show={this.show.bind(this)}
            hide={this.hide.bind(this)}
            setBottom={this.setBottom.bind(this)}
            chat={this.props.chat}
          />
        </View>
      </Image>
    )
  }
}
Object.assign(Tube.prototype, TimerMixin)

export default connect(state$, () => ({}))(Tube)
