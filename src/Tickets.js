import React, { Component } from 'react';
import Ticket from './Ticket'

class Tickets extends Component {
	
	render() {
	
		
		var temp = sortByKey(this.props.tickets, 'price');

		const ticketsArr = temp.map( (index) =>
		 
			<div key={index.id}>
				<Ticket ticket = {index}/>

			</div>)
		
		return (
		<div>
			{ticketsArr}
		</div>
		);



	}


}

export default Tickets;

function sortByKey(array, key) {
	{return array.sort(function(a, b) {
	        	var x = a[key]; var y = b[key];
	        	return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	    	});}}		