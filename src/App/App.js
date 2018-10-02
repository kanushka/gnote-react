import React, { Component } from 'react';
import './App.css';

import NavBar from './NavBar/NavBar';
import AppGrid from './AppGrid/AppGrid';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      appName: 'gnote',
      appVersion: 0.1
    };    
  }

  render() {
    return (
      <div className="App">
        <NavBar appName={this.state.appName} appVersion={this.state.appVersion} />
        
        <AppGrid />
      </div>
    );
  }
}

export default App;
