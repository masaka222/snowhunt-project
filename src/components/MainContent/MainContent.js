import React, { Component } from 'react';
import './MainContent.css';

class MainContent extends Component {
  render() {
    /* Adds the class of animated to different id elements*/
    function ani(){
      document.getElementById('sierra').classList.add('animated');
      //delay until the upperpart is finished
      setTimeout(function() {
        document.getElementById('nevada').classList.add('animated')
        },100)
    }

    return (
      <div className="main-content">
        <p className="main-content__title" id = 'sierra'>Sierra</p>
        <p className="main-content__title" id = 'nevada'>Nevada</p>
        <p className="main-content__subtitle">Mountain Range, Spain</p>
        <button className="main-content__button" onClick={ani}>View Details</button>
      </div>
    );
  }
}

export default MainContent;