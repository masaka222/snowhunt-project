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

      setTimeout(function() {
        document.getElementById('sierra').classList.add('animated2')
        },400)
      
      setTimeout(function() {
        document.getElementById('nevada').classList.add('animated2')
        },500)

      setTimeout(function() {
        document.getElementById('subtext').classList.add('animated2')
        },500)

      setTimeout(function() {
        document.getElementById('button').classList.add('animated2')
        },500)
      
      setTimeout(function() {
        document.getElementById('video').classList.add('animated3')
        },500)
    }

    return (
      <div className="main-content">
        <p className="main-content__title" id = 'sierra'>Sierra</p>
        <p className="main-content__title" id = 'nevada'>Nevada</p>
        <p className="main-content__subtitle" id = "subtext">Mountain Range, Spain</p>
        <button className="main-content__button" id="button" onClick={ani}>View Details</button>
      </div>
    );
  }
}

export default MainContent;