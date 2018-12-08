function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import { Body, Main } from './Body';
import Sidebar from './Sidebar';
import RightSidebar from './RightSidebar';
import Toolbar from './Toolbar';
import Matchmedia from './Matchmedia';
const App = styled.div.withConfig({
  displayName: "Layout__App",
  componentId: "sc-107aecb-0"
})(["display:flex;flex-direction:column;min-height:100vh;a{color:", ";text-decoration:", ";}a:hover{color:", ";text-decoration:", ";}"], props => [props["link-color"], (props.theme || {})["link-color"], [props["blue"], (props.theme || {})["blue"], `#20a8d8`].filter(v => v !== void 0)[0]].filter(v => v !== void 0)[0], props => [props["link-decoration"], (props.theme || {})["link-decoration"], `none`].filter(v => v !== void 0)[0], props => require('tinycolor2')([props["link-color"], (props.theme || {})["link-color"], [props["blue"], (props.theme || {})["blue"], `#20a8d8`].filter(v => v !== void 0)[0]].filter(v => v !== void 0)[0]).darken(parseFloat(`15%`)).toHex8String(), props => [props["link-hover-decoration"], (props.theme || {})["link-hover-decoration"], `underline`].filter(v => v !== void 0)[0]);
export default class Layout extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      small: false,
      sidebarOpened: false,
      sidebarCollapse: this.props.initialCollapse,
      sidebarMini: this.props.initialMini,
      rightSidebarCollapse: this.props.initialRightSidebarCollapse
    });

    _defineProperty(this, "onNavbarToggle", () => {
      const {
        small,
        sidebarOpened,
        sidebarCollapse
      } = this.state;

      if (small) {
        this.setState({
          sidebarOpened: !sidebarOpened
        });
      } else {
        this.setState({
          sidebarCollapse: !sidebarCollapse
        });
      }
    });
  }

  render() {
    const {
      sideMenu,
      topMenu,
      selected,
      sideBarTabs,
      children,
      logo
    } = this.props;
    const {
      small,
      sidebarOpened,
      sidebarCollapse,
      rightSidebarCollapse,
      sidebarMini
    } = this.state;
    return React.createElement(App, null, React.createElement(Matchmedia, {
      query: "screen and (max-width: 991.98px)",
      onMatch: matches => this.setState({
        small: matches,
        sidebarOpened: false
      })
    }), React.createElement(Header, {
      logo: logo,
      small: small,
      topMenu: topMenu,
      selected: selected,
      onNavbarToggle: this.onNavbarToggle,
      onRightNavbarToggle: () => this.setState({
        rightSidebarCollapse: !rightSidebarCollapse
      })
    }), React.createElement(Body, null, React.createElement(Sidebar, {
      sideMenu: sideMenu,
      selected: selected,
      sidebarCollapse: !sidebarOpened && (small || sidebarCollapse),
      sidebarMini: sidebarMini,
      onSidebarMiniChange: sidebarMini => this.setState({
        sidebarMini
      }),
      onClickOutside: () => this.setState({
        sidebarOpened: false
      })
    }), React.createElement(Main, {
      sidebarCollapse: small || sidebarCollapse,
      sidebarMini: sidebarMini,
      rightSidebarCollapse: small || rightSidebarCollapse
    }, React.createElement(Toolbar, null), React.createElement("div", null, children)), React.createElement(RightSidebar, {
      rightSidebarCollapse: small || rightSidebarCollapse,
      sideBarTabs: sideBarTabs
    })));
  }

}

_defineProperty(Layout, "defaultProps", {
  initialCollapse: false,
  initialMini: false,
  initialRightSidebarCollapse: false
});