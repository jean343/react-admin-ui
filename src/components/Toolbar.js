import React, {Component} from 'react';
import styled from 'styled-components';

const Toolbar = styled.div`
	height: @sub-navbar-height;
	border-bottom: 1px solid @gray-300;
	background-color: white;
`;

export default class extends Component {
  render() {
    return <Toolbar/>
  }
}