import React, { Component } from 'react';


class Ticket extends Component {
	
    
  

	render() {
		var ticket = this.props.ticket
		var stops = this.props.stops
		var value = this.props.value
		ticket.price = ticket.price*value
		console.log("From ticket:", value)
		var arr
		if(stops.includes(ticket.stops))
			arr = [ticket.price,' ',ticket.stops]
		else
			arr = []

		return (
			<div>
				<h2>{arr}</h2>
			</div>
		);
	}
}



export default Ticket;