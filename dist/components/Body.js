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
})(["display:flex;flex-direction:row;flex-grow:1;overflow-x:hidden;position:relative;@media screen{top:", ";background-color:", ";}"], function (props) {
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
})(["flex:1 1 0%;display:flex;flex-direction:column;min-width:0;transition:margin-left 0.25s,margin-right 0.25s;@media screen{margin-left:", ";margin-left:", ";margin-left:", ";margin-right:", ";}@media (min-width:", "){.container{width:", ";}}@media (min-width:", "){.container{width:", ";}}@media (min-width:", "){.container{width:", ";}}@media (min-width:", "){.container{width:1170px;}}"], function (props) {
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
}, function (props) {
  return [props["md"], (props.theme || {})["md"], "768px"].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return parseFloat(parseFloat(750) - parseFloat(!![props["sidebarCollapse"], (props.theme || {})["sidebarCollapse"]].filter(function (v) {
    return v !== void 0;
  })[0] ? "0" : !![props["sidebarMini"], (props.theme || {})["sidebarMini"]].filter(function (v) {
    return v !== void 0;
  })[0] ? [props["sidebar-minimized-width"], (props.theme || {})["sidebar-minimized-width"], "50px"].filter(function (v) {
    return v !== void 0;
  })[0] : [props["sidebar-width"], (props.theme || {})["sidebar-width"], "200px"].filter(function (v) {
    return v !== void 0;
  })[0]) + "px") - parseFloat(!![props["rightSidebarCollapse"], (props.theme || {})["rightSidebarCollapse"]].filter(function (v) {
    return v !== void 0;
  })[0] ? "0" : [props["aside-menu-width"], (props.theme || {})["aside-menu-width"], "250px"].filter(function (v) {
    return v !== void 0;
  })[0]) + (('' + parseFloat(750) - parseFloat(!![props["sidebarCollapse"], (props.theme || {})["sidebarCollapse"]].filter(function (v) {
    return v !== void 0;
  })[0] ? "0" : !![props["sidebarMini"], (props.theme || {})["sidebarMini"]].filter(function (v) {
    return v !== void 0;
  })[0] ? [props["sidebar-minimized-width"], (props.theme || {})["sidebar-minimized-width"], "50px"].filter(function (v) {
    return v !== void 0;
  })[0] : [props["sidebar-width"], (props.theme || {})["sidebar-width"], "200px"].filter(function (v) {
    return v !== void 0;
  })[0]) + "px").replace(/[\d.-]*/, "") || ('' + !![props["rightSidebarCollapse"], (props.theme || {})["rightSidebarCollapse"]].filter(function (v) {
    return v !== void 0;
  })[0] ? "0" : [props["aside-menu-width"], (props.theme || {})["aside-menu-width"], "250px"].filter(function (v) {
    return v !== void 0;
  })[0]).replace(/[\d.-]*/, ""));
}, function (props) {
  return [props["lg"], (props.theme || {})["lg"], "992px"].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return parseFloat(parseFloat(970) - parseFloat(!![props["sidebarCollapse"], (props.theme || {})["sidebarCollapse"]].filter(function (v) {
    return v !== void 0;
  })[0] ? "0" : !![props["sidebarMini"], (props.theme || {})["sidebarMini"]].filter(function (v) {
    return v !== void 0;
  })[0] ? [props["sidebar-minimized-width"], (props.theme || {})["sidebar-minimized-width"], "50px"].filter(function (v) {
    return v !== void 0;
  })[0] : [props["sidebar-width"], (props.theme || {})["sidebar-width"], "200px"].filter(function (v) {
    return v !== void 0;
  })[0]) + "px") - parseFloat(!![props["rightSidebarCollapse"], (props.theme || {})["rightSidebarCollapse"]].filter(function (v) {
    return v !== void 0;
  })[0] ? "0" : [props["aside-menu-width"], (props.theme || {})["aside-menu-width"], "250px"].filter(function (v) {
    return v !== void 0;
  })[0]) + (('' + parseFloat(970) - parseFloat(!![props["sidebarCollapse"], (props.theme || {})["sidebarCollapse"]].filter(function (v) {
    return v !== void 0;
  })[0] ? "0" : !![props["sidebarMini"], (props.theme || {})["sidebarMini"]].filter(function (v) {
    return v !== void 0;
  })[0] ? [props["sidebar-minimized-width"], (props.theme || {})["sidebar-minimized-width"], "50px"].filter(function (v) {
    return v !== void 0;
  })[0] : [props["sidebar-width"], (props.theme || {})["sidebar-width"], "200px"].filter(function (v) {
    return v !== void 0;
  })[0]) + "px").replace(/[\d.-]*/, "") || ('' + !![props["rightSidebarCollapse"], (props.theme || {})["rightSidebarCollapse"]].filter(function (v) {
    return v !== void 0;
  })[0] ? "0" : [props["aside-menu-width"], (props.theme || {})["aside-menu-width"], "250px"].filter(function (v) {
    return v !== void 0;
  })[0]).replace(/[\d.-]*/, ""));
}, function (props) {
  return [props["xl"], (props.theme || {})["xl"], "1200px"].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return parseFloat(parseFloat(1170) - parseFloat(!![props["sidebarCollapse"], (props.theme || {})["sidebarCollapse"]].filter(function (v) {
    return v !== void 0;
  })[0] ? "0" : !![props["sidebarMini"], (props.theme || {})["sidebarMini"]].filter(function (v) {
    return v !== void 0;
  })[0] ? [props["sidebar-minimized-width"], (props.theme || {})["sidebar-minimized-width"], "50px"].filter(function (v) {
    return v !== void 0;
  })[0] : [props["sidebar-width"], (props.theme || {})["sidebar-width"], "200px"].filter(function (v) {
    return v !== void 0;
  })[0]) + "px") - parseFloat(!![props["rightSidebarCollapse"], (props.theme || {})["rightSidebarCollapse"]].filter(function (v) {
    return v !== void 0;
  })[0] ? "0" : [props["aside-menu-width"], (props.theme || {})["aside-menu-width"], "250px"].filter(function (v) {
    return v !== void 0;
  })[0]) + (('' + parseFloat(1170) - parseFloat(!![props["sidebarCollapse"], (props.theme || {})["sidebarCollapse"]].filter(function (v) {
    return v !== void 0;
  })[0] ? "0" : !![props["sidebarMini"], (props.theme || {})["sidebarMini"]].filter(function (v) {
    return v !== void 0;
  })[0] ? [props["sidebar-minimized-width"], (props.theme || {})["sidebar-minimized-width"], "50px"].filter(function (v) {
    return v !== void 0;
  })[0] : [props["sidebar-width"], (props.theme || {})["sidebar-width"], "200px"].filter(function (v) {
    return v !== void 0;
  })[0]) + "px").replace(/[\d.-]*/, "") || ('' + !![props["rightSidebarCollapse"], (props.theme || {})["rightSidebarCollapse"]].filter(function (v) {
    return v !== void 0;
  })[0] ? "0" : [props["aside-menu-width"], (props.theme || {})["aside-menu-width"], "250px"].filter(function (v) {
    return v !== void 0;
  })[0]).replace(/[\d.-]*/, ""));
}, function (props) {
  return [props["xxl"], (props.theme || {})["xxl"], "1650px"].filter(function (v) {
    return v !== void 0;
  })[0];
});

exports.Main = Main;

var Content = _styledComponents.default.div.withConfig({
  displayName: "Body__Content",
  componentId: "sc-1kjiic4-2"
})(["flex:1 1 0%;position:relative;@media screen{padding:4px;}"]);

exports.Content = Content;