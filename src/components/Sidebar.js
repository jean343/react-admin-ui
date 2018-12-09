import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import {NavItemMaximized} from './NavItemMaximized';
import {NavItemMinimized} from './NavItemMinimized';
import ClickOutside from "react-click-outside";
import CaretLeft from "./icons/CaretLeft";
import CaretSquareLeft from "./icons/CaretSquareLeft";
import {isSelected} from './utils';

const Sidebar = styled.div`
	position: fixed;
	display: flex;
	flex-direction: column;
	padding: @sidebar-padding;
	color: @sidebar-color;
	background: @sidebar-bg;
	height: calc(100vh - @navbar-height);
	z-index: 1;
	
	transition: transform .25s;
	transform: if(@sidebarCollapse, translateX(-1 * @sidebar-width));
`;
const SidebarContainer = styled.div`
	height: 100%;
	flex: 1 1;
	overflow-y: if(@sidebarMini, visible, auto);
`;

const Nav = styled.ul`
	display: flex;
	width: if(@sidebarMini, @sidebar-minimized-width, @sidebar-width);
	flex-direction: column;
	padding: 0;
	list-style: none;
	margin: 0;
	transition: max-height .3s ease-in-out, width .25s;
	overflow-y: if(@sidebarMini, visible, hidden);
`;
const SubNav = styled(Nav)`
	min-height: 0;
	max-height: 0;
	a {
		padding: 0 calc(1rem - 3px);
	}
`;

const NavTitle = styled.li`
	padding: .75rem 1rem;
	font-size: 80%;
	font-weight: 700;
	color: @sidebar-nav-title-color;
	text-transform: uppercase;
	overflow: hidden;
`;

const SidebarMinimizer = styled.button`
	position: relative;
	flex: 0 0 50px;
	cursor: pointer;
	background-color: rgba(0, 0, 0, .2);
	border: 0;
	color: @sidebar-bg;
	overflow: hidden;
	transition: all .1s ease-in-out;
	text-align: right;
	padding: 0;
	svg {
		width: @sidebar-minimized-width;
		height: 20px;
		transition: transform .3s ease-in-out;
		transform: if(@sidebarMini, rotate(-180deg));
	}
	&:focus {
		outline: 0;
	}
	&:hover {
		background-color: rgba(0, 0, 0, .3);
		color: @gray-500;
	}
`;

class Menu extends Component {
  state = {
    indexOpened: undefined
  };

  render() {
    const {children, sidebarMini, selected, Link} = this.props;
    const {indexOpened} = this.state;

    const NavItem = sidebarMini ? NavItemMinimized : NavItemMaximized;

    return children.filter(m => !!m).map(({title, href, to, icon, children}, i) => {
      if (href || to || children) {
        let open = indexOpened === i;
        if (Array.isArray(children) && children.filter(m => !!m).some(c => isSelected(selected, c.href, c.to))) {
          open = true;
        }
        return <NavItem
          key={i}
          active={isSelected(selected, href, to)}
          count={children && children.length}
          open={children && open}
          hasChild={!!children}>

          <Link href={href} to={to} onClick={() => this.setState({indexOpened: open ? undefined : i})}>
            <i className={icon}></i>
            <span>{title}</span>
            {!sidebarMini && children && <CaretLeft className="caret-left-icon" width={6}/>}
          </Link>
          {children && <SubNav className="sub-nav">
            <Menu selected={selected} Link={Link}>{children}</Menu>
          </SubNav>}
        </NavItem>
      } else {
        if (sidebarMini) return null;
        return <NavTitle key={i}>
          <i className={icon}></i>{title}
        </NavTitle>
      }
    });
  }
}

class Inner extends Component {
  handleClickOutside() {
    this.props.onClickOutside && this.props.onClickOutside();
  }

  render() {
    const {sideMenu, selected, sidebarCollapse, sidebarMini, onSidebarMiniChange, Link} = this.props;
    return <Sidebar sidebarCollapse={sidebarCollapse}>
      <SidebarContainer sidebarMini={sidebarMini}>
        <Nav sidebarMini={sidebarMini}>
          <Menu sidebarMini={sidebarMini} selected={selected} Link={Link}>{sideMenu}</Menu>
        </Nav>
      </SidebarContainer>
      <SidebarMinimizer sidebarMini={sidebarMini} onClick={() => onSidebarMiniChange(!sidebarMini)}>
        <CaretSquareLeft/>
      </SidebarMinimizer>
    </Sidebar>
  }
}

export default ClickOutside(Inner);