import React, { Component } from 'react';


class Ticket extends Component {
	
    
  

	render() {
		var days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
		var month = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']
		var ticket = this.props.ticket
		var stops = this.props.stops
		var value
		if(this.props.value<1)
			value = Math.round(this.props.value*1000)/1000
		else
			value = Math.round(this.props.value*100)/100

		ticket.price = Math.round(ticket.price*value)
		var date = ticket.departure_date.split(".").reverse()
		var ticket_date
		ticket_date = new Date(date[0],date[1],date[2])
		var departure_date = ""
		departure_date = ticket.departure_date.split(".")[0]+" "+month[ticket_date.getMonth()]+" "+ticket.departure_date.split(".")[2]+", "+days[ticket_date.getDay()]
		
		date = ticket.arrival_date.split(".").reverse()
		ticket_date = new Date(date[0],date[1],date[2])
		var arrival_date = ""
		arrival_date = ticket.arrival_date.split(".")[0]+" "+month[ticket_date.getMonth()]+" "+ticket.arrival_date.split(".")[2]+", "+days[ticket_date.getDay()]
		var from = <div className="from">
					<p className="time">{ticket.departure_time}</p>
					<p className="city-name">{ticket.origin}, {ticket.origin_name}</p>
					<p className="date">{departure_date}</p>
				   </div>
		var to  = <div className="to">
					<p className="time">{ticket.arrival_time}</p>
					<p className="city-name">{ticket.destination_name}, {ticket.destination}</p>
					<p className="date">{arrival_date}</p>
				   </div>
		var temp
		if(stops.includes(ticket.stops))
		{
			temp = <div><div className="block-with-btn">
			<img className="turkair-logo" src={require('./images/turkair.png')}/>
			<button className="buy-btn">Купить <br/> за {ticket.price}</button></div>
			<div className="ticket">{from} {to} </div></div>
		}
		else {
			temp = <div className="hideTicket"></div>
		}
		return (
			<div>
				{temp}
			</div>
		);
	}
}



export default Ticket;