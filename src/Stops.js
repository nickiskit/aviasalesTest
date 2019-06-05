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
				<p className = "stops" onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}><input type="checkbox" id ={st.id} value={st.id} checked={this.props.checked}  onChange={this.props.stopsMeth}/>
				<label htmlFor={st.id}>{st.name}</label>
				<button className={this.state.hover ? "buttonVis" : "buttonHid"} value={st.id} onClick={onlyStop}>ТОЛЬКО</button></p>
				
			</div>
		);}

		else {
			return (
			<div >
				
				<p className = "stops"><input type="checkbox" id ={st.id} value={st.id} checked={this.props.checked}  onChange={this.props.stopsMeth}/><label htmlFor={st.id}>{st.name}</label></p>
				
				
			</div>
		);			
		}
	}
}


export default Stops;