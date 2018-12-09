"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Bars = _interopRequireDefault(require("./icons/Bars"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Header = _styledComponents.default.header.withConfig({
  displayName: "Header",
  componentId: "sc-1ahrfh-0"
})(["flex-direction:row;height:", ";padding:0;margin:0;background-color:", ";position:fixed;z-index:", ";width:100%;text-align:center;border-bottom:1px solid ", ";display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;"], function (props) {
  return [props["navbar-height"], (props.theme || {})["navbar-height"], "55px"].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["navbar-bg"], (props.theme || {})["navbar-bg"], [props["white"], (props.theme || {})["white"], "#fff"].filter(function (v) {
    return v !== void 0;
  })[0]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["zindex-sticky"], (props.theme || {})["zindex-sticky"], "1020"].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["gray-300"], (props.theme || {})["gray-300"], "#dadee4"].filter(function (v) {
    return v !== void 0;
  })[0];
});

var NavbarToggler = _styledComponents.default.button.withConfig({
  displayName: "Header__NavbarToggler",
  componentId: "sc-1ahrfh-1"
})(["cursor:pointer;padding:0;width:50px;height:", ";background-color:transparent;border:", " solid transparent;border-radius:4px;color:", ";font-size:0;:hover{color:", ";}"], function (props) {
  return [props["navbar-height"], (props.theme || {})["navbar-height"], "55px"].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["border-width"], (props.theme || {})["border-width"], "1px"].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["gray-300"], (props.theme || {})["gray-300"], "#dadee4"].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["gray-900"], (props.theme || {})["gray-900"], "#313742"].filter(function (v) {
    return v !== void 0;
  })[0];
});

var NavbarBrand = _styledComponents.default.a.withConfig({
  displayName: "Header__NavbarBrand",
  componentId: "sc-1ahrfh-2"
})(["display:inline-flex;align-items:center;justify-content:center;width:", ";height:", ";padding:0;margin-right:0;background-color:", ";@media (max-width:", "){display:none;}"], function (props) {
  return parseFloat([props["sidebar-width"], (props.theme || {})["sidebar-width"], "200px"].filter(function (v) {
    return v !== void 0;
  })[0]) - parseFloat(50) + "px";
}, function (props) {
  return [props["navbar-height"], (props.theme || {})["navbar-height"], "55px"].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["navbar-brand-bg"], (props.theme || {})["navbar-brand-bg"], "transparent"].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["sm"], (props.theme || {})["sm"], "576px"].filter(function (v) {
    return v !== void 0;
  })[0];
});

var NavbarNav = _styledComponents.default.ul.withConfig({
  displayName: "Header__NavbarNav",
  componentId: "sc-1ahrfh-3"
})(["flex-direction:row;align-items:center;display:flex;padding-left:0;margin-bottom:0;list-style:none;margin-top:0;"]);

var NavItem = _styledComponents.default.li.withConfig({
  displayName: "Header__NavItem",
  componentId: "sc-1ahrfh-4"
})(["cursor:pointer;position:relative;margin:0;text-align:center;padding-left:1rem;padding-right:1rem;transition:background-color 0.1s ease-in-out;background-color:", ";:hover{background-color:", ";}&& a{display:flex;height:", ";color:", " !important;align-items:center;}&& a:hover{text-decoration:none;}span{margin-left:0.5rem;}@media (max-width:", "){span{display:none;}i{font-size:1.1em;}}"], function (props) {
  return !![props["active"], (props.theme || {})["active"]].filter(function (v) {
    return v !== void 0;
  })[0] ? [props["gray-100"], (props.theme || {})["gray-100"], "#f8f8fa"].filter(function (v) {
    return v !== void 0;
  })[0] : undefined;
}, function (props) {
  return [props["gray-200"], (props.theme || {})["gray-200"], "#e9ebef"].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return parseFloat([props["navbar-height"], (props.theme || {})["navbar-height"], "55px"].filter(function (v) {
    return v !== void 0;
  })[0]) - parseFloat(1) + (('' + [props["navbar-height"], (props.theme || {})["navbar-height"], "55px"].filter(function (v) {
    return v !== void 0;
  })[0]).replace(/[\d.-]*/, "") || ('' + 1).replace(/[\d.-]*/, ""));
}, function (props) {
  return !![props["active"], (props.theme || {})["active"]].filter(function (v) {
    return v !== void 0;
  })[0] ? [props["primary"], (props.theme || {})["primary"], [props["blue"], (props.theme || {})["blue"], "#20a8d8"].filter(function (v) {
    return v !== void 0;
  })[0]].filter(function (v) {
    return v !== void 0;
  })[0] : [props["navbar-color"], (props.theme || {})["navbar-color"], [props["gray-600"], (props.theme || {})["gray-600"], "#838fa2"].filter(function (v) {
    return v !== void 0;
  })[0]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["sm"], (props.theme || {})["sm"], "576px"].filter(function (v) {
    return v !== void 0;
  })[0];
});

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          small = _this$props.small,
          topMenu = _this$props.topMenu,
          onNavbarToggle = _this$props.onNavbarToggle,
          onRightNavbarToggle = _this$props.onRightNavbarToggle,
          selected = _this$props.selected,
          logo = _this$props.logo,
          Link = _this$props.Link;
      return _react.default.createElement(Header, null, _react.default.createElement(NavbarBrand, null, logo), _react.default.createElement(NavbarToggler, {
        onClick: onNavbarToggle
      }, _react.default.createElement(_Bars.default, {
        width: 14
      })), _react.default.createElement(NavbarNav, null, topMenu.filter(function (m) {
        return !!m;
      }).map(function (_ref, i) {
        var title = _ref.title,
            href = _ref.href,
            to = _ref.to,
            icon = _ref.icon;
        return _react.default.createElement(NavItem, {
          key: i,
          active: (0, _utils.isSelected)(selected, href, to)
        }, _react.default.createElement(Link, {
          href: href,
          to: to
        }, _react.default.createElement("i", {
          className: icon
        }), _react.default.createElement("span", null, title)));
      })), _react.default.createElement("div", {
        style: {
          flex: 1
        }
      }), !small && _react.default.createElement(NavbarToggler, {
        onClick: onRightNavbarToggle
      }, _react.default.createElement(_Bars.default, {
        width: 14
      })));
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;