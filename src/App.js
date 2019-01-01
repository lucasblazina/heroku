import React, { Component } from 'react';
import logo from './pic.jpg';
import './App.css';
import { Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            Hey Lucas, here is our app :)

          </p>
          <Button bsStyle="red">Danger</Button>
          <Button bsSize="large">Large button</Button>
          <Button bsStyle="link">https://amazon.com</Button>
        </header>
      </div>
    );
  }
}

export default App;
