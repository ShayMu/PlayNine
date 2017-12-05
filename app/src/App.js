import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Game from './js/components/game';

class App extends Component {
  render() {
      return (
          <div>
              <Game />
          </div>
      );
  }
}

export default App;
