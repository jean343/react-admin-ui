import React, { Component } from 'react';
import styled, { css } from 'styled-components';
export const NavItemMaximized = styled.li`position: relative;
margin: 0;
transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
cursor: pointer;
border: 1px solid transparent;
overflow: hidden;
flex-shrink: 0;
${props => props.active && css`color: ${props => [props["sidebar-nav-link-active-color"], (props.theme || {})["sidebar-nav-link-active-color"]].filter(v => v !== void 0)[0]};
background: ${props => require('tinycolor2')([props["sidebar-bg"], (props.theme || {})["sidebar-bg"]].filter(v => v !== void 0)[0]).lighten(parseFloat(`5%`)).toHex8String()};`}
i:not(.caret) {
  transition: color 0.1s ease-in-out;
  margin-right: 0.5rem;
  color: ${props => !![props["active"], (props.theme || {})["active"]].filter(v => v !== void 0)[0] ? [props["primary"], (props.theme || {})["primary"]].filter(v => v !== void 0)[0] : [props["gray-500"], (props.theme || {})["gray-500"]].filter(v => v !== void 0)[0]};
}
a {
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 38px;
  text-decoration: none !important;
  color: ${props => [props["white"], (props.theme || {})["white"]].filter(v => v !== void 0)[0]} !important;
  transition: background 0.1s ease-in-out;
}
a span {
  flex: 1;
  overflow: hidden;
}
a :hover {
  background: ${props => [props["primary"], (props.theme || {})["primary"]].filter(v => v !== void 0)[0]};
}
a :hover i {
  color: ${props => [props["white"], (props.theme || {})["white"]].filter(v => v !== void 0)[0]};
}
&:first-child {
  border-top: none;
}
.caret {
  transition: transform 0.3s ease-in-out;
  transform: ${props => !![props["open"], (props.theme || {})["open"]].filter(v => v !== void 0)[0] ? `rotate(-90deg)` : undefined};
}
${props => props.open && css`background: ${props => require("tinycolor2")({
  r: `0`,
  g: `0`,
  b: `0`,
  a: `0.2`
}).toHex8String()};
border: 1px solid ${props => require("tinycolor2")({
  r: `255`,
  g: `255`,
  b: `255`,
  a: `0.1`
}).toHex8String()};
 > .sub-nav {
  max-height: ${props => parseFloat([props["count"], (props.theme || {})["count"]].filter(v => v !== void 0)[0]) * parseFloat(40) + "px"};
}`}
border-left: none;
border-right: none;`;