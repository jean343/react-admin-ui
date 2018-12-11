import React, {Component} from 'react';
import styled, {css} from 'styled-components';

const NavTabs = styled.ul`
  border-bottom: @border-width solid @border-color;
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
    border-right: @border-width solid @border-color;
    border-bottom: if(@active, @border-width solid #fff, @border-width solid @border-color);
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
  
  &::-webkit-scrollbar-thumb {
    background-color: darken(@aside-menu-bg, 14%);
    background-clip: content-box;
    border-color: transparent;
    border-style: solid;
    border-width: 1px 2px;
    border-radius: 4px;
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