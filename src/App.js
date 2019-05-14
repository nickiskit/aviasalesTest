import React, { PureComponent } from 'react';
import './css/App.css';
import Tickets from './Tickets'
import ticketsArr from './tickets'
import Filter from './Filter'
import stop from './stopsMas'
//import Rend from './Rend'

//const API_KEY1 = 'a9e7f12844147d15728b2cda70d9e935'
//const API_KEY2 ='81281e1dc0b46be81100'



class App extends PureComponent {
  
  state = {
    currency: ['rub','rub'],
    stops : {stops: [] },
    value: 1,
    checked: {1:false, 2:false, 3:false, 0:false }
  }

  

  chngStops = (e) => {
    //console.log("e= ", e.target)
    var searchValue = parseInt(e.target.value)
    var arr = this.state.stops.stops
    var arr1 = this.state.checked
    if(e.target.checked) {
        arr.push(searchValue)
        arr1[searchValue]=true
        this.setState({stops: {stops:arr}, checked:arr1 })

    }

    else {
      arr.splice(arr.indexOf(searchValue),1)
      arr1[searchValue]=false
      this.setState({stops: {stops:arr}, checked:arr1 })
    }


  }
  
  onlyStop = (e) => {
    var searchValue = parseInt(e.target.value)
    var arr = [searchValue]
    var arr1 = {1:false, 2:false, 3:false, 0:false}
    arr1[searchValue]=true
    this.setState({stops: {stops:arr}, checked:arr1 })
   // console.log(e.target)
  }

 getCurrency = async(e) => {
   // console.log("getCurrency: ", e)
    var [currentState, nextState] = e
    const api_url = await fetch(`https://api.exchangeratesapi.io/latest?base=${currentState.toUpperCase()}&symbols=${nextState.toUpperCase()}`)
    const data = await api_url.json()
    const result  = data.rates[nextState.toUpperCase()]
    this.setState({value: result })
    
  }
    
  

  chngCurrency = (e) => {
    var arr = this.state.currency
    arr[0] = arr[1]
    arr[1] = e.target.value
    this.setState({currency: arr })
    this.getCurrency(this.state.currency)
}

  static get currencyMas() {
    return ['rub', 'usd', 'eur']
  } 
  get currencyMas() {
    return this.constructor.currencyMas
  } 

  
  render() {
    
    //console.log(this.state.value)
    return (

      <div>
      <div className="filter">
      <Filter stops = {stop} checked={this.state.checked} currency={this.currencyMas} meth={this.chngStops} meth_two={this.chngCurrency} meth_three={this.onlyStop}/>
      </div>
      <div className="tickets">
      <Tickets tickets={ticketsArr.tickets} stops={this.state.stops.stops} value={this.state.value} />   
      </div>
      </div>    
    );
  }
}

export default App;
