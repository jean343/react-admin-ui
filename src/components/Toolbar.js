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
  position: fixed;
  z-index: 1019;
  width: 100%;
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
  :empty {
    display: none;
  }
`;

export default class extends Component {
  render() {
    let {toolbar} = this.props;
    if (!Array.isArray(toolbar)) {
      toolbar = [toolbar];
    }
    return <Toolbar>
      {toolbar.map(t => <Left>{t}</Left>)}
    </Toolbar>
  }
}