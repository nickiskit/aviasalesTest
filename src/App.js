import React, {  PureComponent } from 'react';
import './css/App.css';
import Tickets from './Tickets'
import ticketsArr from './tickets'
import Filter from './Filter'
import stop from './stopsMas'
//import Rend from './Rend'

//const API_KEY1 = 'a9e7f12844147d15728b2cda70d9e935'
//const API_KEY2 ='81281e1dc0b46be81100'



class App extends  PureComponent{
  
  state = {
    currency:'rub',
    ischng:false,
    stops : {stops: [] },
    value: 1,
    checked: {1:false, 2:false, 3:false, 0:false, 4:false }
  }

  

  chngStops = (e) => {
    //console.log("e= ", e.target)
    var searchValue = parseInt(e.target.value)
    var arr = this.state.stops.stops
    var arr1 = this.state.checked
    if(e.target.checked) {

        if(searchValue===4) {
          arr1= {1:false, 2:false, 3:false, 0:false, 4:true}
          arr = [0,1,2,3]
        }
        else {

          if(arr1[4]) {
            arr = []
            arr1[4] = false
          }

          arr.push(searchValue)
          arr1[searchValue]=true
        }
        this.setState({stops: {stops:arr}, checked:arr1 })

    }

    else {

      if(searchValue===4) {
          arr1= {1:false, 2:false, 3:false, 0:false, 4:false}
          arr = []
        }
      else {
        arr.splice(arr.indexOf(searchValue),1)
        arr1[searchValue]=false
      }
      this.setState({stops: {stops:arr}, checked:arr1 })
    }


  }
  
  onlyStop = (e) => {
    var searchValue = parseInt(e.target.value)
    var arr = [searchValue]
    var arr1 = {1:false, 2:false, 3:false, 0:false, 4:false}
    arr1[searchValue]=true
    this.setState({stops: {stops:arr}, checked:arr1 })
   // console.log(e.target)
  }

 chngCurrency = async(e) => {
    //e.preventDefault()
    //console.log("getCurrency: ", e)
    var currentState = this.state.currency
    var nextState = e.target.value
    //var [currentState, nextState] = e
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    var URL = `https://api.exchangeratesapi.io/latest?base=${currentState.toUpperCase()}&symbols=${nextState.toUpperCase()}`
    const api_url = await fetch(proxyurl+URL)
    const data = await api_url.json()
    const result  = await data.rates[nextState.toUpperCase()]
    //console.log(result)
    await this.setState({value: result, currency:nextState, ischng:true })
    
    
  }
    
/*  chngPrice = () =>{
    this.setState({chngPrice:false})
  }

chngPrice = () => {
    
    for(var i=0; i<ticketsArr.tickets.length; i++) {
      //console.log(ticketsArr.tickets[i].price)
      var value = this.state.value
      if(value<1)
        value = Math.round(value*1000)/1000
      else
        value = Math.round(value*100)/100
      var temp = Math.round(ticketsArr.tickets[i].price*value)
      ticketsArr.tickets[i].price = temp
      //console.log("after", ticketsArr.tickets[i].price)
    }
    
  }*/
    
  

  /*chngCurrency = (e) => {
    var arr = this.state.currency
    arr[0] = arr[1]
    arr[1] = e.target.value
    //console.log(arr[1])
    this.setState({currency: arr })
    this.getCurrency(this.state.currency)
    //console.log(this.state.value)
    //this.chngPrice(this.state.value)
}*/

  static get currencyMas() {
    return ['rub', 'usd', 'eur']
  } 
  get currencyMas() {
    return this.constructor.currencyMas
  } 

  
  render() {
    
    //console.log(ticketsArr.tickets)
    this.setState({ischng:false})
   console.log(this.state.ischng)
    return (

      <div className="app">

      <div className="filter">
      <Filter stops = {stop} checked={this.state.checked} currency={this.currencyMas} meth={this.chngStops} meth_two={this.chngCurrency} meth_three={this.onlyStop} meth_for={this.chngPrice}/>
      </div>

      <div className="tickets">
      <Tickets tickets={ticketsArr.tickets} stops={this.state.stops.stops} currency={this.state.currency} value={this.state.value}  chng={this.state.ischng} />   
      </div>

      
      
      </div>    
    );
  }
}

export default App;
