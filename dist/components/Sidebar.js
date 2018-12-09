"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _NavItemMaximized = require("./NavItemMaximized");

var _NavItemMinimized = require("./NavItemMinimized");

var _reactClickOutside = _interopRequireDefault(require("react-click-outside"));

var _CaretLeft = _interopRequireDefault(require("./icons/CaretLeft"));

var _CaretSquareLeft = _interopRequireDefault(require("./icons/CaretSquareLeft"));

var _utils = require("./utils");

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

var Sidebar = _styledComponents.default.div.withConfig({
  displayName: "Sidebar",
  componentId: "wu4c6y-0"
})(["position:fixed;display:flex;flex-direction:column;padding:", ";color:", ";background:", ";height:calc(100vh - ", ");transition:transform 0.25s;transform:", ";"], function (props) {
  return [props["sidebar-padding"], (props.theme || {})["sidebar-padding"], "0"].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["sidebar-color"], (props.theme || {})["sidebar-color"], [props["white"], (props.theme || {})["white"], "#fff"].filter(function (v) {
    return v !== void 0;
  })[0]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["sidebar-bg"], (props.theme || {})["sidebar-bg"], [props["gray-900"], (props.theme || {})["gray-900"], "#313742"].filter(function (v) {
    return v !== void 0;
  })[0]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["navbar-height"], (props.theme || {})["navbar-height"], "55px"].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return !![props["sidebarCollapse"], (props.theme || {})["sidebarCollapse"]].filter(function (v) {
    return v !== void 0;
  })[0] ? "translateX(".concat(parseFloat(-1) * parseFloat([props["sidebar-width"], (props.theme || {})["sidebar-width"], "200px"].filter(function (v) {
    return v !== void 0;
  })[0]) + (('' + -1).replace(/[\d.-]*/, "") || ('' + [props["sidebar-width"], (props.theme || {})["sidebar-width"], "200px"].filter(function (v) {
    return v !== void 0;
  })[0]).replace(/[\d.-]*/, "")), ")") : undefined;
});

var SidebarContainer = _styledComponents.default.div.withConfig({
  displayName: "Sidebar__SidebarContainer",
  componentId: "wu4c6y-1"
})(["height:100%;flex:1 1;overflow-y:", ";"], function (props) {
  return !![props["sidebarMini"], (props.theme || {})["sidebarMini"]].filter(function (v) {
    return v !== void 0;
  })[0] ? "visible" : "auto";
});

var Nav = _styledComponents.default.ul.withConfig({
  displayName: "Sidebar__Nav",
  componentId: "wu4c6y-2"
})(["display:flex;width:", ";flex-direction:column;padding:0;list-style:none;margin:0;transition:max-height 0.3s ease-in-out,width 0.25s;overflow-y:", ";"], function (props) {
  return !![props["sidebarMini"], (props.theme || {})["sidebarMini"]].filter(function (v) {
    return v !== void 0;
  })[0] ? [props["sidebar-minimized-width"], (props.theme || {})["sidebar-minimized-width"], "50px"].filter(function (v) {
    return v !== void 0;
  })[0] : [props["sidebar-width"], (props.theme || {})["sidebar-width"], "200px"].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return !![props["sidebarMini"], (props.theme || {})["sidebarMini"]].filter(function (v) {
    return v !== void 0;
  })[0] ? "visible" : "hidden";
});

var SubNav = (0, _styledComponents.default)(Nav).withConfig({
  displayName: "Sidebar__SubNav",
  componentId: "wu4c6y-3"
})(["min-height:0;max-height:0;"]);

var NavTitle = _styledComponents.default.li.withConfig({
  displayName: "Sidebar__NavTitle",
  componentId: "wu4c6y-4"
})(["padding:0.75rem 1rem;font-size:80%;font-weight:700;color:", ";text-transform:uppercase;overflow:hidden;"], function (props) {
  return [props["sidebar-nav-title-color"], (props.theme || {})["sidebar-nav-title-color"], [props["gray-200"], (props.theme || {})["gray-200"], "#e9ebef"].filter(function (v) {
    return v !== void 0;
  })[0]].filter(function (v) {
    return v !== void 0;
  })[0];
});

