import React, {Component} from 'react';
import styled from 'styled-components';
import Header from './Header';
import {Body, Main} from './Body';
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
    initialRightSidebarCollapse: false,
  };
  state = {
    small: false,
    sidebarOpened: false,
    sidebarCollapse: this.props.initialCollapse,
    sidebarMini: this.props.initialMini,
    rightSidebarCollapse: this.props.initialRightSidebarCollapse,
  };

  onNavbarToggle = () => {
    const {small, sidebarOpened, sidebarCollapse} = this.state;
    if (small) {
      this.setState({sidebarOpened: !sidebarOpened})
    } else {
      this.setState({sidebarCollapse: !sidebarCollapse})
    }
  };

  render() {
    const {sideMenu, topMenu, selected, sideBarTabs, children, logo} = this.props;
    const {small, sidebarOpened, sidebarCollapse, rightSidebarCollapse, sidebarMini} = this.state;
    return <App>
      <Matchmedia query="screen and (max-width: 991.98px)" onMatch={matches => this.setState({small: matches, sidebarOpened: false})}/>
      <Header logo={logo} small={small}
              topMenu={topMenu} selected={selected}
              onNavbarToggle={this.onNavbarToggle}
              onRightNavbarToggle={() => this.setState({rightSidebarCollapse: !rightSidebarCollapse})}
      />
      <Body>
      <Sidebar
        sideMenu={sideMenu}
        selected={selected}
        sidebarCollapse={!sidebarOpened && (small || sidebarCollapse)}
        sidebarMini={sidebarMini}
        onSidebarMiniChange={sidebarMini => this.setState({sidebarMini})}
        onClickOutside={() => this.setState({sidebarOpened: false})}/>

      <Main sidebarCollapse={small || sidebarCollapse} sidebarMini={sidebarMini} rightSidebarCollapse={small || rightSidebarCollapse}>
        <Toolbar/>
        <div>{children}</div>
      </Main>
      <RightSidebar rightSidebarCollapse={small || rightSidebarCollapse} sideBarTabs={sideBarTabs}/>
      </Body>
      {/*<Footer/>*/}
    </App>
  }
}