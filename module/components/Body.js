import React from 'react';
import styled from 'styled-components';
export const Body = styled.div.withConfig({
  displayName: "Body",
  componentId: "sc-1kjiic4-0"
})(["display:flex;flex-direction:row;flex-grow:1;overflow-x:hidden;@media screen{margin-top:", ";background-color:", ";}"], props => [props["navbar-height"], (props.theme || {})["navbar-height"], `55px`].filter(v => v !== void 0)[0], props => [props["body-bg"], (props.theme || {})["body-bg"], `#f5f6f7`].filter(v => v !== void 0)[0]);
export const Main = styled.main.withConfig({
  displayName: "Body__Main",
  componentId: "sc-1kjiic4-1"
})(["flex:1 1;min-width:0;transition:margin-left 0.25s,margin-right 0.25s;@media screen{margin-left:", ";margin-left:", ";margin-left:", ";margin-right:", ";}"], props => [props["sidebar-width"], (props.theme || {})["sidebar-width"], `200px`].filter(v => v !== void 0)[0], props => !![props["sidebarMini"], (props.theme || {})["sidebarMini"]].filter(v => v !== void 0)[0] ? [props["sidebar-minimized-width"], (props.theme || {})["sidebar-minimized-width"], `50px`].filter(v => v !== void 0)[0] : undefined, props => !![props["sidebarCollapse"], (props.theme || {})["sidebarCollapse"]].filter(v => v !== void 0)[0] ? `0` : undefined, props => !![props["rightSidebarCollapse"], (props.theme || {})["rightSidebarCollapse"]].filter(v => v !== void 0)[0] ? `0` : [props["aside-menu-width"], (props.theme || {})["aside-menu-width"], `250px`].filter(v => v !== void 0)[0]);
export const Content = styled.div.withConfig({
  displayName: "Body__Content",
  componentId: "sc-1kjiic4-2"
})(["@media screen{padding:4px;}position:relative;"]);