import React, {Component } from 'react';


class Rend extends Component {
	
	render() {
	var a = this.props.a
	console.log("a=", a)
	
		return (
			<div>
			<h1>{a}</h1>
			</div>
		);
	}
}


export default Rend;