import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
export default class Theme extends Component {
  render() {
    const {
      children,
      theme = {}
    } = this.props;
    return React.createElement(ThemeProvider, {
      theme: theme
    }, children);
  }

}