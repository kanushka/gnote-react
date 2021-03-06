import React, { Component } from 'react';
import './App.css';

import NavBar from './NavBar/NavBar';
import AppGrid from './AppGrid/AppGrid';
import ActionButton from './ActionButton/ActionButton';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: amber,
  },
  status: {
    danger: 'deepOrange',
  },
});
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
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <NavBar appName={this.state.appName} appVersion={this.state.appVersion} />       
          <AppGrid />
          <ActionButton />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
