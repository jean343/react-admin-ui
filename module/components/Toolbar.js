import React, { Component, Children } from 'react';
import styled from 'styled-components';
const Toolbar = styled.div.withConfig({
  displayName: "Toolbar",
  componentId: "sc-12ykycd-0"
})(["@media print{display:none;height:0;overflow:hidden;}height:", ";border-bottom:", " solid ", ";background-color:white;display:flex;.toolbar-item{cursor:pointer;width:", ";display:flex;align-items:center;justify-content:center;transition:background-color 0.1s ease-in-out;}.toolbar-item:hover{background-color:", ";}"], props => [props["sub-navbar-height"], (props.theme || {})["sub-navbar-height"], `40px`].filter(v => v !== void 0)[0], props => [props["border-width"], (props.theme || {})["border-width"], `1px`].filter(v => v !== void 0)[0], props => [props["border-color"], (props.theme || {})["border-color"], [props["gray-300"], (props.theme || {})["gray-300"], `#dadee4`].filter(v => v !== void 0)[0]].filter(v => v !== void 0)[0], props => parseFloat([props["sub-navbar-height"], (props.theme || {})["sub-navbar-height"], `40px`].filter(v => v !== void 0)[0]) * parseFloat(1.1) + (('' + [props["sub-navbar-height"], (props.theme || {})["sub-navbar-height"], `40px`].filter(v => v !== void 0)[0]).replace(/[\d.-]*/, "") || ('' + 1.1).replace(/[\d.-]*/, "")), props => [props["gray-100"], (props.theme || {})["gray-100"], `#f8f8fa`].filter(v => v !== void 0)[0]);
const Left = styled.div.withConfig({
  displayName: "Toolbar__Left",
  componentId: "sc-12ykycd-1"
})(["display:flex;border-right:", " solid ", ";:empty{display:none;}"], props => [props["border-width"], (props.theme || {})["border-width"], `1px`].filter(v => v !== void 0)[0], props => [props["border-color"], (props.theme || {})["border-color"], [props["gray-300"], (props.theme || {})["gray-300"], `#dadee4`].filter(v => v !== void 0)[0]].filter(v => v !== void 0)[0]);
export default class extends Component {
  render() {
    let {
      toolbar
    } = this.props;

    if (!Array.isArray(toolbar)) {
      toolbar = [toolbar];
    }

    return React.createElement(Toolbar, null, toolbar.map(t => React.createElement(Left, null, t)));
  }

}