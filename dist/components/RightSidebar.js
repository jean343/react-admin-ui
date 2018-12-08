"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _RightSidebarTabs = _interopRequireDefault(require("./RightSidebarTabs"));

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

function _templateObject3() {
  var data = _taggedTemplateLiteral(["height: 100%;\nflex: 1 1;"]);

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
  var data = _taggedTemplateLiteral(["width: ", ";\nright: 0;\nposition: fixed;\ndisplay: flex;\nflex-direction: column;\npadding: ", ";\ncolor: ", ";\nbackground: ", ";\nheight: calc(100vh - ", ");\nborder-left: 1px solid ", ";\ntransition: transform 0.25s;\n", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Sidebar = _styledComponents.default.div(_templateObject(), function (props) {
  return [props["aside-menu-width"], (props.theme || {})["aside-menu-width"]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["sidebar-padding"], (props.theme || {})["sidebar-padding"]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["gray-800"], (props.theme || {})["gray-800"]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["aside-menu-bg"], (props.theme || {})["aside-menu-bg"]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["navbar-height"], (props.theme || {})["navbar-height"]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["border-color"], (props.theme || {})["border-color"]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return props.rightSidebarCollapse && (0, _styledComponents.css)(_templateObject2(), function (props) {
    return [props["aside-menu-width"], (props.theme || {})["aside-menu-width"]].filter(function (v) {
      return v !== void 0;
    })[0];
  });
});

var SidebarContainer = _styledComponents.default.div(_templateObject3());

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
          rightSidebarCollapse = _this$props.rightSidebarCollapse,
          sideBarTabs = _this$props.sideBarTabs;
      return _react.default.createElement(Sidebar, {
        rightSidebarCollapse: rightSidebarCollapse
      }, _react.default.createElement(SidebarContainer, null, _react.default.createElement(_RightSidebarTabs.default, {
        sideBarTabs: sideBarTabs
      })));
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;