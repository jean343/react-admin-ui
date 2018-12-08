import React, { Component } from 'react';
import styled from 'styled-components';
const Header = styled.header`flex-direction: row;
height: ${props => [props["navbar-height"], (props.theme || {})["navbar-height"]].filter(v => v !== void 0)[0]};
padding: 0;
margin: 0;
background-color: ${props => [props["navbar-bg"], (props.theme || {})["navbar-bg"]].filter(v => v !== void 0)[0]};
position: fixed;
z-index: ${props => [props["zindex-sticky"], (props.theme || {})["zindex-sticky"]].filter(v => v !== void 0)[0]};
width: 100%;
text-align: center;
border-bottom: 1px solid ${props => [props["gray-300"], (props.theme || {})["gray-300"]].filter(v => v !== void 0)[0]};
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;`;
const NavbarToggler = styled.button`cursor: pointer;
padding: 0;
width: 50px;
height: ${props => [props["navbar-height"], (props.theme || {})["navbar-height"]].filter(v => v !== void 0)[0]};
background-color: transparent;
border: ${props => [props["border-width"], (props.theme || {})["border-width"]].filter(v => v !== void 0)[0]} solid transparent;
border-radius: 4px;
color: ${props => [props["gray-300"], (props.theme || {})["gray-300"]].filter(v => v !== void 0)[0]};
font-size: 1.2em;
:hover {
  color: ${props => [props["gray-900"], (props.theme || {})["gray-900"]].filter(v => v !== void 0)[0]};
}`;
const NavbarBrand = styled.a`display: inline-flex;
align-items: center;
justify-content: center;
width: ${props => parseFloat([props["sidebar-width"], (props.theme || {})["sidebar-width"]].filter(v => v !== void 0)[0]) - parseFloat(50) + "px"};
height: ${props => [props["navbar-height"], (props.theme || {})["navbar-height"]].filter(v => v !== void 0)[0]};
padding: 0;
margin-right: 0;
background-color: ${props => [props["navbar-brand-bg"], (props.theme || {})["navbar-brand-bg"]].filter(v => v !== void 0)[0]};
@media (max-width: ${props => [props["sm"], (props.theme || {})["sm"]].filter(v => v !== void 0)[0]}) {
  display: none;
}`;
const NavbarNav = styled.ul`flex-direction: row;
align-items: center;
display: flex;
padding-left: 0;
margin-bottom: 0;
list-style: none;
margin-top: 0;`;
const NavItem = styled.li`cursor: pointer;
position: relative;
margin: 0;
text-align: center;
padding-left: 1rem;
padding-right: 1rem;
transition: background-color 0.1s ease-in-out;
background-color: ${props => !![props["active"], (props.theme || {})["active"]].filter(v => v !== void 0)[0] ? [props["gray-100"], (props.theme || {})["gray-100"]].filter(v => v !== void 0)[0] : undefined};
:hover {
  background-color: ${props => [props["gray-200"], (props.theme || {})["gray-200"]].filter(v => v !== void 0)[0]};
}
&& a {
  display: flex;
  height: ${props => parseFloat([props["navbar-height"], (props.theme || {})["navbar-height"]].filter(v => v !== void 0)[0]) - parseFloat(1) + (('' + [props["navbar-height"], (props.theme || {})["navbar-height"]].filter(v => v !== void 0)[0]).replace(/[\d.-]*/, "") || ('' + 1).replace(/[\d.-]*/, ""))};
  color: ${props => !![props["active"], (props.theme || {})["active"]].filter(v => v !== void 0)[0] ? [props["primary"], (props.theme || {})["primary"]].filter(v => v !== void 0)[0] : [props["navbar-color"], (props.theme || {})["navbar-color"]].filter(v => v !== void 0)[0]} !important;
  align-items: center;
}
&& a :hover {
  text-decoration: none;
}
span {
  margin-left: 0.5rem;
}
@media (max-width: ${props => [props["sm"], (props.theme || {})["sm"]].filter(v => v !== void 0)[0]}) {
  span {
    display: none;
  }
  i {
    font-size: 1.1em;
  }
}`;
export default class extends Component {
  render() {
    const {
      small,
      topMenu,
      onNavbarToggle,
      onRightNavbarToggle,
      selected,
      logo
    } = this.props;
    return React.createElement(Header, null, React.createElement(NavbarBrand, null, logo), React.createElement(NavbarToggler, {
      onClick: onNavbarToggle
    }, React.createElement("i", {
      className: "fas fa-bars"
    })), React.createElement(NavbarNav, null, topMenu.map(({
      title,
      href,
      icon
    }, i) => {
      return React.createElement(NavItem, {
        key: i,
        active: selected === href
      }, React.createElement("a", {
        href: href
      }, React.createElement("i", {
        className: icon
      }), React.createElement("span", null, title)));
    })), React.createElement("div", {
      style: {
        flex: 1
      }
    }), !small && React.createElement(NavbarToggler, {
      onClick: onRightNavbarToggle
    }, React.createElement("i", {
      className: "fas fa-bars"
    })));
  }

}