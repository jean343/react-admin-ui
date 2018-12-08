"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavItemMinimized = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["color: ", ";\nbackground: ", ";"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["position: relative;\nmargin: 0;\ntransition: background 0.3s ease-in-out;\ncursor: pointer;\noverflow: hidden;\nwidth: ", ";\n > .sub-nav {\n  position: absolute;\n  left: ", ";\n  display: inline;\n  background: ", ";\n  transition: none;\n}\n > .sub-nav li {\n  border: none;\n}\n > .sub-nav a {\n  height: 40px;\n}\n:hover {\n  overflow: visible;\n  width: ", ";\n}\n:hover > .sub-nav {\n  max-height: ", ";\n}\n:hover > a {\n  background: ", ";\n}\n:hover > a i {\n  color: ", ";\n}\n", "\ni {\n  transition: color 0.1s ease-in-out;\n  margin-right: 2rem;\n  font-size: 1.3em;\n  color: ", ";\n}\na {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 48px;\n  text-decoration: none !important;\n  color: ", " !important;\n}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NavItemMinimized = _styledComponents.default.li(_templateObject(), function (props) {
  return [props["sidebar-minimized-width"], (props.theme || {})["sidebar-minimized-width"]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["sidebar-minimized-width"], (props.theme || {})["sidebar-minimized-width"]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["sidebar-bg"], (props.theme || {})["sidebar-bg"]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return parseFloat([props["sidebar-minimized-width"], (props.theme || {})["sidebar-minimized-width"]].filter(function (v) {
    return v !== void 0;
  })[0]) + parseFloat([props["sidebar-width"], (props.theme || {})["sidebar-width"]].filter(function (v) {
    return v !== void 0;
  })[0]) + (('' + [props["sidebar-minimized-width"], (props.theme || {})["sidebar-minimized-width"]].filter(function (v) {
    return v !== void 0;
  })[0]).replace(/[\d.-]*/, "") || ('' + [props["sidebar-width"], (props.theme || {})["sidebar-width"]].filter(function (v) {
    return v !== void 0;
  })[0]).replace(/[\d.-]*/, ""));
}, function (props) {
  return parseFloat([props["count"], (props.theme || {})["count"]].filter(function (v) {
    return v !== void 0;
  })[0]) * parseFloat(40) + "px";
}, function (props) {
  return [props["primary"], (props.theme || {})["primary"]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["white"], (props.theme || {})["white"]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return props.active && (0, _styledComponents.css)(_templateObject2(), function (props) {
    return [props["sidebar-nav-link-active-color"], (props.theme || {})["sidebar-nav-link-active-color"]].filter(function (v) {
      return v !== void 0;
    })[0];
  }, function (props) {
    return require('tinycolor2')([props["sidebar-bg"], (props.theme || {})["sidebar-bg"]].filter(function (v) {
      return v !== void 0;
    })[0]).lighten(parseFloat("5%")).toHex8String();
  });
}, function (props) {
  return !![props["active"], (props.theme || {})["active"]].filter(function (v) {
    return v !== void 0;
  })[0] ? [props["primary"], (props.theme || {})["primary"]].filter(function (v) {
    return v !== void 0;
  })[0] : [props["gray-500"], (props.theme || {})["gray-500"]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["white"], (props.theme || {})["white"]].filter(function (v) {
    return v !== void 0;
  })[0];
});

exports.NavItemMinimized = NavItemMinimized;