import React, { Component } from 'react';
import './css/App.css';


class Stops extends Component {
	
	state ={
		hover: false
	}

	hoverOn = () => {
		this.setState({hover:true})
	}

	hoverOff = () => {
		this.setState({hover:false})
	}

	render() {
		var st = this.props.stops
		const onlyStop = this.props.meth
		if (st.id!==4) {
		return (
			<div>
				<p onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}><input type="checkbox" id ={st.id} value={st.id} checked={this.props.checked}  onChange={this.props.stopsMeth}/>{st.id}
				<button className={this.state.hover ? "buttonVis" : "buttonHid"} value={st.id} onClick={onlyStop}>Only</button></p>
				
			</div>
		);}

		else {
			return (
			<div >
				
				<p><input type="checkbox"   id ={st.id} value={st.id} checked={this.props.checked}  onChange={this.props.stopsMeth}/>{st.id}</p>
				
				
			</div>
		);			
		}
	}
}


export default Stops;