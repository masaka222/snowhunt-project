import React, { Component } from 'react';
import './MainContent.css';

class MainContent extends Component {
  render() {
    /* 
    The function ani() is used to make all the necessary animations on the right time,
    after the press of the button. How it makes that happen, is by putting different "animated"
    classes to specific elements by ID, in a specific timeframe
    */
    function ani(){
      document.getElementById('sierra').classList.add('animated1BoxCoverText');

      //delay until the upperpart is finished
      setTimeout(function() {
        document.getElementById('nevada').classList.add('animated1BoxCoverText')
      },100)

      setTimeout(function() {
        document.getElementById('sierra').classList.add('animated2BoxEraseText')
      },400)
      
      setTimeout(function() {
        document.getElementById('nevada').classList.add('animated2BoxEraseText')
        document.getElementById('subtext').classList.add('animated2BoxEraseText')
        document.getElementById('button').classList.add('animated2BoxEraseText')
        document.getElementById('video-container').classList.add('animated3MoveLeftAndScale')
      },500)
      
      setTimeout(function() {
        document.getElementById('cloudimage').classList.add('animated4CloudUp')
      },1000)
      
      setTimeout(function() {
        document.getElementById('video').classList.add('animated5VideoUp')
      },1350)

      setTimeout(function() {
        document.getElementById('main-title').classList.add('animated6TextUp')
      },1500)

      setTimeout(function() {
        document.getElementById('main-subtitle').classList.add('animated6TextUp')
      },1600)
      
      setTimeout(function() {
        document.getElementById('video-container').classList.add('animated7ContainerUp')
        document.getElementById('body').classList.add('animated8BackgroundColorChange')
        document.getElementById('gridimage').classList.add('animated9ImageAnimation')
      },2100)

      setTimeout(function() {
        document.getElementById('gridtext').classList.add('animated6TextUp')
      },2500)
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