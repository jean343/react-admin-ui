import React, {Component} from 'react';
import styled, {css} from 'styled-components';

export const NavItemMaximized = styled.li`
	position: relative;
	margin: 0;
	transition: background .3s ease-in-out, border .1s ease-in-out;
	cursor: pointer;
	border: 1px solid transparent;
	overflow: hidden;
	flex-shrink: 0;
	
	${props => props.active && css`
		color: @sidebar-nav-link-active-color;
		background: lighten(@sidebar-bg, 15%);
	`}
	i:not(.caret-left-icon) {
		transition: color .1s ease-in-out;
		margin-right: 0.5rem;
		color: if(@active, @primary, @gray-500);
	}
	a {
		display: flex;
		align-items: center;
		padding: 0 if(@hasChild, 1rem, calc(1rem - 3px));
		height: 38px;
		text-decoration: none !important;
		color: @white !important;
		transition: background .1s ease-in-out;
		span {
			flex: 1;
			overflow: hidden;
		}
		:hover{
			background: @primary;
			i {
				color: @white;
			}
		}
	}
	&:first-child {
		border-top: none;
	}
	.caret-left-icon {
		transition: transform .3s ease-in-out;
		transform: if(@open, rotate(-90deg));
	}
	${props => props.open && css`
		background: rgba(0, 0, 0, .2);
		border: 1px solid rgba(255, 255, 255, .2);
		> .sub-nav {
			max-height: @count * 40px;
		}
	`};
	border-left: 3px solid transparent;
	border-left-color: if(@active, @primary);
	border-left: if(@hasChild, none);
	border-right: none;
`;