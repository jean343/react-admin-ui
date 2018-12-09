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
    viewBox: "0 0 192 512"
  }), _react.default.createElement("path", {
    fill: "currentColor",
    d: "M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"
  }));
};

exports.default = _default;