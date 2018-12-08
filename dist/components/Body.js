"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Main = exports.Body = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["flex: 1 1;\nmin-width: 0;\ntransition: margin-left 0.25s, margin-right 0.25s;\nmargin-left: ", ";\nmargin-left: ", ";\nmargin-left: ", ";\nmargin-right: ", ";"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["display: flex;\nflex-direction: row;\nflex-grow: 1;\noverflow-x: hidden;\nmargin-top: ", ";\nbackground-color: ", ";"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Body = _styledComponents.default.div(_templateObject(), function (props) {
  return [props["navbar-height"], (props.theme || {})["navbar-height"]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["body-bg"], (props.theme || {})["body-bg"]].filter(function (v) {
    return v !== void 0;
  })[0];
});

exports.Body = Body;

var Main = _styledComponents.default.main(_templateObject2(), function (props) {
  return [props["sidebar-width"], (props.theme || {})["sidebar-width"]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return !![props["sidebarMini"], (props.theme || {})["sidebarMini"]].filter(function (v) {
    return v !== void 0;
  })[0] ? [props["sidebar-minimized-width"], (props.theme || {})["sidebar-minimized-width"]].filter(function (v) {
    return v !== void 0;
  })[0] : undefined;
}, function (props) {
  return !![props["sidebarCollapse"], (props.theme || {})["sidebarCollapse"]].filter(function (v) {
    return v !== void 0;
  })[0] ? "0" : undefined;
}, function (props) {
  return !![props["rightSidebarCollapse"], (props.theme || {})["rightSidebarCollapse"]].filter(function (v) {
    return v !== void 0;
  })[0] ? "0" : [props["aside-menu-width"], (props.theme || {})["aside-menu-width"]].filter(function (v) {
    return v !== void 0;
  })[0];
});

exports.Main = Main;