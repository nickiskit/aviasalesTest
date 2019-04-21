import React, { Component } from 'react';
import './css/App.css';
import Tickets from './Tickets'
import ticketsArr from './tickets'

class App extends Component {

  state = {
    currency: 'rub',
    stops: 0
  }

  render() {
    
    //console.log({t})
    return (
      <div>
      <Tickets tickets={ticketsArr.tickets}/>
      </div>
    );
  }
}

export default App;
