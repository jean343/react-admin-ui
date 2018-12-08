import React, { Component } from 'react';
import styled from 'styled-components';
const Toolbar = styled.div`height: ${props => [props["sub-navbar-height"], (props.theme || {})["sub-navbar-height"]].filter(v => v !== void 0)[0]};
border-bottom: 1px solid ${props => [props["gray-300"], (props.theme || {})["gray-300"]].filter(v => v !== void 0)[0]};
background-color: white;`;
export default class extends Component {
  render() {
    return React.createElement(Toolbar, null);
  }

}