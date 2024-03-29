import React, { Component } from 'react';
import Stops from './Stops'
import Button from './Button'


class Filter extends Component {
	
	render() {
		
		//console.log("From Filter", this.props)
		const stopsMas = this.props.stops.map((index)=>
			<div key={index.id}  >
			<Stops stops={index} stopsMeth={this.props.meth} meth={this.props.meth_three} checked={this.props.checked[index.id]}/>
			</div>
		)

		const buttonMas  = this.props.currency.map((index)=>
		 	<div key={index} >
			<Button currency={index} meth = {this.props.meth_two} temp={this.props.temp} />
			</div>
		)
		

		return (
			<div>
				
				<div>
					<h5>Валюта</h5>
					{buttonMas}
				</div>
				<div>
					<h5>Количество пересадок</h5>
					{stopsMas}
				</div>
			</div>
			
		);
	}
}



export default Filter;
