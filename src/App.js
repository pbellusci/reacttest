import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Invoice from './elements/invoice.js';


class App extends Component {
  render() {
    return (
        <React.Fragment>
            <Invoice/>
        </React.Fragment>
    );
  }
}

export default App;
