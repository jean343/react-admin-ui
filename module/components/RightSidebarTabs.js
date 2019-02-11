function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Icon from './Icon';
const NavTabs = styled.ul.withConfig({
  displayName: "RightSidebarTabs__NavTabs",
  componentId: "lqc9c0-0"
})(["border-bottom:", " solid ", ";display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none;margin-top:0;"], props => [props["border-width"], (props.theme || {})["border-width"], `1px`].filter(v => v !== void 0)[0], props => [props["border-color"], (props.theme || {})["border-color"], [props["gray-300"], (props.theme || {})["gray-300"], `#dadee4`].filter(v => v !== void 0)[0]].filter(v => v !== void 0)[0]);
const NavItem = styled.li.withConfig({
  displayName: "RightSidebarTabs__NavItem",
  componentId: "lqc9c0-1"
})(["margin-bottom:-1px;list-style:none;&& a{cursor:pointer;padding:12px 1rem;height:", ";color:", " !important;display:block;background-color:#fff;border-right:", " solid ", ";border-bottom:", ";transition:background-color 0.1s ease-in-out;}&& a:hover{background-color:", ";}"], props => [props["sub-navbar-height"], (props.theme || {})["sub-navbar-height"], `40px`].filter(v => v !== void 0)[0], props => !![props["active"], (props.theme || {})["active"]].filter(v => v !== void 0)[0] ? [props["primary"], (props.theme || {})["primary"], [props["blue"], (props.theme || {})["blue"], `#20a8d8`].filter(v => v !== void 0)[0]].filter(v => v !== void 0)[0] : [props["body-color"], (props.theme || {})["body-color"], [props["gray-900"], (props.theme || {})["gray-900"], `#313742`].filter(v => v !== void 0)[0]].filter(v => v !== void 0)[0], props => [props["border-width"], (props.theme || {})["border-width"], `1px`].filter(v => v !== void 0)[0], props => [props["border-color"], (props.theme || {})["border-color"], [props["gray-300"], (props.theme || {})["gray-300"], `#dadee4`].filter(v => v !== void 0)[0]].filter(v => v !== void 0)[0], props => !![props["active"], (props.theme || {})["active"]].filter(v => v !== void 0)[0] ? `${[props["border-width"], (props.theme || {})["border-width"], `1px`].filter(v => v !== void 0)[0]} solid #fff` : `${[props["border-width"], (props.theme || {})["border-width"], `1px`].filter(v => v !== void 0)[0]} solid ${[props["border-color"], (props.theme || {})["border-color"], [props["gray-300"], (props.theme || {})["gray-300"], `#dadee4`].filter(v => v !== void 0)[0]].filter(v => v !== void 0)[0]}`, props => [props["gray-100"], (props.theme || {})["gray-100"], `#f8f8fa`].filter(v => v !== void 0)[0]);
const TabContent = styled.div.withConfig({
  displayName: "RightSidebarTabs__TabContent",
  componentId: "lqc9c0-2"
})(["position:relative;overflow-x:hidden;overflow-y:auto;border:0;height:calc(100vh - ", " - ", ");padding:1rem;&::-webkit-scrollbar{width:10px;margin-left:-10px;appearance:none;}&::-webkit-scrollbar-thumb{background-color:", ";background-clip:content-box;border-color:transparent;border-style:solid;border-width:1px 2px;border-radius:4px;}"], props => [props["sub-navbar-height"], (props.theme || {})["sub-navbar-height"], `40px`].filter(v => v !== void 0)[0], props => [props["navbar-height"], (props.theme || {})["navbar-height"], `55px`].filter(v => v !== void 0)[0], props => require('tinycolor2')([props["aside-menu-bg"], (props.theme || {})["aside-menu-bg"], [props["white"], (props.theme || {})["white"], `#fff`].filter(v => v !== void 0)[0]].filter(v => v !== void 0)[0]).darken(parseFloat(`14%`)).toHex8String());
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
    return React.createElement(React.Fragment, null, React.createElement(NavTabs, null, sideBarTabs.filter(m => !!m).map(({
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
      }, React.createElement(Icon, {
        icon: icon
      })));
    })), React.createElement(TabContent, null, sideBarTabs[selectedTab].component));
  }

}