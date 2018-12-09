import React, {Component} from 'react';
import styled from 'styled-components';
import Bars from './icons/Bars';

const Header = styled.header`
	flex-direction: row;
	height: @navbar-height;
	padding: 0;
	margin: 0;
	background-color: @navbar-bg;
	
	position: fixed;
	z-index: @zindex-sticky;
	width: 100%;
	text-align: center;
	border-bottom: 1px solid @gray-300;
	
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
`;

const NavbarToggler = styled.button`
	cursor: pointer;
	padding: 0;
	width: 50px;
	height: @navbar-height;
	background-color: transparent; // remove default button style
	border: @border-width solid transparent; // remove default button style
	border-radius: 4px;
	color: @gray-300;
	font-size: 0;
	:hover {
		color: @gray-900;
	}
`;
const NavbarBrand = styled.a`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: @sidebar-width - 50px;
	height: @navbar-height;
	padding: 0;
	margin-right: 0;
	background-color: @navbar-brand-bg;
	@media (max-width: @sm) {
		display: none;
	}
`;
const NavbarNav = styled.ul`
	flex-direction: row;
	align-items: center;
	display: flex;
	padding-left: 0;
	margin-bottom: 0;
	list-style: none;
	margin-top: 0;
`;
const NavItem = styled.li`
	cursor: pointer;
	position: relative;
	margin: 0;
	text-align: center;
	padding-left: 1rem;
	padding-right: 1rem;
	transition: background-color .1s ease-in-out;
	background-color: if(@active, @gray-100);
	:hover {
		background-color: @gray-200;
	}
	&& a {
		display: flex;
		height: @navbar-height - 1;
		color: if(@active, @primary, @navbar-color) !important;
		align-items: center;
		:hover {
			text-decoration: none;
		}
	}
	span {
		margin-left: 0.5rem;
	}
	@media (max-width: @sm) {
		span {
			display: none;
		}	
		i {
			font-size: 1.1em;
		}
	}
`;

export default class extends Component {
  render() {
    const {small, topMenu, onNavbarToggle, onRightNavbarToggle, selected, logo} = this.props;
    return <Header>
      <NavbarBrand>{logo}</NavbarBrand>
      <NavbarToggler onClick={onNavbarToggle}>
        <Bars width={14}/>
      </NavbarToggler>
      <NavbarNav>
        {topMenu.filter(m => !!m).map(({title, href, icon}, i) => {
          return <NavItem key={i} active={selected === href}>
            <a href={href}>
              <i className={icon}></i>
              <span>{title}</span>
            </a>
          </NavItem>
        })}
      </NavbarNav>
      <div style={{flex: 1}}/>
      {!small && <NavbarToggler onClick={onRightNavbarToggle}>
        <Bars width={14}/>
      </NavbarToggler>}
    </Header>
  }
}