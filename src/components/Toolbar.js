import React, {Component, Children} from 'react';
import styled from 'styled-components';

const Toolbar = styled.div`
  @media print {
    display: none;
  }
  height: @sub-navbar-height;
  border-bottom: 1px solid @gray-300;
  background-color: white;
  display: flex;
  .toolbar-item {
    cursor: pointer;
    width: @sub-navbar-height;
    
    transition: background-color .1s ease-in-out;
    :hover {
      background-color: @gray-100;
    }
  }
`;
const Left = styled.div`
  display: flex;
  .toolbar-item {
    border-right: 1px solid @gray-300;
  }
`;
const Right = styled.div`
  display: flex;
  .toolbar-item {
    border-left: 1px solid @gray-300;
  }
`;

export default class extends Component {
  render() {
    const {toolbar, rightToolbar} = this.props;
    return <Toolbar>
      <Left>{toolbar}</Left>
      <div style={{flex: 1}}/>
      <Right>{rightToolbar}</Right>
    </Toolbar>
  }
}