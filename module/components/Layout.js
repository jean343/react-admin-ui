function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import { Body, Main, Content } from './Body';
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
      lg: false,
      md: false,
      sidebarOpened: false,
      sidebarCollapse: this.props.initialCollapse,
      sidebarMini: this.props.initialMini,
      rightSidebarCollapse: this.props.initialRightSidebarCollapse
    });

    _defineProperty(this, "onNavbarToggle", () => {
      const {
        lg,
        sidebarOpened,
        sidebarCollapse
      } = this.state;

      if (lg) {
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
      logo,
      sideBarHeader,
      linkComponent = "a"
    } = this.props;
    const {
      lg,
      md,
      sidebarOpened,
      sidebarCollapse,
      rightSidebarCollapse,
      sidebarMini
    } = this.state;
    return React.createElement(App, null, React.createElement(Matchmedia, {
      query: "screen and (max-width: 991.98px)",
      onMatch: matches => this.setState({
        lg: matches
      })
    }), React.createElement(Matchmedia, {
      query: "screen and (max-width: 767.98px)",
      onMatch: matches => this.setState({
        md: matches,
        sidebarOpened: false
      })
    }), React.createElement(Header, {
      logo: logo,
      lg: lg,
      topMenu: topMenu,
      selected: selected,
      onNavbarToggle: this.onNavbarToggle,
      onRightNavbarToggle: () => this.setState({
        rightSidebarCollapse: !rightSidebarCollapse
      }),
      Link: linkComponent
    }), React.createElement(Body, null, React.createElement(Sidebar, {
      lg: lg,
      sideMenu: sideMenu,
      sideBarHeader: sideBarHeader,
      selected: selected,
      sidebarCollapse: !sidebarOpened && (md || sidebarCollapse),
      sidebarMini: !sidebarOpened && (lg || sidebarMini),
      onSidebarMiniChange: sidebarMini => this.setState({
        sidebarMini
      }),
      onClickOutside: () => sidebarOpened && setTimeout(() => this.setState({
        sidebarOpened: false
      }), 0),
      Link: linkComponent
    }), React.createElement(Main, {
      sidebarCollapse: md || sidebarCollapse,
      sidebarMini: lg || sidebarMini,
      rightSidebarCollapse: lg || rightSidebarCollapse
    }, React.createElement(Toolbar, null), React.createElement(Content, null, children)), React.createElement(RightSidebar, {
      rightSidebarCollapse: lg || rightSidebarCollapse,
      sideBarTabs: sideBarTabs
    })));
  }

}

_defineProperty(Layout, "defaultProps", {
  initialCollapse: false,
  initialMini: false,
  initialRightSidebarCollapse: true
});