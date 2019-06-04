import React, { Component } from 'react';
import './css/App.css';


class Button extends Component {
	

	render() {
		var name = this.props.currency
		const chngCurrency = this.props.meth
		var style  = "button "+name
		//console.log("style: ", style)
		return (
			<div key={name}>
			<button className={style} value={name} onClick={chngCurrency}>{name}</button>
			</div>
		);
	}
}


export default Button;