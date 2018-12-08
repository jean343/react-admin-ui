"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavItemMaximized = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["background: ", ";\nborder: 1px solid ", ";\n > .sub-nav {\n  max-height: ", ";\n}"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["color: ", ";\nbackground: ", ";"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["position: relative;\nmargin: 0;\ntransition: background 0.3s ease-in-out, border 0.3s ease-in-out;\ncursor: pointer;\nborder: 1px solid transparent;\noverflow: hidden;\nflex-shrink: 0;\n", "\ni:not(.caret) {\n  transition: color 0.1s ease-in-out;\n  margin-right: 0.5rem;\n  color: ", ";\n}\na {\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 38px;\n  text-decoration: none !important;\n  color: ", " !important;\n  transition: background 0.1s ease-in-out;\n}\na span {\n  flex: 1;\n  overflow: hidden;\n}\na :hover {\n  background: ", ";\n}\na :hover i {\n  color: ", ";\n}\n&:first-child {\n  border-top: none;\n}\n.caret {\n  transition: transform 0.3s ease-in-out;\n  transform: ", ";\n}\n", "\nborder-left: none;\nborder-right: none;"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NavItemMaximized = _styledComponents.default.li(_templateObject(), function (props) {
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
}, function (props) {
  return [props["primary"], (props.theme || {})["primary"]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["white"], (props.theme || {})["white"]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return !![props["open"], (props.theme || {})["open"]].filter(function (v) {
    return v !== void 0;
  })[0] ? "rotate(-90deg)" : undefined;
}, function (props) {
  return props.open && (0, _styledComponents.css)(_templateObject3(), function (props) {
    return require("tinycolor2")({
      r: "0",
      g: "0",
      b: "0",
      a: "0.2"
    }).toHex8String();
  }, function (props) {
    return require("tinycolor2")({
      r: "255",
      g: "255",
      b: "255",
      a: "0.1"
    }).toHex8String();
  }, function (props) {
    return parseFloat([props["count"], (props.theme || {})["count"]].filter(function (v) {
      return v !== void 0;
    })[0]) * parseFloat(40) + "px";
  });
});

exports.NavItemMaximized = NavItemMaximized;