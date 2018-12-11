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

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Footer = _styledComponents.default.footer.withConfig({
  displayName: "Footer",
  componentId: "rum83t-0"
})(["display:flex;flex-wrap:wrap;align-items:center;padding:0 ", ";color:", ";background:", ";border-top:", " solid ", ";flex:0 0 ", ";span:first-child{flex:1;}"], function (props) {
  return [props["spacer"], (props.theme || {})["spacer"], "1rem"].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["footer-color"], (props.theme || {})["footer-color"], [props["body-color"], (props.theme || {})["body-color"], [props["gray-900"], (props.theme || {})["gray-900"], "#313742"].filter(function (v) {
    return v !== void 0;
  })[0]].filter(function (v) {
    return v !== void 0;
  })[0]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["footer-bg"], (props.theme || {})["footer-bg"], [props["gray-100"], (props.theme || {})["gray-100"], "#f8f8fa"].filter(function (v) {
    return v !== void 0;
  })[0]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["border-width"], (props.theme || {})["border-width"], "1px"].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["border-color"], (props.theme || {})["border-color"], [props["gray-300"], (props.theme || {})["gray-300"], "#dadee4"].filter(function (v) {
    return v !== void 0;
  })[0]].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["footer-height"], (props.theme || {})["footer-height"], "50px"].filter(function (v) {
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
      _objectDestructuringEmpty(this.props);

      return _react.default.createElement(Footer, null, _react.default.createElement("span", null, _react.default.createElement("a", {
        href: "https://coreui.io"
      }, "CoreUI"), " \xA9 2018 creativeLabs."), _react.default.createElement("span", null, "Powered by ", _react.default.createElement("a", {
        href: "https://coreui.io/react"
      }, "CoreUI for React")));
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;