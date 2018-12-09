import React, {Component} from 'react';
import styled, {css} from 'styled-components';

export const NavItemMinimized = styled.li`
	position: relative;
	margin: 0;
	transition: background .3s ease-in-out;
	cursor: pointer;
	overflow: hidden;
	width: @sidebar-minimized-width;
	> .sub-nav {
		position: absolute;
		left: @sidebar-minimized-width;
		display: inline;
		background: @sidebar-bg;
		transition: none;
		li {
			border: none;
		}
		a {
			height: 40px;
		}
	}
	:hover {
		overflow: visible;
		width: @sidebar-minimized-width + @sidebar-width;
		> .sub-nav {
			max-height: @count * 40px;
		}
		> a {
			background: @primary;
			i {
				color: @white;
			}
		}
	}
	
	${props => props.active && css`
		color: @sidebar-nav-link-active-color;
		background: lighten(@sidebar-bg, 5%);
	`}
	i {
		transition: color .1s ease-in-out;
		margin-right: 1rem;
		font-size: 1.3em;
		color: if(@active, @primary, @gray-500);
		
		width: @sidebar-minimized-width;
		flex-shrink: 0;
		text-align: center;
	}
	a {
		display: flex;
		align-items: center;
		height: 48px;
		text-decoration: none !important;
		color: @white !important;
	}
`;