import React, { Component } from 'react';
import monty from './monty.jpg';
import './App.css';
import Header from './header/Header';
import BackendHealth from './backend-health/BackendHealth';
import Simulator from './simulator/Simulator';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header image={monty} header="Welcome to the Monty Hall Simulator" >
          <BackendHealth/>
        </Header>
        <div className="App-content">
          <Simulator/>
        </div>
      </div>
    );
  }
}

export default App;
