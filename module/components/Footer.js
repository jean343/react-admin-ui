import React, { Component } from 'react';
import styled from 'styled-components';
const Footer = styled.footer.withConfig({
  displayName: "Footer",
  componentId: "rum83t-0"
})(["display:flex;flex-wrap:wrap;align-items:center;padding:0 ", ";color:", ";background:", ";border-top:1px solid ", ";flex:0 0 ", ";span:first-child{flex:1;}"], props => [props["spacer"], (props.theme || {})["spacer"], `1rem`].filter(v => v !== void 0)[0], props => [props["footer-color"], (props.theme || {})["footer-color"], [props["body-color"], (props.theme || {})["body-color"], [props["gray-900"], (props.theme || {})["gray-900"], `#313742`].filter(v => v !== void 0)[0]].filter(v => v !== void 0)[0]].filter(v => v !== void 0)[0], props => [props["footer-bg"], (props.theme || {})["footer-bg"], [props["gray-100"], (props.theme || {})["gray-100"], `#f8f8fa`].filter(v => v !== void 0)[0]].filter(v => v !== void 0)[0], props => [props["gray-300"], (props.theme || {})["gray-300"], `#dadee4`].filter(v => v !== void 0)[0], props => [props["footer-height"], (props.theme || {})["footer-height"], `50px`].filter(v => v !== void 0)[0]);
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