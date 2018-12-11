import React, {Component, Children} from 'react';
import styled from 'styled-components';

const Toolbar = styled.div`
  @media print {
    display: none;
  }
  height: @sub-navbar-height;
  border-bottom: @border-width solid @border-color;
  background-color: white;
  display: flex;
  .toolbar-item {
    cursor: pointer;
    width: @sub-navbar-height * 1.1;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    transition: background-color .1s ease-in-out;
    :hover {
      background-color: @gray-100;
    }
  }
`;
const Left = styled.div`
  display: flex;
  border-right: @border-width solid @border-color;
`;
const Right = styled.div`
  display: flex;
  border-left: @border-width solid @border-color;
`;

export default class extends Component {
  render() {
    const {toolbar, rightToolbar} = this.props;
    return <Toolbar>
      {toolbar && <Left>{toolbar}</Left>}
      <div style={{flex: 1}}/>
      {rightToolbar && <Right>{rightToolbar}</Right>}
    </Toolbar>
  }
}