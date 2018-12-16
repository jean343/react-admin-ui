import React, {Component} from 'react';
import styled from 'styled-components';
import Bars from './icons/Bars';
import {isSelected} from './utils';

const Header = styled.header`
  @media print {
    display: none;
  }
	flex-direction: row;
	height: @navbar-height;
	padding: 0;
	margin: 0;
	background-color: @navbar-bg;
	
	position: fixed;
	z-index: 1020;
	width: 100%;
	border-bottom: @border-width solid @border-color;
	
	display: flex;
	align-items: center;
	justify-content: space-between;
	
	.home-link {
	  height: 100%;
    display: flex;
    align-items: start;
	}
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
const NavbarIcons = styled.div`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	height: @navbar-height;
  padding: 4px;
	margin-right: 0;
	background-color: @navbar-brand-bg;
	img {
	  max-width: 100%;
	  max-height: 100%;
	}
`;
const NavbarBrand = styled(NavbarIcons)`
	width: @sidebar-width - 50px;
	@media (max-width: @sm) {
		display: none;
	}
`;
const NavbarIcon = styled(NavbarIcons)`
	width: @navbar-height;
	@media (min-width: @sm) {
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
	flex: 1 1 0%;
`;
const NavItem = styled.li`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	position: relative;
	margin: 0;
	padding-left: 1rem;
	padding-right: 1rem;
	height: @navbar-height;
	:hover {
		background-color: @gray-200;
	}
	&& a {
		display: flex;
		height: @navbar-height - 1;
	  transition: color .1s ease-in-out;
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
		width: 50px;
	}
	
	transition: border .1s ease-in-out;
	border-bottom: 3px solid transparent;
	border-bottom-color: if(@active, @primary);
`;

export default class extends Component {
  render() {
    const {lg, topMenu, onNavbarToggle, onRightNavbarToggle, selected, logo, icon, Link} = this.props;
    return <Header>
      <Link className="home-link" href="/" to="/">
        {logo && <NavbarBrand>{logo}</NavbarBrand>}
        {icon && <NavbarIcon>{icon}</NavbarIcon>}
      </Link>
      <NavbarToggler onClick={onNavbarToggle}>
        <Bars width={14}/>
      </NavbarToggler>
      <NavbarNav>
        {topMenu.filter(m => !!m).map(({title, href, to, icon, component}, i) => {
          if (component) return component;
          return <NavItem key={i} active={isSelected(selected, href, to)}>
            <Link href={href} to={to}>
              <i className={icon}></i>
              <span>{title}</span>
            </Link>
          </NavItem>
        })}
      </NavbarNav>
      {!lg && onRightNavbarToggle && <NavbarToggler onClick={onRightNavbarToggle}>
        <Bars width={14}/>
      </NavbarToggler>}
    </Header>
  }
}