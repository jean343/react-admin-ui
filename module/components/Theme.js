function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import fs from 'fs';
import lessToJs from "less-vars-to-js";
const constants = lessToJs(fs.readFileSync(__dirname + "/../styles/variables.import.less", "utf8"), {
  stripPrefix: true,
  resolveVariables: true
});
export default class Theme extends Component {
  render() {
    const {
      children
    } = this.props;
    return React.createElement(ThemeProvider, {
      theme: constants
    }, children);
  }

}

_defineProperty(Theme, "defaultProps", {
  theme: 'skin-blue'
});