import React, { Component } from 'react';
import LeftPanel from './LeftPanel';
import MainPanel from './MainPanel';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <LeftPanel />
        <MainPanel />
      </div>
    );
  }
}

export default App;
