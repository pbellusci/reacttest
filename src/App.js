import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './elements/navigation.js';
import Invoice from './elements/invoice.js';

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <header>
                <Navigation/>
          </header>
          <main>
            <Invoice/>
          </main>
        </React.Fragment>
    );
  }
}

export default App;
