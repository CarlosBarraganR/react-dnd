import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Knight from './components/Knight/Knight';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Knight/>
      </div>
    );
  }
}

export default App;
