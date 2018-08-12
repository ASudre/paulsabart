import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import apiService from './services/api.service';

class App extends Component {

  constructor() {
    super();
    this.state = {
      list: [],
    }
  }

  componentDidMount() {
    apiService.listFiles().then(list => {
      this.setState({files: list});
    }).catch(e => {
      console.error(e);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>files :{JSON.stringify(this.state.files)}</div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reloa.
        </p>
      </div>
    );
  }
}

export default App;
