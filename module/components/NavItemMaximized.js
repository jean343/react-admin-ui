import React, { Component } from 'react';
import styled, { css } from 'styled-components';
export const NavItemMaximized = styled.li.withConfig({
  displayName: "NavItemMaximized",
  componentId: "n0lzzl-0"
})(["position:relative;margin:0;transition:background 0.3s ease-in-out,border 0.3s ease-in-out;cursor:pointer;border:1px solid transparent;overflow:hidden;flex-shrink:0;", " i:not(.caret-left-icon){transition:color 0.1s ease-in-out;margin-right:0.5rem;color:", ";}a{display:flex;align-items:center;padding:0 1rem;height:38px;text-decoration:none !important;color:", " !important;transition:background 0.1s ease-in-out;}a span{flex:1;overflow:hidden;}a:hover{background:", ";}a:hover i{color:", ";}&:first-child{border-top:none;}.caret-left-icon{transition:transform 0.3s ease-in-out;transform:", ";}", " border-left:none;border-right:none;"], props => props.active && css(["color:", ";background:", ";"], props => [props["sidebar-nav-link-active-color"], (props.theme || {})["sidebar-nav-link-active-color"], [props["white"], (props.theme || {})["white"], `#fff`].filter(v => v !== void 0)[0]].filter(v => v !== void 0)[0], props => require('tinycolor2')([props["sidebar-bg"], (props.theme || {})["sidebar-bg"], [props["gray-900"], (props.theme || {})["gray-900"], `#313742`].filter(v => v !== void 0)[0]].filter(v => v !== void 0)[0]).lighten(parseFloat(`15%`)).toHex8String()), props => !![props["active"], (props.theme || {})["active"]].filter(v => v !== void 0)[0] ? [props["primary"], (props.theme || {})["primary"], [props["blue"], (props.theme || {})["blue"], `#20a8d8`].filter(v => v !== void 0)[0]].filter(v => v !== void 0)[0] : [props["gray-500"], (props.theme || {})["gray-500"], `#a0a9b8`].filter(v => v !== void 0)[0], props => [props["white"], (props.theme || {})["white"], `#fff`].filter(v => v !== void 0)[0], props => [props["primary"], (props.theme || {})["primary"], [props["blue"], (props.theme || {})["blue"], `#20a8d8`].filter(v => v !== void 0)[0]].filter(v => v !== void 0)[0], props => [props["white"], (props.theme || {})["white"], `#fff`].filter(v => v !== void 0)[0], props => !![props["open"], (props.theme || {})["open"]].filter(v => v !== void 0)[0] ? `rotate(-90deg)` : undefined, props => props.open && css(["background:", ";border:1px solid ", ";> .sub-nav{max-height:", ";}"], props => require("tinycolor2")({
  r: `0`,
  g: `0`,
  b: `0`,
  a: `0.2`
}).toHex8String(), props => require("tinycolor2")({
  r: `255`,
  g: `255`,
  b: `255`,
  a: `0.1`
}).toHex8String(), props => parseFloat([props["count"], (props.theme || {})["count"]].filter(v => v !== void 0)[0]) * parseFloat(40) + "px"));