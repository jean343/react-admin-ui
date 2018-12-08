import React, { Component } from 'react';
import styled from 'styled-components';
const Footer = styled.footer`display: flex;
flex-wrap: wrap;
align-items: center;
padding: 0 ${props => [props["spacer"], (props.theme || {})["spacer"]].filter(v => v !== void 0)[0]};
color: ${props => [props["footer-color"], (props.theme || {})["footer-color"]].filter(v => v !== void 0)[0]};
background: ${props => [props["footer-bg"], (props.theme || {})["footer-bg"]].filter(v => v !== void 0)[0]};
border-top: 1px solid ${props => [props["gray-300"], (props.theme || {})["gray-300"]].filter(v => v !== void 0)[0]};
flex: 0 0 ${props => [props["footer-height"], (props.theme || {})["footer-height"]].filter(v => v !== void 0)[0]};
span:first-child {
  flex: 1;
}`;
export default class extends Component {
  render() {
    const {} = this.props;
    return React.createElement(Footer, null, React.createElement("span", null, React.createElement("a", {
      href: "https://coreui.io"
    }, "CoreUI"), " \xA9 2018 creativeLabs."), React.createElement("span", null, "Powered by ", React.createElement("a", {
      href: "https://coreui.io/react"
    }, "CoreUI for React")));
  }

}