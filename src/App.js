import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Convert me!</h2>
        </div>
        <p className="App-intro">
          TODO: what would I want to convert
          <p>fahrenheit - Celsius</p>
          <p>dollarz - euros</p>
          <p>Price with states tax percent would be nice</p>
          <p>miles - kilometers</p>
          <p>feet - centimeters</p>
          <p>pounds - kilograms</p>
          <p>ounces - grams</p>
          <p>gallons - litres</p>
        </p>
      </div>
    );
  }
}

export default App;
