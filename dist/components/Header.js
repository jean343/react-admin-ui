"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

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

function _templateObject5() {
  var data = _taggedTemplateLiteral(["cursor: pointer;\nposition: relative;\nmargin: 0;\ntext-align: center;\npadding-left: 1rem;\npadding-right: 1rem;\ntransition: background-color 0.1s ease-in-out;\nbackground-color: ", ";\n:hover {\n  background-color: ", ";\n}\n&& a {\n  display: flex;\n  height: ", ";\n  color: ", " !important;\n  align-items: center;\n}\n&& a :hover {\n  text-decoration: none;\n}\nspan {\n  margin-left: 0.5rem;\n}\n@media (max-width: ", ") {\n  span {\n    display: none;\n  }\n  i {\n    font-size: 1.1em;\n  }\n}"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["flex-direction: row;\nalign-items: center;\ndisplay: flex;\npadding-left: 0;\nmargin-bottom: 0;\nlist-style: none;\nmargin-top: 0;"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["display: inline-flex;\nalign-items: center;\njustify-content: center;\nwidth: ", ";\nheight: ", ";\npadding: 0;\nmargin-right: 0;\nbackground-color: ", ";\n@media (max-width: ", ") {\n  display: none;\n}"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["cursor: pointer;\npadding: 0;\nwidth: 50px;\nheight: ", ";\nbackground-color: transparent;\nborder: ", " solid transparent;\nborder-radius: 4px;\ncolor: ", ";\nfont-size: 1.2em;\n:hover {\n  color: ", ";\n}"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["flex-direction: row;\nheight: ", ";\npadding: 0;\nmargin: 0;\nbackground-color: ", ";\nposition: fixed;\nz-index: ", ";\nwidth: 100%;\ntext-align: center;\nborder-bottom: 1px solid ", ";\ndisplay: flex;\nflex-wrap: wrap;\nalign-items: center;\njustify-content: space-between;"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Header = _styledComponents.default.header(_templateObject(), function (props) {
  return [props["navbar-height"], (props.theme || {})["navbar-height"]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["navbar-bg"], (props.theme || {})["navbar-bg"]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["zindex-sticky"], (props.theme || {})["zindex-sticky"]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["gray-300"], (props.theme || {})["gray-300"]].filter(function (v) {
    return v !== void 0;
  })[0];
});

var NavbarToggler = _styledComponents.default.button(_templateObject2(), function (props) {
  return [props["navbar-height"], (props.theme || {})["navbar-height"]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["border-width"], (props.theme || {})["border-width"]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["gray-300"], (props.theme || {})["gray-300"]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["gray-900"], (props.theme || {})["gray-900"]].filter(function (v) {
    return v !== void 0;
  })[0];
});

var NavbarBrand = _styledComponents.default.a(_templateObject3(), function (props) {
  return parseFloat([props["sidebar-width"], (props.theme || {})["sidebar-width"]].filter(function (v) {
    return v !== void 0;
  })[0]) - parseFloat(50) + "px";
}, function (props) {
  return [props["navbar-height"], (props.theme || {})["navbar-height"]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["navbar-brand-bg"], (props.theme || {})["navbar-brand-bg"]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["sm"], (props.theme || {})["sm"]].filter(function (v) {
    return v !== void 0;
  })[0];
});

var NavbarNav = _styledComponents.default.ul(_templateObject4());

var NavItem = _styledComponents.default.li(_templateObject5(), function (props) {
  return !![props["active"], (props.theme || {})["active"]].filter(function (v) {
    return v !== void 0;
  })[0] ? [props["gray-100"], (props.theme || {})["gray-100"]].filter(function (v) {
    return v !== void 0;
  })[0] : undefined;
}, function (props) {
  return [props["gray-200"], (props.theme || {})["gray-200"]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return parseFloat([props["navbar-height"], (props.theme || {})["navbar-height"]].filter(function (v) {
    return v !== void 0;
  })[0]) - parseFloat(1) + (('' + [props["navbar-height"], (props.theme || {})["navbar-height"]].filter(function (v) {
    return v !== void 0;
  })[0]).replace(/[\d.-]*/, "") || ('' + 1).replace(/[\d.-]*/, ""));
}, function (props) {
  return !![props["active"], (props.theme || {})["active"]].filter(function (v) {
    return v !== void 0;
  })[0] ? [props["primary"], (props.theme || {})["primary"]].filter(function (v) {
    return v !== void 0;
  })[0] : [props["navbar-color"], (props.theme || {})["navbar-color"]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["sm"], (props.theme || {})["sm"]].filter(function (v) {
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
          logo = _this$props.logo;
      return _react.default.createElement(Header, null, _react.default.createElement(NavbarBrand, null, logo), _react.default.createElement(NavbarToggler, {
        onClick: onNavbarToggle
      }, _react.default.createElement("i", {
        className: "fas fa-bars"
      })), _react.default.createElement(NavbarNav, null, topMenu.map(function (_ref, i) {
        var title = _ref.title,
            href = _ref.href,
            icon = _ref.icon;
        return _react.default.createElement(NavItem, {
          key: i,
          active: selected === href
        }, _react.default.createElement("a", {
          href: href
        }, _react.default.createElement("i", {
          className: icon
        }), _react.default.createElement("span", null, title)));
      })), _react.default.createElement("div", {
        style: {
          flex: 1
        }
      }), !small && _react.default.createElement(NavbarToggler, {
        onClick: onRightNavbarToggle
      }, _react.default.createElement("i", {
        className: "fas fa-bars"
      })));
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;