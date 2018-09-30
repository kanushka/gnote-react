import React, { Component } from 'react';
import logo from './../logo.svg';
import './App.css';

import Button from '@material-ui/core/Button';
import NavBar from './NavBar/NavBar';

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
        <NavBar appName = {this.state.appName} appVersion = {this.state.appVersion}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
      </div>
    );
  }
}

export default App;
