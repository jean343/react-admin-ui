import React, { Component } from 'react';
import styled from 'styled-components';
import Bars from './icons/Bars';
import { isSelected } from './utils';
const Header = styled.header.withConfig({
  displayName: "Header",
  componentId: "sc-1ahrfh-0"
})(["flex-direction:row;height:", ";padding:0;margin:0;background-color:", ";position:fixed;z-index:", ";width:100%;text-align:center;border-bottom:1px solid ", ";display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;"], props => [props["navbar-height"], (props.theme || {})["navbar-height"], `55px`].filter(v => v !== void 0)[0], props => [props["navbar-bg"], (props.theme || {})["navbar-bg"], [props["white"], (props.theme || {})["white"], `#fff`].filter(v => v !== void 0)[0]].filter(v => v !== void 0)[0], props => [props["zindex-sticky"], (props.theme || {})["zindex-sticky"], `1020`].filter(v => v !== void 0)[0], props => [props["gray-300"], (props.theme || {})["gray-300"], `#dadee4`].filter(v => v !== void 0)[0]);
const NavbarToggler = styled.button.withConfig({
  displayName: "Header__NavbarToggler",
  componentId: "sc-1ahrfh-1"
})(["cursor:pointer;padding:0;width:50px;height:", ";background-color:transparent;border:", " solid transparent;border-radius:4px;color:", ";font-size:0;:hover{color:", ";}"], props => [props["navbar-height"], (props.theme || {})["navbar-height"], `55px`].filter(v => v !== void 0)[0], props => [props["border-width"], (props.theme || {})["border-width"], `1px`].filter(v => v !== void 0)[0], props => [props["gray-300"], (props.theme || {})["gray-300"], `#dadee4`].filter(v => v !== void 0)[0], props => [props["gray-900"], (props.theme || {})["gray-900"], `#313742`].filter(v => v !== void 0)[0]);
const NavbarBrand = styled.div.withConfig({
  displayName: "Header__NavbarBrand",
  componentId: "sc-1ahrfh-2"
})(["display:inline-flex;align-items:center;justify-content:center;width:", ";height:", ";padding:0;margin-right:0;background-color:", ";@media (max-width:", "){display:none;}"], props => parseFloat([props["sidebar-width"], (props.theme || {})["sidebar-width"], `200px`].filter(v => v !== void 0)[0]) - parseFloat(50) + "px", props => [props["navbar-height"], (props.theme || {})["navbar-height"], `55px`].filter(v => v !== void 0)[0], props => [props["navbar-brand-bg"], (props.theme || {})["navbar-brand-bg"], `transparent`].filter(v => v !== void 0)[0], props => [props["sm"], (props.theme || {})["sm"], `576px`].filter(v => v !== void 0)[0]);
const NavbarNav = styled.ul.withConfig({
  displayName: "Header__NavbarNav",
  componentId: "sc-1ahrfh-3"
})(["flex-direction:row;align-items:center;display:flex;padding-left:0;margin-bottom:0;list-style:none;margin-top:0;"]);
const NavItem = styled.li.withConfig({
  displayName: "Header__NavItem",
  componentId: "sc-1ahrfh-4"
})(["cursor:pointer;position:relative;margin:0;text-align:center;padding-left:1rem;padding-right:1rem;height:", ";:hover{background-color:", ";}&& a{display:flex;height:", ";transition:color 0.1s ease-in-out;color:", " !important;align-items:center;}&& a:hover{text-decoration:none;}span{margin-left:0.5rem;}@media (max-width:", "){span{display:none;}i{font-size:1.1em;}}transition:border 0.1s ease-in-out;border-bottom:3px solid transparent;border-bottom-color:", ";"], props => [props["navbar-height"], (props.theme || {})["navbar-height"], `55px`].filter(v => v !== void 0)[0], props => [props["gray-200"], (props.theme || {})["gray-200"], `#e9ebef`].filter(v => v !== void 0)[0], props => parseFloat([props["navbar-height"], (props.theme || {})["navbar-height"], `55px`].filter(v => v !== void 0)[0]) - parseFloat(1) + (('' + [props["navbar-height"], (props.theme || {})["navbar-height"], `55px`].filter(v => v !== void 0)[0]).replace(/[\d.-]*/, "") || ('' + 1).replace(/[\d.-]*/, "")), props => !![props["active"], (props.theme || {})["active"]].filter(v => v !== void 0)[0] ? [props["primary"], (props.theme || {})["primary"], [props["blue"], (props.theme || {})["blue"], `#20a8d8`].filter(v => v !== void 0)[0]].filter(v => v !== void 0)[0] : [props["navbar-color"], (props.theme || {})["navbar-color"], [props["gray-600"], (props.theme || {})["gray-600"], `#838fa2`].filter(v => v !== void 0)[0]].filter(v => v !== void 0)[0], props => [props["sm"], (props.theme || {})["sm"], `576px`].filter(v => v !== void 0)[0], props => !![props["active"], (props.theme || {})["active"]].filter(v => v !== void 0)[0] ? [props["primary"], (props.theme || {})["primary"], [props["blue"], (props.theme || {})["blue"], `#20a8d8`].filter(v => v !== void 0)[0]].filter(v => v !== void 0)[0] : undefined);
export default class extends Component {
  render() {
    const {
      lg,
      topMenu,
      onNavbarToggle,
      onRightNavbarToggle,
      selected,
      logo,
      Link
    } = this.props;
    return React.createElement(Header, null, React.createElement(Link, {
      href: "/",
      to: "/"
    }, React.createElement(NavbarBrand, null, logo)), React.createElement(NavbarToggler, {
      onClick: onNavbarToggle
    }, React.createElement(Bars, {
      width: 14
    })), React.createElement(NavbarNav, null, topMenu.filter(m => !!m).map(({
      title,
      href,
      to,
      icon
    }, i) => {
      return React.createElement(NavItem, {
        key: i,
        active: isSelected(selected, href, to)
      }, React.createElement(Link, {
        href: href,
        to: to
      }, React.createElement("i", {
        className: icon
      }), React.createElement("span", null, title)));
    })), React.createElement("div", {
      style: {
        flex: 1
      }
    }), !lg && React.createElement(NavbarToggler, {
      onClick: onRightNavbarToggle
    }, React.createElement(Bars, {
      width: 14
    })));
  }

}