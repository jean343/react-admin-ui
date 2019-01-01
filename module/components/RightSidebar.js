import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import RightSidebarTabs from './RightSidebarTabs';
import { triggerResize } from "./utils";
const Sidebar = styled.div.withConfig({
  displayName: "RightSidebar__Sidebar",
  componentId: "sc-2fsqfn-0"
})(["@media print{display:none;}width:", ";right:0;position:fixed;display:flex;flex-direction:column;color:", ";background:", ";height:calc(100vh - ", ");border-left:", " solid ", ";z-index:1030;transition:transform 0.25s;", ""], props => [props["aside-menu-width"], (props.theme || {})["aside-menu-width"], `250px`].filter(v => v !== void 0)[0], props => [props["gray-800"], (props.theme || {})["gray-800"], `#3c4450`].filter(v => v !== void 0)[0], props => [props["aside-menu-bg"], (props.theme || {})["aside-menu-bg"], [props["white"], (props.theme || {})["white"], `#fff`].filter(v => v !== void 0)[0]].filter(v => v !== void 0)[0], props => [props["navbar-height"], (props.theme || {})["navbar-height"], `55px`].filter(v => v !== void 0)[0], props => [props["border-width"], (props.theme || {})["border-width"], `1px`].filter(v => v !== void 0)[0], props => [props["border-color"], (props.theme || {})["border-color"], [props["gray-300"], (props.theme || {})["gray-300"], `#dadee4`].filter(v => v !== void 0)[0]].filter(v => v !== void 0)[0], props => props.rightSidebarCollapse && css(["transform:translateX(", ");"], props => [props["aside-menu-width"], (props.theme || {})["aside-menu-width"], `250px`].filter(v => v !== void 0)[0]));
const SidebarContainer = styled.div.withConfig({
  displayName: "RightSidebar__SidebarContainer",
  componentId: "sc-2fsqfn-1"
})(["height:100%;flex:1 1;"]);
export default class extends Component {
  render() {
    const {
      rightSidebarCollapse,
      sideBarTabs
    } = this.props;
    return React.createElement(Sidebar, {
      rightSidebarCollapse: rightSidebarCollapse,
      onTransitionEnd: triggerResize
    }, React.createElement(SidebarContainer, null, React.createElement(RightSidebarTabs, {
      sideBarTabs: sideBarTabs
    })));
  }

}