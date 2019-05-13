import React, { Component } from 'react';
import './css/App.css';


class Button extends Component {
	

	render() {
		var name = this.props.currency
		const chngCurrency = this.props.meth
		return (
			<div>
			<button value={name} onClick={chngCurrency}>{name}</button>
			</div>
		);
	}
}


export default Button;