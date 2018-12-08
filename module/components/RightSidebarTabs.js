function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import styled, { css } from 'styled-components';
const NavTabs = styled.ul`border-bottom: 1px solid ${props => [props["border-color"], (props.theme || {})["border-color"]].filter(v => v !== void 0)[0]};
display: flex;
flex-wrap: wrap;
padding-left: 0;
margin-bottom: 0;
list-style: none;
margin-top: 0;`;
const NavItem = styled.li`margin-bottom: -1px;
list-style: none;
&& a {
  cursor: pointer;
  padding: 12px 1rem;
  height: ${props => [props["sub-navbar-height"], (props.theme || {})["sub-navbar-height"]].filter(v => v !== void 0)[0]};
  color: ${props => !![props["active"], (props.theme || {})["active"]].filter(v => v !== void 0)[0] ? [props["primary"], (props.theme || {})["primary"]].filter(v => v !== void 0)[0] : [props["body-color"], (props.theme || {})["body-color"]].filter(v => v !== void 0)[0]} !important;
  display: block;
  background-color: #fff;
  border-right: 1px solid ${props => [props["gray-300"], (props.theme || {})["gray-300"]].filter(v => v !== void 0)[0]};
  border-bottom: ${props => !![props["active"], (props.theme || {})["active"]].filter(v => v !== void 0)[0] ? `1px solid #fff` : `1px solid ${[props["border-color"], (props.theme || {})["border-color"]].filter(v => v !== void 0)[0]}`};
  transition: background-color 0.1s ease-in-out;
}
&& a :hover {
  background-color: ${props => [props["gray-100"], (props.theme || {})["gray-100"]].filter(v => v !== void 0)[0]};
}`;
const TabContent = styled.div`position: relative;
overflow-x: hidden;
overflow-y: auto;
border: 0;
height: calc(100vh - ${props => [props["sub-navbar-height"], (props.theme || {})["sub-navbar-height"]].filter(v => v !== void 0)[0]} - ${props => [props["navbar-height"], (props.theme || {})["navbar-height"]].filter(v => v !== void 0)[0]});
padding: 1rem;
&::-webkit-scrollbar {
  width: 10px;
  margin-left: -10px;
  appearance: none;
}
&::-webkit-scrollbar-track {
  background-color: ${props => require('tinycolor2')([props["aside-menu-bg"], (props.theme || {})["aside-menu-bg"]].filter(v => v !== void 0)[0]).lighten(parseFloat(`5%`)).toHex8String()};
  border-right: 1px solid ${props => require('tinycolor2')([props["aside-menu-bg"], (props.theme || {})["aside-menu-bg"]].filter(v => v !== void 0)[0]).darken(parseFloat(`5%`)).toHex8String()};
  border-left: 1px solid ${props => require('tinycolor2')([props["aside-menu-bg"], (props.theme || {})["aside-menu-bg"]].filter(v => v !== void 0)[0]).darken(parseFloat(`5%`)).toHex8String()};
}
&::-webkit-scrollbar-thumb {
  height: 50px;
  background-color: ${props => require('tinycolor2')([props["aside-menu-bg"], (props.theme || {})["aside-menu-bg"]].filter(v => v !== void 0)[0]).darken(parseFloat(`10%`)).toHex8String()};
  background-clip: content-box;
  border-color: transparent;
  border-style: solid;
  border-width: 1px 2px;
}`;
export default class extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      selectedTab: 1
    });
  }

  render() {
    const {
      sideBarTabs
    } = this.props;
    const {
      selectedTab
    } = this.state;
    return React.createElement(React.Fragment, null, React.createElement(NavTabs, null, sideBarTabs.map(({
      title,
      icon
    }, i) => {
      return React.createElement(NavItem, {
        key: i,
        active: selectedTab === i
      }, React.createElement("a", {
        title: title,
        onClick: () => this.setState({
          selectedTab: i
        })
      }, React.createElement("i", {
        className: icon
      })));
    })), React.createElement(TabContent, null, sideBarTabs[selectedTab].component));
  }

}