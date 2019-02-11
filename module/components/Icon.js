import React, { Component, isValidElement } from 'react';
export default class Icon extends Component {
  render() {
    const {
      icon
    } = this.props;

    if (isValidElement(icon)) {
      return icon;
    }

    return React.createElement("i", {
      className: icon
    });
  }

}