var SidebarMinimizer = _styledComponents.default.button.withConfig({
  displayName: "Sidebar__SidebarMinimizer",
  componentId: "wu4c6y-5"
})(["position:relative;flex:0 0 50px;cursor:pointer;background-color:", ";border:0;color:", ";overflow:hidden;transition:all 0.1s ease-in-out;text-align:right;padding:0;svg{width:", ";height:20px;transition:transform 0.3s ease-in-out;transform:", ";}&:focus{outline:0;}&:hover{background-color:", ";color:", ";}"], function (props) {
  return require("tinycolor2")({
    r: "0",
    g: "0",
    b: "0",
    a: "0.2"
  }).toHex8String();
}, function (props) {
  return [props["sidebar-bg"], (props.theme || {})["sidebar-bg"], [props["gray-900"], (props.theme || {})["gray-900"], "#313742"].filter(function (v) {
    return v !== void 0;
  })[0]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["sidebar-minimized-width"], (props.theme || {})["sidebar-minimized-width"], "50px"].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return !![props["sidebarMini"], (props.theme || {})["sidebarMini"]].filter(function (v) {
    return v !== void 0;
  })[0] ? "rotate(-180deg)" : undefined;
}, function (props) {
  return require("tinycolor2")({
    r: "0",
    g: "0",
    b: "0",
    a: "0.3"
  }).toHex8String();
}, function (props) {
  return [props["gray-500"], (props.theme || {})["gray-500"], "#a0a9b8"].filter(function (v) {
    return v !== void 0;
  })[0];
});

var Menu =
/*#__PURE__*/
function (_Component) {
  _inherits(Menu, _Component);

  function Menu() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Menu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Menu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      indexOpened: undefined
    });

    return _this;
  }

  _createClass(Menu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          sidebarMini = _this$props.sidebarMini,
          selected = _this$props.selected,
          Link = _this$props.Link;
      var indexOpened = this.state.indexOpened;
      var NavItem = sidebarMini ? _NavItemMinimized.NavItemMinimized : _NavItemMaximized.NavItemMaximized;
      return children.filter(function (m) {
        return !!m;
      }).map(function (_ref, i) {
        var title = _ref.title,
            href = _ref.href,
            to = _ref.to,
            icon = _ref.icon,
            children = _ref.children;

        if (href || to || children) {
          var open = indexOpened === i;

          if (Array.isArray(children) && children.filter(function (m) {
            return !!m;
          }).some(function (c) {
            return (0, _utils.isSelected)(selected, c.href, c.to);
          })) {
            open = true;
          }

          return _react.default.createElement(NavItem, {
            key: i,
            active: (0, _utils.isSelected)(selected, href, to),
            count: children && children.length,
            open: children && open
          }, _react.default.createElement(Link, {
            href: href,
            to: to,
            onClick: function onClick() {
              return _this2.setState({
                indexOpened: open ? undefined : i
              });
            }
          }, _react.default.createElement("i", {
            className: icon
          }), _react.default.createElement("span", null, title), !sidebarMini && children && _react.default.createElement(_CaretLeft.default, {
            className: "caret-left-icon",
            width: 6
          })), children && _react.default.createElement(SubNav, {
            className: "sub-nav"
          }, _react.default.createElement(Menu, {
            selected: selected,
            Link: Link
          }, children)));
        } else {
          if (sidebarMini) return null;
          return _react.default.createElement(NavTitle, {
            key: i
          }, _react.default.createElement("i", {
            className: icon
          }), title);
        }
      });
    }
  }]);

  return Menu;
}(_react.Component);

var Inner =
/*#__PURE__*/
function (_Component2) {
  _inherits(Inner, _Component2);

  function Inner() {
    _classCallCheck(this, Inner);

    return _possibleConstructorReturn(this, _getPrototypeOf(Inner).apply(this, arguments));
  }

  _createClass(Inner, [{
    key: "handleClickOutside",
    value: function handleClickOutside() {
      this.props.onClickOutside && this.props.onClickOutside();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          sideMenu = _this$props2.sideMenu,
          selected = _this$props2.selected,
          sidebarCollapse = _this$props2.sidebarCollapse,
          sidebarMini = _this$props2.sidebarMini,
          onSidebarMiniChange = _this$props2.onSidebarMiniChange,
          Link = _this$props2.Link;
      return _react.default.createElement(Sidebar, {
        sidebarCollapse: sidebarCollapse
      }, _react.default.createElement(SidebarContainer, {
        sidebarMini: sidebarMini
      }, _react.default.createElement(Nav, {
        sidebarMini: sidebarMini
      }, _react.default.createElement(Menu, {
        sidebarMini: sidebarMini,
        selected: selected,
        Link: Link
      }, sideMenu))), _react.default.createElement(SidebarMinimizer, {
        sidebarMini: sidebarMini,
        onClick: function onClick() {
          return onSidebarMiniChange(!sidebarMini);
        }
      }, _react.default.createElement(_CaretSquareLeft.default, null)));
    }
  }]);

  return Inner;
}(_react.Component);

var _default = (0, _reactClickOutside.default)(Inner);

exports.default = _default;