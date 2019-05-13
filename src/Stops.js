import React, { Component } from 'react';
import './css/App.css';


class Stops extends Component {
	

	render() {
		var st = this.props.stops
	
		return (
			<label>
			<p><input type="checkbox" id ={st.id} value={st.id} onChange={this.props.stopsMeth}/>{st.id}</p>
			</label>
		);
	}
}


export default Stops;