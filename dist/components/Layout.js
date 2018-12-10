"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Header = _interopRequireDefault(require("./Header"));

var _Body = require("./Body");

var _Sidebar = _interopRequireDefault(require("./Sidebar"));

var _RightSidebar = _interopRequireDefault(require("./RightSidebar"));

var _Toolbar = _interopRequireDefault(require("./Toolbar"));

var _Matchmedia = _interopRequireDefault(require("./Matchmedia"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var App = _styledComponents.default.div.withConfig({
  displayName: "Layout__App",
  componentId: "sc-107aecb-0"
})(["display:flex;flex-direction:column;min-height:100vh;a{color:", ";text-decoration:", ";}a:hover{color:", ";text-decoration:", ";}"], function (props) {
  return [props["link-color"], (props.theme || {})["link-color"], [props["blue"], (props.theme || {})["blue"], "#20a8d8"].filter(function (v) {
    return v !== void 0;
  })[0]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["link-decoration"], (props.theme || {})["link-decoration"], "none"].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return require('tinycolor2')([props["link-color"], (props.theme || {})["link-color"], [props["blue"], (props.theme || {})["blue"], "#20a8d8"].filter(function (v) {
    return v !== void 0;
  })[0]].filter(function (v) {
    return v !== void 0;
  })[0]).darken(parseFloat("15%")).toHex8String();
}, function (props) {
  return [props["link-hover-decoration"], (props.theme || {})["link-hover-decoration"], "underline"].filter(function (v) {
    return v !== void 0;
  })[0];
});

var Layout =
/*#__PURE__*/
function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Layout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Layout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      lg: false,
      md: false,
      sidebarOpened: false,
      sidebarCollapse: _this.props.initialCollapse,
      sidebarMini: _this.props.initialMini,
      rightSidebarCollapse: _this.props.initialRightSidebarCollapse
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onNavbarToggle", function () {
      var _this$state = _this.state,
          lg = _this$state.lg,
          sidebarOpened = _this$state.sidebarOpened,
          sidebarCollapse = _this$state.sidebarCollapse;

      if (lg) {
        _this.setState({
          sidebarOpened: !sidebarOpened
        });
      } else {
        _this.setState({
          sidebarCollapse: !sidebarCollapse
        });
      }
    });

    return _this;
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          sideMenu = _this$props.sideMenu,
          topMenu = _this$props.topMenu,
          selected = _this$props.selected,
          sideBarTabs = _this$props.sideBarTabs,
          children = _this$props.children,
          logo = _this$props.logo,
          sideBarHeader = _this$props.sideBarHeader,
          _this$props$linkCompo = _this$props.linkComponent,
          linkComponent = _this$props$linkCompo === void 0 ? "a" : _this$props$linkCompo;
      var _this$state2 = this.state,
          lg = _this$state2.lg,
          md = _this$state2.md,
          sidebarOpened = _this$state2.sidebarOpened,
          sidebarCollapse = _this$state2.sidebarCollapse,
          rightSidebarCollapse = _this$state2.rightSidebarCollapse,
          sidebarMini = _this$state2.sidebarMini;
      return _react.default.createElement(App, null, _react.default.createElement(_Matchmedia.default, {
        query: "screen and (max-width: 991.98px)",
        onMatch: function onMatch(matches) {
          return _this2.setState({
            lg: matches
          });
        }
      }), _react.default.createElement(_Matchmedia.default, {
        query: "screen and (max-width: 767.98px)",
        onMatch: function onMatch(matches) {
          return _this2.setState({
            md: matches,
            sidebarOpened: false
          });
        }
      }), _react.default.createElement(_Header.default, {
        logo: logo,
        lg: lg,
        topMenu: topMenu,
        selected: selected,
        onNavbarToggle: this.onNavbarToggle,
        onRightNavbarToggle: function onRightNavbarToggle() {
          return _this2.setState({
            rightSidebarCollapse: !rightSidebarCollapse
          });
        },
        Link: linkComponent
      }), _react.default.createElement(_Body.Body, null, _react.default.createElement(_Sidebar.default, {
        sideMenu: sideMenu,
        sideBarHeader: sideBarHeader,
        selected: selected,
        sidebarCollapse: !sidebarOpened && (md || sidebarCollapse),
        sidebarMini: !sidebarOpened && (lg || sidebarMini),
        onSidebarMiniChange: function onSidebarMiniChange(sidebarMini) {
          return _this2.setState({
            sidebarMini: sidebarMini
          });
        },
        onClickOutside: function onClickOutside() {
          return sidebarOpened && setTimeout(function () {
            return _this2.setState({
              sidebarOpened: false
            });
          }, 0);
        },
        Link: linkComponent
      }), _react.default.createElement(_Body.Main, {
        sidebarCollapse: md || sidebarCollapse,
        sidebarMini: lg || sidebarMini,
        rightSidebarCollapse: lg || rightSidebarCollapse
      }, _react.default.createElement(_Toolbar.default, null), _react.default.createElement(_Body.Content, null, children)), _react.default.createElement(_RightSidebar.default, {
        rightSidebarCollapse: lg || rightSidebarCollapse,
        sideBarTabs: sideBarTabs
      })));
    }
  }]);

  return Layout;
}(_react.Component);

exports.default = Layout;

_defineProperty(Layout, "defaultProps", {
  initialCollapse: false,
  initialMini: false,
  initialRightSidebarCollapse: false
});