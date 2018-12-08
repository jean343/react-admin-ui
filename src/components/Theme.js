import React, {Component} from 'react';
import {ThemeProvider} from 'styled-components';

export default class Theme extends Component {
  render() {
    const {children, theme = {}} = this.props;
    return <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  }
}