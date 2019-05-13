import React, { Component } from 'react';
import Stops from './Stops'
import Button from './Button'


class Filter extends Component {
	
	render() {
		
		//console.log("From Filter", this.props)
		const stopsMas = this.props.stops.map((index)=>
			<div key={index.id}>
			<Stops stops={index} stopsMeth={this.props.meth}/>
			</div>
		)

		const buttonMas  = this.props.currency.map((index)=>
		 	<div key={index}>
			<Button currency={index} meth = {this.props.meth_two} temp={this.props.temp}/>
			</div>
		)
		

		return (
			<div>
			{stopsMas}
			{buttonMas}
			</div>
			
		);
	}
}



export default Filter;
