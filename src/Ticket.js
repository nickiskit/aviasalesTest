import React, { Component } from 'react';


class Ticket extends Component {
	
	render() {
		var {ticket} = this.props
		
		return (
			<div>
				<h1>{ticket.price}</h1>
			</div>
		);
	}
}



export default Ticket;