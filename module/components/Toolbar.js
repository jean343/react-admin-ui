import React, { Component, Children } from 'react';
import styled from 'styled-components';
const Toolbar = styled.div.withConfig({
  displayName: "Toolbar",
  componentId: "sc-12ykycd-0"
})(["height:", ";border-bottom:1px solid ", ";background-color:white;display:flex;.toolbar-item{cursor:pointer;width:", ";transition:background-color 0.1s ease-in-out;}.toolbar-item:hover{background-color:", ";}"], props => [props["sub-navbar-height"], (props.theme || {})["sub-navbar-height"], `40px`].filter(v => v !== void 0)[0], props => [props["gray-300"], (props.theme || {})["gray-300"], `#dadee4`].filter(v => v !== void 0)[0], props => [props["sub-navbar-height"], (props.theme || {})["sub-navbar-height"], `40px`].filter(v => v !== void 0)[0], props => [props["gray-100"], (props.theme || {})["gray-100"], `#f8f8fa`].filter(v => v !== void 0)[0]);
const Left = styled.div.withConfig({
  displayName: "Toolbar__Left",
  componentId: "sc-12ykycd-1"
})(["display:flex;.toolbar-item{border-right:1px solid ", ";}"], props => [props["gray-300"], (props.theme || {})["gray-300"], `#dadee4`].filter(v => v !== void 0)[0]);
const Right = styled.div.withConfig({
  displayName: "Toolbar__Right",
  componentId: "sc-12ykycd-2"
})(["display:flex;.toolbar-item{border-left:1px solid ", ";}"], props => [props["gray-300"], (props.theme || {})["gray-300"], `#dadee4`].filter(v => v !== void 0)[0]);
export default class extends Component {
  render() {
    const {
      toolbar,
      rightToolbar
    } = this.props;
    return React.createElement(Toolbar, null, React.createElement(Left, null, toolbar), React.createElement("div", {
      style: {
        flex: 1
      }
    }), React.createElement(Right, null, rightToolbar));
  }

}