function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { NavItemMaximized } from './NavItemMaximized';
import { NavItemMinimized } from './NavItemMinimized';
import ClickOutside from "react-click-outside";
const Sidebar = styled.div`position: fixed;
display: flex;
flex-direction: column;
padding: ${props => [props["sidebar-padding"], (props.theme || {})["sidebar-padding"]].filter(v => v !== void 0)[0]};
color: ${props => [props["sidebar-color"], (props.theme || {})["sidebar-color"]].filter(v => v !== void 0)[0]};
background: ${props => [props["sidebar-bg"], (props.theme || {})["sidebar-bg"]].filter(v => v !== void 0)[0]};
height: calc(100vh - ${props => [props["navbar-height"], (props.theme || {})["navbar-height"]].filter(v => v !== void 0)[0]});
transition: transform 0.25s;
${props => props.sidebarCollapse && css`transform: translateX(${props => "-" + [props["sidebar-width"], (props.theme || {})["sidebar-width"]].filter(v => v !== void 0)[0]});`}`;
const SidebarContainer = styled.div`height: 100%;
flex: 1 1;
overflow-y: ${props => !![props["sidebarMini"], (props.theme || {})["sidebarMini"]].filter(v => v !== void 0)[0] ? `visible` : `auto`};`;
const Nav = styled.ul`display: flex;
width: ${props => !![props["sidebarMini"], (props.theme || {})["sidebarMini"]].filter(v => v !== void 0)[0] ? [props["sidebar-minimized-width"], (props.theme || {})["sidebar-minimized-width"]].filter(v => v !== void 0)[0] : [props["sidebar-width"], (props.theme || {})["sidebar-width"]].filter(v => v !== void 0)[0]};
flex-direction: column;
padding: 0;
list-style: none;
margin: 0;
transition: max-height 0.3s ease-in-out, width 0.25s;
overflow-y: ${props => !![props["sidebarMini"], (props.theme || {})["sidebarMini"]].filter(v => v !== void 0)[0] ? `visible` : `hidden`};`;
const SubNav = styled(Nav)`min-height: 0;
max-height: 0;`;
const NavTitle = styled.li`padding: 0.75rem 1rem;
font-size: 80%;
font-weight: 700;
color: ${props => [props["sidebar-nav-title-color"], (props.theme || {})["sidebar-nav-title-color"]].filter(v => v !== void 0)[0]};
text-transform: uppercase;
overflow: hidden;`;
const SidebarMinimizer = styled.button`position: relative;
flex: 0 0 50px;
cursor: pointer;
background-color: ${props => require("tinycolor2")({
  r: `0`,
  g: `0`,
  b: `0`,
  a: `0.2`
}).toHex8String()};
border: 0;
color: ${props => [props["sidebar-bg"], (props.theme || {})["sidebar-bg"]].filter(v => v !== void 0)[0]};
overflow: hidden;
transition: all 0.1s ease-in-out;
i {
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  line-height: 50px;
  transition: transform 0.3s ease-in-out;
  transform: ${props => !![props["sidebarMini"], (props.theme || {})["sidebarMini"]].filter(v => v !== void 0)[0] ? `rotate(-180deg)` : undefined};
}
&:focus {
  outline: 0;
}
&:hover {
  background-color: ${props => require("tinycolor2")({
  r: `0`,
  g: `0`,
  b: `0`,
  a: `0.3`
}).toHex8String()};
  color: ${props => [props["gray-500"], (props.theme || {})["gray-500"]].filter(v => v !== void 0)[0]};
}`;

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
    return children.map(({
      title,
      href,
      icon,
      children
    }, i) => {
      if (href || children) {
        let open = indexOpened === i;

        if (Array.isArray(children) && children.some(c => this.isActive(selected, c.href))) {
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
        }), React.createElement("span", null, title), !sidebarMini && children && React.createElement("i", {
          className: "fa caret fa-caret-left"
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
    }, React.createElement("i", {
      className: "fa fa-caret-square-o-left"
    })));
  }

}

export default ClickOutside(Inner);