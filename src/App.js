import React, { Component } from 'react';
import logo from './calculator.svg';
import './App.css';
import StaticConvert from './components/StaticConvert';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Convert me!</h2>
        </div>
        <div className="App-intro">
          What would you like to convert today?
          <StaticConvert primary='inch' result='centimeter'/>
          <p>fahrenheit - Celsius</p>
          <p>dollarz - euros (with the last checkdate)</p> 
          <p>Price with states tax percent would be nice</p>
          <p>miles - kilometers</p>
          <p>feet - centimeters</p>
          <p>pounds - kilograms</p>
          <p>ounces - grams</p>
          <p>gallons - litres</p>
        </div>
      </div>
    );
  }
}

export default App;
