function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { NavItemMaximized } from './NavItemMaximized';
import { NavItemMinimized } from './NavItemMinimized';
import ClickOutside from "react-click-outside";
import CaretLeft from "./icons/CaretLeft";
import CaretSquareLeft from "./icons/CaretSquareLeft";
import { isSelected, triggerResize } from './utils';
const Sidebar = styled.div.withConfig({
  displayName: "Sidebar",
  componentId: "wu4c6y-0"
})(["@media print{display:none;}position:fixed;display:flex;flex-direction:column;color:", ";background:", ";height:calc(100vh - ", ");z-index:1;transition:transform 0.25s;transform:", ";"], props => [props["sidebar-color"], (props.theme || {})["sidebar-color"], [props["white"], (props.theme || {})["white"], `#fff`].filter(v => v !== void 0)[0]].filter(v => v !== void 0)[0], props => [props["sidebar-bg"], (props.theme || {})["sidebar-bg"], [props["gray-900"], (props.theme || {})["gray-900"], `#313742`].filter(v => v !== void 0)[0]].filter(v => v !== void 0)[0], props => [props["navbar-height"], (props.theme || {})["navbar-height"], `55px`].filter(v => v !== void 0)[0], props => !![props["sidebarCollapse"], (props.theme || {})["sidebarCollapse"]].filter(v => v !== void 0)[0] ? `translateX(${parseFloat(-1) * parseFloat([props["sidebar-width"], (props.theme || {})["sidebar-width"], `200px`].filter(v => v !== void 0)[0]) + (('' + -1).replace(/[\d.-]*/, "") || ('' + [props["sidebar-width"], (props.theme || {})["sidebar-width"], `200px`].filter(v => v !== void 0)[0]).replace(/[\d.-]*/, ""))})` : undefined);
const SidebarContainer = styled.div.withConfig({
  displayName: "Sidebar__SidebarContainer",
  componentId: "wu4c6y-1"
})(["height:100%;flex:1 1;overflow-y:", ";transition:width 0.25s;width:", ";&::-webkit-scrollbar{width:10px;margin-left:-10px;appearance:none;}&::-webkit-scrollbar-thumb{background-color:", ";background-clip:content-box;border-color:transparent;border-style:solid;border-width:1px 2px;border-radius:4px;}"], props => !![props["sidebarMini"], (props.theme || {})["sidebarMini"]].filter(v => v !== void 0)[0] ? `visible` : `auto`, props => !![props["sidebarMini"], (props.theme || {})["sidebarMini"]].filter(v => v !== void 0)[0] ? [props["sidebar-minimized-width"], (props.theme || {})["sidebar-minimized-width"], `50px`].filter(v => v !== void 0)[0] : [props["sidebar-width"], (props.theme || {})["sidebar-width"], `200px`].filter(v => v !== void 0)[0], props => require('tinycolor2')([props["sidebar-bg"], (props.theme || {})["sidebar-bg"], [props["gray-900"], (props.theme || {})["gray-900"], `#313742`].filter(v => v !== void 0)[0]].filter(v => v !== void 0)[0]).lighten(parseFloat(`15%`)).toHex8String());
const Nav = styled.ul.withConfig({
  displayName: "Sidebar__Nav",
  componentId: "wu4c6y-2"
})(["display:flex;flex-direction:column;padding:0;list-style:none;margin:0;transition:max-height 0.3s ease-in-out;overflow-y:", ";"], props => !![props["sidebarMini"], (props.theme || {})["sidebarMini"]].filter(v => v !== void 0)[0] ? `visible` : `hidden`);
const SubNav = styled(Nav).withConfig({
  displayName: "Sidebar__SubNav",
  componentId: "wu4c6y-3"
})(["width:", ";min-height:0;max-height:0;border-left:", " solid ", ";a{padding:0 calc(1rem - 3px);}"], props => [props["sidebar-width"], (props.theme || {})["sidebar-width"], `200px`].filter(v => v !== void 0)[0], props => [props["border-width"], (props.theme || {})["border-width"], `1px`].filter(v => v !== void 0)[0], props => require("tinycolor2")({
  r: `255`,
  g: `255`,
  b: `255`,
  a: `0.2`
}).toHex8String());
const NavTitle = styled.li.withConfig({
  displayName: "Sidebar__NavTitle",
  componentId: "wu4c6y-4"
})(["padding:0.75rem 1rem;font-size:80%;font-weight:700;color:", ";text-transform:uppercase;overflow:hidden;"], props => [props["sidebar-nav-title-color"], (props.theme || {})["sidebar-nav-title-color"], [props["gray-200"], (props.theme || {})["gray-200"], `#e9ebef`].filter(v => v !== void 0)[0]].filter(v => v !== void 0)[0]);
const SidebarMinimizer = styled.button.withConfig({
  displayName: "Sidebar__SidebarMinimizer",
  componentId: "wu4c6y-5"
})(["position:relative;flex:0 0 50px;cursor:pointer;background-color:", ";border:0;color:", ";overflow:hidden;transition:all 0.1s ease-in-out;text-align:right;padding:0;svg{width:", ";height:20px;transition:transform 0.3s ease-in-out;transform:", ";}&:focus{outline:0;}&:hover{background-color:", ";color:", ";}"], props => require("tinycolor2")({
  r: `0`,
  g: `0`,
  b: `0`,
  a: `0.2`
}).toHex8String(), props => [props["sidebar-bg"], (props.theme || {})["sidebar-bg"], [props["gray-900"], (props.theme || {})["gray-900"], `#313742`].filter(v => v !== void 0)[0]].filter(v => v !== void 0)[0], props => [props["sidebar-minimized-width"], (props.theme || {})["sidebar-minimized-width"], `50px`].filter(v => v !== void 0)[0], props => !![props["sidebarMini"], (props.theme || {})["sidebarMini"]].filter(v => v !== void 0)[0] ? `rotate(-180deg)` : undefined, props => require("tinycolor2")({
  r: `0`,
  g: `0`,
  b: `0`,
  a: `0.3`
}).toHex8String(), props => [props["gray-500"], (props.theme || {})["gray-500"], `#a0a9b8`].filter(v => v !== void 0)[0]);
const SideBarHeader = styled.div.withConfig({
  displayName: "Sidebar__SideBarHeader",
  componentId: "wu4c6y-6"
})(["height:", ";padding:0.5rem 1rem;border-bottom:", " solid ", ";"], props => [props["sub-navbar-height"], (props.theme || {})["sub-navbar-height"], `40px`].filter(v => v !== void 0)[0], props => [props["border-width"], (props.theme || {})["border-width"], `1px`].filter(v => v !== void 0)[0], props => require("tinycolor2")({
  r: `255`,
  g: `255`,
  b: `255`,
  a: `0.2`
}).toHex8String());

