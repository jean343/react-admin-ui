import React, {Component} from 'react';

export default class Matchmedia extends Component {
  componentDidMount() {
    this.mediaQueryList = window.matchMedia(this.props.query);
    this.props.onMatch(this.mediaQueryList.matches);
    this.mediaQueryList.addListener(this.onChange);
  }

  componentWillUnmount() {
    this.mediaQueryList.removeListener(this.onChange);
  }

  onChange = evt => {
    this.props.onMatch(evt.matches);
  };

  render() {
    return null;
  }
}