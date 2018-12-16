"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Content = exports.Main = exports.Body = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Body = _styledComponents.default.div.withConfig({
  displayName: "Body",
  componentId: "sc-1kjiic4-0"
})(["display:flex;flex-direction:row;flex-grow:1;overflow-x:hidden;@media screen{transform:translateY(", ");background-color:", ";}"], function (props) {
  return [props["navbar-height"], (props.theme || {})["navbar-height"], "55px"].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["body-background-color"], (props.theme || {})["body-background-color"], "#f5f6f7"].filter(function (v) {
    return v !== void 0;
  })[0];
});

exports.Body = Body;

var Main = _styledComponents.default.main.withConfig({
  displayName: "Body__Main",
  componentId: "sc-1kjiic4-1"
})(["flex:1 1;min-width:0;transition:margin-left 0.25s,margin-right 0.25s;@media screen{margin-left:", ";margin-left:", ";margin-left:", ";margin-right:", ";}"], function (props) {
  return [props["sidebar-width"], (props.theme || {})["sidebar-width"], "200px"].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return !![props["sidebarMini"], (props.theme || {})["sidebarMini"]].filter(function (v) {
    return v !== void 0;
  })[0] ? [props["sidebar-minimized-width"], (props.theme || {})["sidebar-minimized-width"], "50px"].filter(function (v) {
    return v !== void 0;
  })[0] : undefined;
}, function (props) {
  return !![props["sidebarCollapse"], (props.theme || {})["sidebarCollapse"]].filter(function (v) {
    return v !== void 0;
  })[0] ? "0" : undefined;
}, function (props) {
  return !![props["rightSidebarCollapse"], (props.theme || {})["rightSidebarCollapse"]].filter(function (v) {
    return v !== void 0;
  })[0] ? "0" : [props["aside-menu-width"], (props.theme || {})["aside-menu-width"], "250px"].filter(function (v) {
    return v !== void 0;
  })[0];
});

exports.Main = Main;

var Content = _styledComponents.default.div.withConfig({
  displayName: "Body__Content",
  componentId: "sc-1kjiic4-2"
})(["@media screen{padding:4px;}position:relative;"]);

exports.Content = Content;