class Menu extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      indexOpened: undefined
    });
  }

  render() {
    const {
      children,
      sidebarMini,
      selected,
      Link
    } = this.props;
    const {
      indexOpened
    } = this.state;
    const NavItem = sidebarMini ? NavItemMinimized : NavItemMaximized;
    return children.filter(m => !!m).map(({
      title,
      href,
      to,
      icon,
      children
    }, i) => {
      if (href || to || children) {
        let open = indexOpened === i;

        if (Array.isArray(children) && children.filter(m => !!m).some(c => isSelected(selected, c.href, c.to))) {
          open = true;
        }

        return React.createElement(NavItem, {
          key: i,
          active: isSelected(selected, href, to),
          count: children && children.length,
          open: children && open,
          hasChild: !!children
        }, React.createElement(Link, {
          href: href,
          to: to,
          onClick: () => this.setState({
            indexOpened: open ? undefined : i
          })
        }, React.createElement("i", {
          className: icon
        }), React.createElement("span", null, title), !sidebarMini && children && React.createElement(CaretLeft, {
          className: "caret-left-icon",
          width: 6
        })), children && React.createElement(SubNav, {
          className: "sub-nav"
        }, React.createElement(Menu, {
          selected: selected,
          Link: Link
        }, children)));
      } else {
        if (sidebarMini) return null;
        return React.createElement(NavTitle, {
          key: i
        }, React.createElement("i", {
          className: icon
        }), title);
      }
    });
  }

}

class Inner extends Component {
  handleClickOutside() {
    this.props.onClickOutside && this.props.onClickOutside();
  }

  render() {
    const {
      sideMenu,
      selected,
      sidebarCollapse,
      sidebarMini,
      onSidebarMiniChange,
      Link,
      sideBarHeader,
      lg
    } = this.props;
    return React.createElement(Sidebar, {
      sidebarCollapse: sidebarCollapse,
      onTransitionEnd: triggerResize
    }, React.createElement(SidebarContainer, {
      sidebarMini: sidebarMini
    }, React.createElement(Nav, {
      sidebarMini: sidebarMini
    }, sideBarHeader && !sidebarMini && React.createElement(SideBarHeader, null, sideBarHeader), React.createElement(Menu, {
      sidebarMini: sidebarMini,
      selected: selected,
      Link: Link
    }, sideMenu))), !lg && React.createElement(SidebarMinimizer, {
      sidebarMini: sidebarMini,
      onClick: () => onSidebarMiniChange(!sidebarMini)
    }, React.createElement(CaretSquareLeft, null)));
  }

}

export default ClickOutside(Inner);