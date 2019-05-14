import React, { Component } from 'react';


class Ticket extends Component {
	
    
  

	render() {
		var ticket = this.props.ticket
		var stops = this.props.stops
		var value
		if(this.props.value<1)
			value = Math.round(this.props.value*1000)/1000
		else
			value = Math.round(this.props.value*100)/100

		ticket.price = Math.round(ticket.price*value)
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