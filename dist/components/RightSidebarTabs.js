"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

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

function _templateObject3() {
  var data = _taggedTemplateLiteral(["position: relative;\noverflow-x: hidden;\noverflow-y: auto;\nborder: 0;\nheight: calc(100vh - ", " - ", ");\npadding: 1rem;\n&::-webkit-scrollbar {\n  width: 10px;\n  margin-left: -10px;\n  appearance: none;\n}\n&::-webkit-scrollbar-track {\n  background-color: ", ";\n  border-right: 1px solid ", ";\n  border-left: 1px solid ", ";\n}\n&::-webkit-scrollbar-thumb {\n  height: 50px;\n  background-color: ", ";\n  background-clip: content-box;\n  border-color: transparent;\n  border-style: solid;\n  border-width: 1px 2px;\n}"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["margin-bottom: -1px;\nlist-style: none;\n&& a {\n  cursor: pointer;\n  padding: 12px 1rem;\n  height: ", ";\n  color: ", " !important;\n  display: block;\n  background-color: #fff;\n  border-right: 1px solid ", ";\n  border-bottom: ", ";\n  transition: background-color 0.1s ease-in-out;\n}\n&& a :hover {\n  background-color: ", ";\n}"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["border-bottom: 1px solid ", ";\ndisplay: flex;\nflex-wrap: wrap;\npadding-left: 0;\nmargin-bottom: 0;\nlist-style: none;\nmargin-top: 0;"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var NavTabs = _styledComponents.default.ul(_templateObject(), function (props) {
  return [props["border-color"], (props.theme || {})["border-color"]].filter(function (v) {
    return v !== void 0;
  })[0];
});

var NavItem = _styledComponents.default.li(_templateObject2(), function (props) {
  return [props["sub-navbar-height"], (props.theme || {})["sub-navbar-height"]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return !![props["active"], (props.theme || {})["active"]].filter(function (v) {
    return v !== void 0;
  })[0] ? [props["primary"], (props.theme || {})["primary"]].filter(function (v) {
    return v !== void 0;
  })[0] : [props["body-color"], (props.theme || {})["body-color"]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["gray-300"], (props.theme || {})["gray-300"]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return !![props["active"], (props.theme || {})["active"]].filter(function (v) {
    return v !== void 0;
  })[0] ? "1px solid #fff" : "1px solid ".concat([props["border-color"], (props.theme || {})["border-color"]].filter(function (v) {
    return v !== void 0;
  })[0]);
}, function (props) {
  return [props["gray-100"], (props.theme || {})["gray-100"]].filter(function (v) {
    return v !== void 0;
  })[0];
});

var TabContent = _styledComponents.default.div(_templateObject3(), function (props) {
  return [props["sub-navbar-height"], (props.theme || {})["sub-navbar-height"]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["navbar-height"], (props.theme || {})["navbar-height"]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return require('tinycolor2')([props["aside-menu-bg"], (props.theme || {})["aside-menu-bg"]].filter(function (v) {
    return v !== void 0;
  })[0]).lighten(parseFloat("5%")).toHex8String();
}, function (props) {
  return require('tinycolor2')([props["aside-menu-bg"], (props.theme || {})["aside-menu-bg"]].filter(function (v) {
    return v !== void 0;
  })[0]).darken(parseFloat("5%")).toHex8String();
}, function (props) {
  return require('tinycolor2')([props["aside-menu-bg"], (props.theme || {})["aside-menu-bg"]].filter(function (v) {
    return v !== void 0;
  })[0]).darken(parseFloat("5%")).toHex8String();
}, function (props) {
  return require('tinycolor2')([props["aside-menu-bg"], (props.theme || {})["aside-menu-bg"]].filter(function (v) {
    return v !== void 0;
  })[0]).darken(parseFloat("10%")).toHex8String();
});

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      selectedTab: 1
    });

    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var sideBarTabs = this.props.sideBarTabs;
      var selectedTab = this.state.selectedTab;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(NavTabs, null, sideBarTabs.map(function (_ref, i) {
        var title = _ref.title,
            icon = _ref.icon;
        return _react.default.createElement(NavItem, {
          key: i,
          active: selectedTab === i
        }, _react.default.createElement("a", {
          title: title,
          onClick: function onClick() {
            return _this2.setState({
              selectedTab: i
            });
          }
        }, _react.default.createElement("i", {
          className: icon
        })));
      })), _react.default.createElement(TabContent, null, sideBarTabs[selectedTab].component));
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;