import React, { Component } from 'react';
import SearchBar from './search-bar';
import CityList from './city-list';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="container">
          <SearchBar />
          <CityList />
        </div>
      </div>
    );
  }
}

export default App;
