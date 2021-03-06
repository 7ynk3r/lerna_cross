import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { WebButton, WebButtonColor  } from '../packages/web-elements'
import { ActivityIndicator } from 'react-native';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header" style={{backgroundColor:WebButtonColor}}>
          <img src={logo} className="App-logo" alt="logo" />
          <ActivityIndicator size='large' color='white'/>
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
