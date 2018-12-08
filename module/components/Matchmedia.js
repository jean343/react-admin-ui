function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
export default class Matchmedia extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onChange", evt => {
      this.props.onMatch(evt.matches);
    });
  }

  componentDidMount() {
    this.mediaQueryList = window.matchMedia(this.props.query);
    this.props.onMatch(this.mediaQueryList.matches);
    this.mediaQueryList.addEventListener('change', this.onChange);
  }

  componentWillUnmount() {
    this.mediaQueryList.removeEventListener('change', this.onChange);
  }

  render() {
    return null;
  }

}