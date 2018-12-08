import React, { Component } from 'react';
import styled, { css } from 'styled-components';
export const NavItemMinimized = styled.li`position: relative;
margin: 0;
transition: background 0.3s ease-in-out;
cursor: pointer;
overflow: hidden;
width: ${props => [props["sidebar-minimized-width"], (props.theme || {})["sidebar-minimized-width"]].filter(v => v !== void 0)[0]};
 > .sub-nav {
  position: absolute;
  left: ${props => [props["sidebar-minimized-width"], (props.theme || {})["sidebar-minimized-width"]].filter(v => v !== void 0)[0]};
  display: inline;
  background: ${props => [props["sidebar-bg"], (props.theme || {})["sidebar-bg"]].filter(v => v !== void 0)[0]};
  transition: none;
}
 > .sub-nav li {
  border: none;
}
 > .sub-nav a {
  height: 40px;
}
:hover {
  overflow: visible;
  width: ${props => parseFloat([props["sidebar-minimized-width"], (props.theme || {})["sidebar-minimized-width"]].filter(v => v !== void 0)[0]) + parseFloat([props["sidebar-width"], (props.theme || {})["sidebar-width"]].filter(v => v !== void 0)[0]) + (('' + [props["sidebar-minimized-width"], (props.theme || {})["sidebar-minimized-width"]].filter(v => v !== void 0)[0]).replace(/[\d.-]*/, "") || ('' + [props["sidebar-width"], (props.theme || {})["sidebar-width"]].filter(v => v !== void 0)[0]).replace(/[\d.-]*/, ""))};
}
:hover > .sub-nav {
  max-height: ${props => parseFloat([props["count"], (props.theme || {})["count"]].filter(v => v !== void 0)[0]) * parseFloat(40) + "px"};
}
:hover > a {
  background: ${props => [props["primary"], (props.theme || {})["primary"]].filter(v => v !== void 0)[0]};
}
:hover > a i {
  color: ${props => [props["white"], (props.theme || {})["white"]].filter(v => v !== void 0)[0]};
}
${props => props.active && css`color: ${props => [props["sidebar-nav-link-active-color"], (props.theme || {})["sidebar-nav-link-active-color"]].filter(v => v !== void 0)[0]};
background: ${props => require('tinycolor2')([props["sidebar-bg"], (props.theme || {})["sidebar-bg"]].filter(v => v !== void 0)[0]).lighten(parseFloat(`5%`)).toHex8String()};`}
i {
  transition: color 0.1s ease-in-out;
  margin-right: 2rem;
  font-size: 1.3em;
  color: ${props => !![props["active"], (props.theme || {})["active"]].filter(v => v !== void 0)[0] ? [props["primary"], (props.theme || {})["primary"]].filter(v => v !== void 0)[0] : [props["gray-500"], (props.theme || {})["gray-500"]].filter(v => v !== void 0)[0]};
}
a {
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 48px;
  text-decoration: none !important;
  color: ${props => [props["white"], (props.theme || {})["white"]].filter(v => v !== void 0)[0]} !important;
}`;