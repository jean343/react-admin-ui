import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import {NavItemMaximized} from './NavItemMaximized';
import {NavItemMinimized} from './NavItemMinimized';
import ClickOutside from "react-click-outside";

const Sidebar = styled.div`
	position: fixed;
	display: flex;
	flex-direction: column;
	padding: @sidebar-padding;
	color: @sidebar-color;
	background: @sidebar-bg;
	height: calc(100vh - @navbar-height);
	
	transition: transform .25s;
	${props => props.sidebarCollapse && css`
		transform: translateX(-@sidebar-width);
	`};
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
	i {
		position: absolute;
		top: 0;
		right: 0;
		width: 50px;
		height: 50px;
		font-size: 1.5rem;
		line-height: 50px;
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

  isActive(selected, href) {
    return selected === href;
  }

  render() {
    const {children, sidebarMini, selected} = this.props;
    const {indexOpened} = this.state;

    const NavItem = sidebarMini ? NavItemMinimized : NavItemMaximized;

    return children.map(({title, href, icon, children}, i) => {
      if (href || children) {
        let open = indexOpened === i;
        if (Array.isArray(children) && children.some(c => this.isActive(selected, c.href))) {
          open = true;
        }
        return <NavItem
          key={i}
          active={this.isActive(selected, href)}
          count={children && children.length}
          open={children && open}>

          <a href={href} onClick={() => this.setState({indexOpened: open ? undefined : i})}>
            <i className={icon}></i>
            <span>{title}</span>
            {!sidebarMini && children && <i className="fa caret fa-caret-left"/>}
          </a>
          {children && <SubNav className="sub-nav">
            <Menu selected={selected}>{children}</Menu>
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
    const {sideMenu, selected, sidebarCollapse, sidebarMini, onSidebarMiniChange} = this.props;
    return <Sidebar sidebarCollapse={sidebarCollapse}>
      <SidebarContainer sidebarMini={sidebarMini}>
        <Nav sidebarMini={sidebarMini}>
          <Menu sidebarMini={sidebarMini} selected={selected}>{sideMenu}</Menu>
        </Nav>
      </SidebarContainer>
      <SidebarMinimizer sidebarMini={sidebarMini} onClick={() => onSidebarMiniChange(!sidebarMini)}><i className="fa fa-caret-square-o-left"/></SidebarMinimizer>
    </Sidebar>
  }
}

export default ClickOutside(Inner);