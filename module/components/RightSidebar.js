import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import RightSidebarTabs from './RightSidebarTabs';
const Sidebar = styled.div`width: ${props => [props["aside-menu-width"], (props.theme || {})["aside-menu-width"]].filter(v => v !== void 0)[0]};
right: 0;
position: fixed;
display: flex;
flex-direction: column;
padding: ${props => [props["sidebar-padding"], (props.theme || {})["sidebar-padding"]].filter(v => v !== void 0)[0]};
color: ${props => [props["gray-800"], (props.theme || {})["gray-800"]].filter(v => v !== void 0)[0]};
background: ${props => [props["aside-menu-bg"], (props.theme || {})["aside-menu-bg"]].filter(v => v !== void 0)[0]};
height: calc(100vh - ${props => [props["navbar-height"], (props.theme || {})["navbar-height"]].filter(v => v !== void 0)[0]});
border-left: 1px solid ${props => [props["border-color"], (props.theme || {})["border-color"]].filter(v => v !== void 0)[0]};
transition: transform 0.25s;
${props => props.rightSidebarCollapse && css`transform: translateX(${props => [props["aside-menu-width"], (props.theme || {})["aside-menu-width"]].filter(v => v !== void 0)[0]});`}`;
const SidebarContainer = styled.div`height: 100%;
flex: 1 1;`;
export default class extends Component {
  render() {
    const {
      rightSidebarCollapse,
      sideBarTabs
    } = this.props;
    return React.createElement(Sidebar, {
      rightSidebarCollapse: rightSidebarCollapse
    }, React.createElement(SidebarContainer, null, React.createElement(RightSidebarTabs, {
      sideBarTabs: sideBarTabs
    })));
  }

}