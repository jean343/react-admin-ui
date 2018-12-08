import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import fs from 'fs';
import lessToJs from "less-vars-to-js";

const constants = lessToJs( fs.readFileSync( __dirname + "/../styles/variables.import.less", "utf8" ), { stripPrefix: true, resolveVariables: true } );

export default class Theme extends Component {
	static  defaultProps = {
		theme: 'skin-blue',
	};

	render(){
		const { children } = this.props;
		return <ThemeProvider theme={constants}>
			{children}
		</ThemeProvider>
	}
}