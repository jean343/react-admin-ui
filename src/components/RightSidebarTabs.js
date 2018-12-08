import React, {Component} from 'react';
import styled, {css} from 'styled-components';

const NavTabs = styled.ul`
  border-bottom: 1px solid @border-color;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  margin-top: 0;
`;
const NavItem = styled.li`
  margin-bottom: -1px;
  list-style: none;
  && a {
    cursor: pointer;
    padding: 12px 1rem;
    height: @sub-navbar-height;
    color: if(@active, @primary, @body-color) !important;
    display: block;
    background-color: #fff;
    border-right: 1px solid @gray-300;
    border-bottom: if(@active, 1px solid #fff, 1px solid @border-color);
    transition: background-color .1s ease-in-out;
    :hover {
      background-color: @gray-100;
    }
  }
`;
const TabContent = styled.div`
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  border: 0;
  height: calc(100vh - @sub-navbar-height - @navbar-height);
  padding: 1rem;
  
  &::-webkit-scrollbar {
    width: 10px;
    margin-left: -10px;
    appearance: none;
  }
  
  &::-webkit-scrollbar-track {
    background-color: lighten(@aside-menu-bg, 5%);
    border-right: 1px solid darken(@aside-menu-bg, 5%);
    border-left: 1px solid darken(@aside-menu-bg, 5%);
  }
  
  &::-webkit-scrollbar-thumb {
    height: 50px;
    background-color: darken(@aside-menu-bg, 10%);
    background-clip: content-box;
    border-color: transparent;
    border-style: solid;
    border-width: 1px 2px;
  }
`;

export default class extends Component {
  state = {selectedTab: 1};

  render() {
    const {sideBarTabs} = this.props;
    const {selectedTab} = this.state;
    return <>
      <NavTabs>
        {sideBarTabs.filter(m => !!m).map(({title, icon}, i) => {
          return <NavItem key={i} active={selectedTab === i}>
            <a title={title} onClick={() => this.setState({selectedTab: i})}><i className={icon}/></a>
          </NavItem>
        })}
      </NavTabs>
      <TabContent>
        {sideBarTabs[selectedTab].component}
      </TabContent>
    </>
  }
}