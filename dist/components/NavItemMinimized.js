"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavItemMinimized = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var NavItemMinimized = _styledComponents.default.li.withConfig({
  displayName: "NavItemMinimized",
  componentId: "ngdma4-0"
})(["position:relative;margin:0;transition:background 0.3s ease-in-out;cursor:pointer;overflow:hidden;width:", ";> .sub-nav{position:absolute;left:", ";display:inline;background:", ";transition:none;}> .sub-nav li{border:none;}> .sub-nav a{height:40px;}:hover{overflow:visible;width:", ";}:hover > .sub-nav{max-height:", ";}:hover > a{background:", ";}:hover > a i,:hover > a svg{color:", ";}", " > a{display:flex;align-items:center;height:48px;text-decoration:none !important;color:", " !important;}> a > i,> a > svg{transition:color 0.1s ease-in-out;margin-right:1rem;font-size:1.3em;color:", ";width:", " !important;flex-shrink:0;text-align:center;}"], function (props) {
  return [props["sidebar-minimized-width"], (props.theme || {})["sidebar-minimized-width"], "50px"].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["sidebar-minimized-width"], (props.theme || {})["sidebar-minimized-width"], "50px"].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["sidebar-bg"], (props.theme || {})["sidebar-bg"], [props["gray-900"], (props.theme || {})["gray-900"], "#313742"].filter(function (v) {
    return v !== void 0;
  })[0]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return parseFloat([props["sidebar-minimized-width"], (props.theme || {})["sidebar-minimized-width"], "50px"].filter(function (v) {
    return v !== void 0;
  })[0]) + parseFloat([props["sidebar-width"], (props.theme || {})["sidebar-width"], "200px"].filter(function (v) {
    return v !== void 0;
  })[0]) + (('' + [props["sidebar-minimized-width"], (props.theme || {})["sidebar-minimized-width"], "50px"].filter(function (v) {
    return v !== void 0;
  })[0]).replace(/[\d.-]*/, "") || ('' + [props["sidebar-width"], (props.theme || {})["sidebar-width"], "200px"].filter(function (v) {
    return v !== void 0;
  })[0]).replace(/[\d.-]*/, ""));
}, function (props) {
  return parseFloat([props["count"], (props.theme || {})["count"]].filter(function (v) {
    return v !== void 0;
  })[0]) * parseFloat(40) + "px";
}, function (props) {
  return [props["primary"], (props.theme || {})["primary"], [props["blue"], (props.theme || {})["blue"], "#20a8d8"].filter(function (v) {
    return v !== void 0;
  })[0]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["white"], (props.theme || {})["white"], "#fff"].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return props.active && (0, _styledComponents.css)(["color:", ";background:", ";"], function (props) {
    return [props["sidebar-nav-link-active-color"], (props.theme || {})["sidebar-nav-link-active-color"], [props["white"], (props.theme || {})["white"], "#fff"].filter(function (v) {
      return v !== void 0;
    })[0]].filter(function (v) {
      return v !== void 0;
    })[0];
  }, function (props) {
    return require('tinycolor2')([props["sidebar-bg"], (props.theme || {})["sidebar-bg"], [props["gray-900"], (props.theme || {})["gray-900"], "#313742"].filter(function (v) {
      return v !== void 0;
    })[0]].filter(function (v) {
      return v !== void 0;
    })[0]).lighten(parseFloat("5%")).toHex8String();
  });
}, function (props) {
  return [props["white"], (props.theme || {})["white"], "#fff"].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return !![props["active"], (props.theme || {})["active"]].filter(function (v) {
    return v !== void 0;
  })[0] ? [props["primary"], (props.theme || {})["primary"], [props["blue"], (props.theme || {})["blue"], "#20a8d8"].filter(function (v) {
    return v !== void 0;
  })[0]].filter(function (v) {
    return v !== void 0;
  })[0] : [props["gray-500"], (props.theme || {})["gray-500"], "#a0a9b8"].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["sidebar-minimized-width"], (props.theme || {})["sidebar-minimized-width"], "50px"].filter(function (v) {
    return v !== void 0;
  })[0];
});

exports.NavItemMinimized = NavItemMinimized;