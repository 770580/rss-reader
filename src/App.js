import React, { Component } from 'react';
import Header from './Header';
import LeftPanel from './LeftPanel';
import MainPanel from './MainPanel';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      leftPanelOpen: false
    }
  }

  toggleLeftPanelOpen() {
    this.setState({
      leftPanelOpen: !this.state.leftPanelOpen
    })
  }

  render() {
    return (
      <div className='App'>
        <Header
          toggleLeftPanelOpen={this.toggleLeftPanelOpen.bind(this)}
        />
        <main className='App__main'>
          <LeftPanel
            leftPanelOpen={this.state.leftPanelOpen}
          />
          <MainPanel />
        </main>
      </div>
    );
  }
}

export default App;
