import React, { Component } from 'react';


class Ticket extends Component {
	
    
  

	render() {
		var days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
		var month = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']
		var ticket = this.props.ticket
		var stops = this.props.stops
		var countStop = retString(ticket.stops)
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
		departure_date = ticket.departure_date.split(".")[0]+" "+month[ticket_date.getMonth()]+" "+"20"+ticket.departure_date.split(".")[2]+", "+days[ticket_date.getDay()]
		
		date = ticket.arrival_date.split(".").reverse()
		ticket_date = new Date(date[0],date[1],date[2])
		var arrival_date = ""
		arrival_date = ticket.arrival_date.split(".")[0]+" "+month[ticket_date.getMonth()]+" "+"20"+ticket.arrival_date.split(".")[2]+", "+days[ticket_date.getDay()]
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

		var stopsLine = <div className="line">
		<p>{countStop}</p>
		<img className="img-line" src={require('./images/line1.png')} alt='line'/> </div>
		var temp
		if(stops.includes(ticket.stops))
		{
			temp = <div><div className="block-with-btn">
			<img className="turkair-logo" src={require('./images/turkair.png')} alt='logo'/>
			<button className="buy-btn">Купить <br/> за {ticket.price} {this.props.curr}</button></div>
			<div className="ticket">
			{from} {stopsLine} {to} </div></div>
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


function retString(a) {
	if(a===0) {
		return "Без пересадок"
	}

	if(a===1) {
		return "1 пересадка"
	}

	else {
		return (a+" пересадки")
	}

}