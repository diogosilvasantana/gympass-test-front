import React, { Component } from 'react';
import './Header.css'
import logo from './logo.svg';

export default class HeaderComponent extends Component {

	title = "Teste de Front End"

	render() {
    return (
			<header>
				<img src={logo} className="Header-logo" alt="logo" />
				<h1>{this.title}</h1>
      </header>
    );
  }
}
