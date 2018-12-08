import React, { Component } from 'react';
import styled from 'styled-components';
const Toolbar = styled.div.withConfig({
  displayName: "Toolbar",
  componentId: "sc-12ykycd-0"
})(["height:", ";border-bottom:1px solid ", ";background-color:white;"], props => [props["sub-navbar-height"], (props.theme || {})["sub-navbar-height"], `40px`].filter(v => v !== void 0)[0], props => [props["gray-300"], (props.theme || {})["gray-300"], `#dadee4`].filter(v => v !== void 0)[0]);
export default class extends Component {
  render() {
    return React.createElement(Toolbar, null);
  }

}