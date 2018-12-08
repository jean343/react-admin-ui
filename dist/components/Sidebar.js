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

function _templateObject7() {
  var data = _taggedTemplateLiteral(["position: relative;\nflex: 0 0 50px;\ncursor: pointer;\nbackground-color: ", ";\nborder: 0;\ncolor: ", ";\noverflow: hidden;\ntransition: all 0.1s ease-in-out;\ni {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 50px;\n  height: 50px;\n  font-size: 1.5rem;\n  line-height: 50px;\n  transition: transform 0.3s ease-in-out;\n  transform: ", ";\n}\n&:focus {\n  outline: 0;\n}\n&:hover {\n  background-color: ", ";\n  color: ", ";\n}"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["padding: 0.75rem 1rem;\nfont-size: 80%;\nfont-weight: 700;\ncolor: ", ";\ntext-transform: uppercase;\noverflow: hidden;"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["min-height: 0;\nmax-height: 0;"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["display: flex;\nwidth: ", ";\nflex-direction: column;\npadding: 0;\nlist-style: none;\nmargin: 0;\ntransition: max-height 0.3s ease-in-out, width 0.25s;\noverflow-y: ", ";"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["height: 100%;\nflex: 1 1;\noverflow-y: ", ";"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["transform: translateX(", ");"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["position: fixed;\ndisplay: flex;\nflex-direction: column;\npadding: ", ";\ncolor: ", ";\nbackground: ", ";\nheight: calc(100vh - ", ");\ntransition: transform 0.25s;\n", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Sidebar = _styledComponents.default.div(_templateObject(), function (props) {
  return [props["sidebar-padding"], (props.theme || {})["sidebar-padding"]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["sidebar-color"], (props.theme || {})["sidebar-color"]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["sidebar-bg"], (props.theme || {})["sidebar-bg"]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["navbar-height"], (props.theme || {})["navbar-height"]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return props.sidebarCollapse && (0, _styledComponents.css)(_templateObject2(), function (props) {
    return "-" + [props["sidebar-width"], (props.theme || {})["sidebar-width"]].filter(function (v) {
      return v !== void 0;
    })[0];
  });
});

var SidebarContainer = _styledComponents.default.div(_templateObject3(), function (props) {
  return !![props["sidebarMini"], (props.theme || {})["sidebarMini"]].filter(function (v) {
    return v !== void 0;
  })[0] ? "visible" : "auto";
});

var Nav = _styledComponents.default.ul(_templateObject4(), function (props) {
  return !![props["sidebarMini"], (props.theme || {})["sidebarMini"]].filter(function (v) {
    return v !== void 0;
  })[0] ? [props["sidebar-minimized-width"], (props.theme || {})["sidebar-minimized-width"]].filter(function (v) {
    return v !== void 0;
  })[0] : [props["sidebar-width"], (props.theme || {})["sidebar-width"]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return !![props["sidebarMini"], (props.theme || {})["sidebarMini"]].filter(function (v) {
    return v !== void 0;
  })[0] ? "visible" : "hidden";
});

var SubNav = (0, _styledComponents.default)(Nav)(_templateObject5());

var NavTitle = _styledComponents.default.li(_templateObject6(), function (props) {
  return [props["sidebar-nav-title-color"], (props.theme || {})["sidebar-nav-title-color"]].filter(function (v) {
    return v !== void 0;
  })[0];
});

var SidebarMinimizer = _styledComponents.default.button(_templateObject7(), function (props) {
  return require("tinycolor2")({
    r: "0",
    g: "0",
    b: "0",
    a: "0.2"
  }).toHex8String();
}, function (props) {
  return [props["sidebar-bg"], (props.theme || {})["sidebar-bg"]].filter(function (v) {
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
  return [props["gray-500"], (props.theme || {})["gray-500"]].filter(function (v) {
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
    key: "isActive",
    value: function isActive(selected, href) {
      return selected === href;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          sidebarMini = _this$props.sidebarMini,
          selected = _this$props.selected;
      var indexOpened = this.state.indexOpened;
      var NavItem = sidebarMini ? _NavItemMinimized.NavItemMinimized : _NavItemMaximized.NavItemMaximized;
      return children.map(function (_ref, i) {
        var title = _ref.title,
            href = _ref.href,
            icon = _ref.icon,
            children = _ref.children;

        if (href || children) {
          var open = indexOpened === i;

          if (Array.isArray(children) && children.some(function (c) {
            return _this2.isActive(selected, c.href);
          })) {
            open = true;
          }

          return _react.default.createElement(NavItem, {
            key: i,
            active: _this2.isActive(selected, href),
            count: children && children.length,
            open: children && open
          }, _react.default.createElement("a", {
            href: href,
            onClick: function onClick() {
              return _this2.setState({
                indexOpened: open ? undefined : i
              });
            }
          }, _react.default.createElement("i", {
            className: icon
          }), _react.default.createElement("span", null, title), !sidebarMini && children && _react.default.createElement("i", {
            className: "fa caret fa-caret-left"
          })), children && _react.default.createElement(SubNav, {
            className: "sub-nav"
          }, _react.default.createElement(Menu, {
            selected: selected
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
          onSidebarMiniChange = _this$props2.onSidebarMiniChange;
      return _react.default.createElement(Sidebar, {
        sidebarCollapse: sidebarCollapse
      }, _react.default.createElement(SidebarContainer, {
        sidebarMini: sidebarMini
      }, _react.default.createElement(Nav, {
        sidebarMini: sidebarMini
      }, _react.default.createElement(Menu, {
        sidebarMini: sidebarMini,
        selected: selected
      }, sideMenu))), _react.default.createElement(SidebarMinimizer, {
        sidebarMini: sidebarMini,
        onClick: function onClick() {
          return onSidebarMiniChange(!sidebarMini);
        }
      }, _react.default.createElement("i", {
        className: "fa fa-caret-square-o-left"
      })));
    }
  }]);

  return Inner;
}(_react.Component);

var _default = (0, _reactClickOutside.default)(Inner);

exports.default = _default;