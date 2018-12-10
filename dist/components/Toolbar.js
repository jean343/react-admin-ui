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

var Toolbar = _styledComponents.default.div.withConfig({
  displayName: "Toolbar",
  componentId: "sc-12ykycd-0"
})(["@media print{display:none;}height:", ";border-bottom:1px solid ", ";background-color:white;display:flex;.toolbar-item{cursor:pointer;width:", ";display:flex;align-items:center;justify-content:center;transition:background-color 0.1s ease-in-out;}.toolbar-item:hover{background-color:", ";}"], function (props) {
  return [props["sub-navbar-height"], (props.theme || {})["sub-navbar-height"], "40px"].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return [props["gray-300"], (props.theme || {})["gray-300"], "#dadee4"].filter(function (v) {
    return v !== void 0;
  })[0];
}, function (props) {
  return parseFloat([props["sub-navbar-height"], (props.theme || {})["sub-navbar-height"], "40px"].filter(function (v) {
    return v !== void 0;
  })[0]) * parseFloat(1.1) + (('' + [props["sub-navbar-height"], (props.theme || {})["sub-navbar-height"], "40px"].filter(function (v) {
    return v !== void 0;
  })[0]).replace(/[\d.-]*/, "") || ('' + 1.1).replace(/[\d.-]*/, ""));
}, function (props) {
  return [props["gray-100"], (props.theme || {})["gray-100"], "#f8f8fa"].filter(function (v) {
    return v !== void 0;
  })[0];
});

var Left = _styledComponents.default.div.withConfig({
  displayName: "Toolbar__Left",
  componentId: "sc-12ykycd-1"
})(["display:flex;border-right:1px solid ", ";"], function (props) {
  return [props["gray-300"], (props.theme || {})["gray-300"], "#dadee4"].filter(function (v) {
    return v !== void 0;
  })[0];
});

var Right = _styledComponents.default.div.withConfig({
  displayName: "Toolbar__Right",
  componentId: "sc-12ykycd-2"
})(["display:flex;border-left:1px solid ", ";"], function (props) {
  return [props["gray-300"], (props.theme || {})["gray-300"], "#dadee4"].filter(function (v) {
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
          toolbar = _this$props.toolbar,
          rightToolbar = _this$props.rightToolbar;
      return _react.default.createElement(Toolbar, null, toolbar && _react.default.createElement(Left, null, toolbar), _react.default.createElement("div", {
        style: {
          flex: 1
        }
      }), rightToolbar && _react.default.createElement(Right, null, rightToolbar));
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;