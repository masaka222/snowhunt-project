import React, { Component } from 'react';
import './MainContent.css';

class MainContent extends Component {
  render() {
    return (
      <div className="main-content">
        <p className="main-content__title">Sierra Nevada</p>
        <p className="main-content__subtitle">Mountain Range, Spain</p>
        <button className="main-content__button">View Details</button>
      </div>
    );
  }
}

export default MainContent;