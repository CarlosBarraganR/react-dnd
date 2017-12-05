import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Knight from './components/Knight/Knight';
import Square from './components/Square/Square';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Square black>
          <Knight/>
        </Square>
      </div>
    );
  }
}

export default App;
