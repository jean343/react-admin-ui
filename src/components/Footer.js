import React, {Component} from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	padding: 0 @spacer;
	color: @footer-color;
	background: @footer-bg;
	border-top: @border-width solid @border-color;
	
	flex: 0 0 @footer-height;
	span:first-child {
		flex: 1;
	}
`;

export default class extends Component {
  render() {
    const {} = this.props;
    return <Footer>
      <span><a href="https://coreui.io">CoreUI</a> © 2018 creativeLabs.</span>
      <span>Powered by <a href="https://coreui.io/react">CoreUI for React</a></span>
    </Footer>
  }
}