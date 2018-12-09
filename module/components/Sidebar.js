function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { NavItemMaximized } from './NavItemMaximized';
import { NavItemMinimized } from './NavItemMinimized';
import ClickOutside from "react-click-outside";
import CaretLeft from "./icons/CaretLeft";
import CaretSquareLeft from "./icons/CaretSquareLeft";
const Sidebar = styled.div.withConfig({
  displayName: "Sidebar",
  componentId: "wu4c6y-0"
})(["position:fixed;display:flex;flex-direction:column;padding:", ";color:", ";background:", ";height:calc(100vh - ", ");transition:transform 0.25s;transform:", ";"], props => [props["sidebar-padding"], (props.theme || {})["sidebar-padding"], `0`].filter(v => v !== void 0)[0], props => [props["sidebar-color"], (props.theme || {})["sidebar-color"], [props["white"], (props.theme || {})["white"], `#fff`].filter(v => v !== void 0)[0]].filter(v => v !== void 0)[0], props => [props["sidebar-bg"], (props.theme || {})["sidebar-bg"], [props["gray-800"], (props.theme || {})["gray-800"], `#3c4450`].filter(v => v !== void 0)[0]].filter(v => v !== void 0)[0], props => [props["navbar-height"], (props.theme || {})["navbar-height"], `55px`].filter(v => v !== void 0)[0], props => !![props["sidebarCollapse"], (props.theme || {})["sidebarCollapse"]].filter(v => v !== void 0)[0] ? `translateX(${parseFloat(-1) * parseFloat([props["sidebar-width"], (props.theme || {})["sidebar-width"], `200px`].filter(v => v !== void 0)[0]) + (('' + -1).replace(/[\d.-]*/, "") || ('' + [props["sidebar-width"], (props.theme || {})["sidebar-width"], `200px`].filter(v => v !== void 0)[0]).replace(/[\d.-]*/, ""))})` : undefined);
const SidebarContainer = styled.div.withConfig({
  displayName: "Sidebar__SidebarContainer",
  componentId: "wu4c6y-1"
})(["height:100%;flex:1 1;overflow-y:", ";"], props => !![props["sidebarMini"], (props.theme || {})["sidebarMini"]].filter(v => v !== void 0)[0] ? `visible` : `auto`);
const Nav = styled.ul.withConfig({
  displayName: "Sidebar__Nav",
  componentId: "wu4c6y-2"
})(["display:flex;width:", ";flex-direction:column;padding:0;list-style:none;margin:0;transition:max-height 0.3s ease-in-out,width 0.25s;overflow-y:", ";"], props => !![props["sidebarMini"], (props.theme || {})["sidebarMini"]].filter(v => v !== void 0)[0] ? [props["sidebar-minimized-width"], (props.theme || {})["sidebar-minimized-width"], `50px`].filter(v => v !== void 0)[0] : [props["sidebar-width"], (props.theme || {})["sidebar-width"], `200px`].filter(v => v !== void 0)[0], props => !![props["sidebarMini"], (props.theme || {})["sidebarMini"]].filter(v => v !== void 0)[0] ? `visible` : `hidden`);
const SubNav = styled(Nav).withConfig({
  displayName: "Sidebar__SubNav",
  componentId: "wu4c6y-3"
})(["min-height:0;max-height:0;"]);
const NavTitle = styled.li.withConfig({
  displayName: "Sidebar__NavTitle",
  componentId: "wu4c6y-4"
})(["padding:0.75rem 1rem;font-size:80%;font-weight:700;color:", ";text-transform:uppercase;overflow:hidden;"], props => [props["sidebar-nav-title-color"], (props.theme || {})["sidebar-nav-title-color"], [props["gray-200"], (props.theme || {})["gray-200"], `#e9ebef`].filter(v => v !== void 0)[0]].filter(v => v !== void 0)[0]);
const SidebarMinimizer = styled.button.withConfig({
  displayName: "Sidebar__SidebarMinimizer",
  componentId: "wu4c6y-5"
})(["position:relative;flex:0 0 50px;cursor:pointer;background-color:", ";border:0;color:", ";overflow:hidden;transition:all 0.1s ease-in-out;text-align:right;svg{width:50px;height:20px;transition:transform 0.3s ease-in-out;transform:", ";}&:focus{outline:0;}&:hover{background-color:", ";color:", ";}"], props => require("tinycolor2")({
  r: `0`,
  g: `0`,
  b: `0`,
  a: `0.2`
}).toHex8String(), props => [props["sidebar-bg"], (props.theme || {})["sidebar-bg"], [props["gray-800"], (props.theme || {})["gray-800"], `#3c4450`].filter(v => v !== void 0)[0]].filter(v => v !== void 0)[0], props => !![props["sidebarMini"], (props.theme || {})["sidebarMini"]].filter(v => v !== void 0)[0] ? `rotate(-180deg)` : undefined, props => require("tinycolor2")({
  r: `0`,
  g: `0`,
  b: `0`,
  a: `0.3`
}).toHex8String(), props => [props["gray-500"], (props.theme || {})["gray-500"], `#a0a9b8`].filter(v => v !== void 0)[0]);

class Menu extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      indexOpened: undefined
    });
  }

  isActive(selected, href) {
    return selected === href;
  }

  render() {
    const {
      children,
      sidebarMini,
      selected
    } = this.props;
    const {
      indexOpened
    } = this.state;
    const NavItem = sidebarMini ? NavItemMinimized : NavItemMaximized;
    return children.filter(m => !!m).map(({
      title,
      href,
      icon,
      children
    }, i) => {
      if (href || children) {
        let open = indexOpened === i;

        if (Array.isArray(children) && children.filter(m => !!m).some(c => this.isActive(selected, c.href))) {
          open = true;
        }

        return React.createElement(NavItem, {
          key: i,
          active: this.isActive(selected, href),
          count: children && children.length,
          open: children && open
        }, React.createElement("a", {
          href: href,
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
          selected: selected
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
      onSidebarMiniChange
    } = this.props;
    return React.createElement(Sidebar, {
      sidebarCollapse: sidebarCollapse
    }, React.createElement(SidebarContainer, {
      sidebarMini: sidebarMini
    }, React.createElement(Nav, {
      sidebarMini: sidebarMini
    }, React.createElement(Menu, {
      sidebarMini: sidebarMini,
      selected: selected
    }, sideMenu))), React.createElement(SidebarMinimizer, {
      sidebarMini: sidebarMini,
      onClick: () => onSidebarMiniChange(!sidebarMini)
    }, React.createElement(CaretSquareLeft, null)));
  }

}

export default ClickOutside(Inner);