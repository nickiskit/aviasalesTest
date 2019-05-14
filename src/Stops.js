import React, { Component } from 'react';
import './css/App.css';


class Stops extends Component {
	

	render() {
		var st = this.props.stops
		const onlyStop = this.props.meth
	
		return (
			<div>
				<label>
				<p><input type="checkbox" id ={st.id} value={st.id} checked={this.props.checked}  onChange={this.props.stopsMeth}/>{st.id}</p>
				<button value={st.id} onClick={onlyStop}>Only</button>
				</label>
				
			</div>
		);
	}
}


export default Stops;