"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavItemMaximized = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var NavItemMaximized = _styledComponents.default.li.withConfig({
  displayName: "NavItemMaximized",
  componentId: "n0lzzl-0"
})(["position:relative;margin:0;transition:background 0.3s ease-in-out,border 0.1s ease-in-out;cursor:pointer;border:", " solid transparent;overflow:hidden;flex-shrink:0;", " i:not(.caret-left-icon){transition:color 0.1s ease-in-out;margin-right:0.5rem;color:", ";}a{display:flex;align-items:center;padding:0 ", ";height:38px;text-decoration:none !important;color:", " !important;transition:background 0.1s ease-in-out;}a span{flex:1;overflow:hidden;}a:hover{background:", ";}a:hover i{color:", ";}&:first-child{border-top:none;}.caret-left-icon{transition:transform 0.3s ease-in-out;transform:", ";}", " border-left:3px solid transparent;border-left-color:", ";border-left:", ";border-right:none;"], function (props) {
  return [props["border-width"], (props.theme || {})["border-width"], "1px"].filter(function (v) {
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
    })[0]).lighten(parseFloat("15%")).toHex8String();
  });
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
  return !![props["hasChild"], (props.theme || {})["hasChild"]].filter(function (v) {
    return v !== void 0;
  })[0] ? "1rem" : "calc(1rem - 3px)";
}, function (props) {
  return [props["white"], (props.theme || {})["white"], "#fff"].filter(function (v) {
    return v !== void 0;
  })[0];
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
  return !![props["open"], (props.theme || {})["open"]].filter(function (v) {
    return v !== void 0;
  })[0] ? "rotate(-90deg)" : undefined;
}, function (props) {
  return props.open && (0, _styledComponents.css)(["background:", ";border:", " solid ", ";> .sub-nav{max-height:", ";}"], function (props) {
    return require("tinycolor2")({
      r: "0",
      g: "0",
      b: "0",
      a: "0.2"
    }).toHex8String();
  }, function (props) {
    return [props["border-width"], (props.theme || {})["border-width"], "1px"].filter(function (v) {
      return v !== void 0;
    })[0];
  }, function (props) {
    return require("tinycolor2")({
      r: "255",
      g: "255",
      b: "255",
      a: "0.2"
    }).toHex8String();
  }, function (props) {
    return parseFloat([props["count"], (props.theme || {})["count"]].filter(function (v) {
      return v !== void 0;
    })[0]) * parseFloat(40) + "px";
  });
}, function (props) {
  return !![props["active"], (props.theme || {})["active"]].filter(function (v) {
    return v !== void 0;
  })[0] ? [props["primary"], (props.theme || {})["primary"], [props["blue"], (props.theme || {})["blue"], "#20a8d8"].filter(function (v) {
    return v !== void 0;
  })[0]].filter(function (v) {
    return v !== void 0;
  })[0] : undefined;
}, function (props) {
  return !![props["hasChild"], (props.theme || {})["hasChild"]].filter(function (v) {
    return v !== void 0;
  })[0] ? "none" : undefined;
});

exports.NavItemMaximized = NavItemMaximized;