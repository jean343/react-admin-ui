import React, { Component } from 'react';
import styled from 'styled-components';
import { Main } from "./Body";

const Toolbar = styled.div`
	height: @sub-navbar-height;
	border-bottom: 1px solid @gray-300;
	background-color: white;
`;

export default class extends Component {
	render(){
		const {} = this.props;
		return <Toolbar>

		</Toolbar>
	}
}