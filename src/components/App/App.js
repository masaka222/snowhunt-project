import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import MainVideo from '../MainVideo/MainVideo';

class App extends Component {
  render() {
    return (
      <div className="App" id ="app">
        <Header />
        <MainContent />
        <MainVideo />
      </div>
    );
  }
}

export default App;
