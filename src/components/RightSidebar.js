import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import RightSidebarTabs from './RightSidebarTabs';

const Sidebar = styled.div`
	width: @aside-menu-width;
	right: 0;
	position: fixed;
	display: flex;
	flex-direction: column;
	padding: @sidebar-padding;
	color: @gray-800;
	background: @aside-menu-bg;
    height: calc(100vh - @navbar-height);
    border-left: 1px solid @border-color;
	
    transition: transform .25s;
    ${props => props.rightSidebarCollapse && css`
		transform: translateX(@aside-menu-width);
	`};
`;
const SidebarContainer = styled.div`
    height: 100%;
    flex: 1 1;
`;

export default class extends Component {
	render(){
		const { rightSidebarCollapse, sideBarTabs } = this.props;
		return <Sidebar rightSidebarCollapse={rightSidebarCollapse}>
			<SidebarContainer>
				<RightSidebarTabs sideBarTabs={sideBarTabs}/>
			</SidebarContainer>
		</Sidebar>
	}
}