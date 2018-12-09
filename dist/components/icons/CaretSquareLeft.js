"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = function _default(props) {
  return _react.default.createElement("svg", _extends({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }), _react.default.createElement("path", {
    fill: "currentColor",
    d: "M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zM259.515 124.485l-123.03 123.03c-4.686 4.686-4.686 12.284 0 16.971l123.029 123.029c7.56 7.56 20.485 2.206 20.485-8.485V132.971c.001-10.691-12.925-16.045-20.484-8.486z"
  }));
};

exports.default = _default;