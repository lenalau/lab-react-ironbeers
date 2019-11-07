import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListBeers from './components/ListBeers';
import RandomBeer from './components/RandomBeer';
import OneBeer from './components/OneBeer';
import NewBeer from './components/OneBeer';
import Home from './components/Home';
// import countries from "./countries.json";
// import BeerDetail from './components/BeerDetail'
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>

          <Route exact path='/' component={Home} />

          <Route exact path='/beers' component={ListBeers} />
          <Route path='/random-beer' component={RandomBeer} />
          {/* Route component is responsible for passing props that 
        include the route parameters (in this case: 'id') */}
          <Route path='/beers/:_id' component={OneBeer} />
          <Route path='/new-beer' component={NewBeer} />
        </Switch>
        {/* < ListBeers beers={beers} /> */}
      </div>
    );
  }
}

export default App;
