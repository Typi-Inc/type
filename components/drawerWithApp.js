import React, { Component } from 'react'
import SideMenu from 'react-native-side-menu'
import App from './app'
import { sideMenu$ } from './actions/uiactions'
import Menu from './settings/menu'

export default class DrawerWithApp extends Component {
  state = { disableGestures: false }
  componentWillMount() {
    this.sub = sideMenu$.subscribe(x => {
      if (x.action === 'close') {
        this.sideMenu.openMenu(false)
      } else if (x.action === 'open') {
        this.sideMenu.openMenu(true)
      } else if (x.action === 'disableGesture') {
        if (!this.state.disableGestures) this.setState({ disableGestures: true })
      } else if (x.action === 'enableGesture') {
        if (this.state.disableGestures) this.setState({ disableGestures: false })
      }
    })
  }
  toggle(val) {
    this.setState({ disableGestures: val, isOpen: false })
  }
  render() {
    let menu = <Menu />
    return (
      <SideMenu
        ref={el => this.sideMenu = el}
        isOpen={this.state.isOpen}
        edgeHitWidth={100}
        openMenuOffset={250 * k}
        bounceBackOnOverdraw={false}
        onChange={value => {
        // StatusBar.setHidden(value, 'slide')
        }}
        disableGestures={this.state.disableGestures} menuPosition={'right'} menu={menu}
      >
        <App toggle={this.toggle.bind(this)} />
      </SideMenu>
    )
  }
}
