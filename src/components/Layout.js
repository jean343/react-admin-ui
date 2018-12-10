import React, {Component} from 'react';
import styled from 'styled-components';
import Header from './Header';
import {Body, Main, Content} from './Body';
import Sidebar from './Sidebar';
import RightSidebar from './RightSidebar';
import Toolbar from './Toolbar';
import Matchmedia from './Matchmedia';

const App = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
  a {
    color: @link-color;
    text-decoration: @link-decoration;
    
    :hover {
      color: darken(@link-color, 15%);
      text-decoration: @link-hover-decoration;
    }
  }
`;

export default class Layout extends Component {
  static defaultProps = {
    initialCollapse: false,
    initialMini: false,
    initialRightSidebarCollapse: true,
  };
  state = {
    lg: false,
    md: false,
    sidebarOpened: false,
    sidebarCollapse: this.props.initialCollapse,
    sidebarMini: this.props.initialMini,
    rightSidebarCollapse: this.props.initialRightSidebarCollapse,
  };

  onNavbarToggle = () => {
    const {lg, sidebarOpened, sidebarCollapse} = this.state;
    if (lg) {
      this.setState({sidebarOpened: !sidebarOpened})
    } else {
      this.setState({sidebarCollapse: !sidebarCollapse})
    }
  };

  render() {
    const {sideMenu, topMenu, selected, sideBarTabs, children, logo, sideBarHeader, toolbar, rightToolbar, linkComponent = "a"} = this.props;
    const {lg, md, sidebarOpened, sidebarCollapse, rightSidebarCollapse, sidebarMini} = this.state;
    return <App>
      <Matchmedia query="screen and (max-width: 991.98px)" onMatch={matches => this.setState({lg: matches})}/>
      <Matchmedia query="screen and (max-width: 767.98px)" onMatch={matches => this.setState({md: matches, sidebarOpened: false})}/>
      <Header logo={logo} lg={lg}
              topMenu={topMenu} selected={selected}
              onNavbarToggle={this.onNavbarToggle}
              onRightNavbarToggle={() => this.setState({rightSidebarCollapse: !rightSidebarCollapse})}
              Link={linkComponent}
      />
      <Body>
      <Sidebar
        lg={lg}
        sideMenu={sideMenu}
        sideBarHeader={sideBarHeader}
        selected={selected}
        sidebarCollapse={!sidebarOpened && (md || sidebarCollapse)}
        sidebarMini={!sidebarOpened && (lg || sidebarMini)}
        onSidebarMiniChange={sidebarMini => this.setState({sidebarMini})}
        onClickOutside={() => sidebarOpened && setTimeout(() => this.setState({sidebarOpened: false}), 0)}
        Link={linkComponent}/>

      <Main sidebarCollapse={md || sidebarCollapse} sidebarMini={lg || sidebarMini} rightSidebarCollapse={lg || rightSidebarCollapse}>
        <Toolbar toolbar={toolbar} rightToolbar={rightToolbar}/>
        <Content>{children}</Content>
      </Main>
      <RightSidebar rightSidebarCollapse={lg || rightSidebarCollapse} sideBarTabs={sideBarTabs}/>
      </Body>
      {/*<Footer/>*/}
    </App>
  }
}