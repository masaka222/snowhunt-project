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
        document.getElementById('video-container').classList.add('animated3')
        },500)
      
      setTimeout(function() {
        document.getElementById('cloudimage').classList.add('animated4')
        },1000)
      
      setTimeout(function() {
          document.getElementById('video').classList.add('animated5')
          },1350)

      setTimeout(function() {
          document.getElementById('main-title').classList.add('animated6')
          },1500)

      setTimeout(function() {
          document.getElementById('main-subtitle').classList.add('animated6')
          },1600)
      
      setTimeout(function() {
          document.getElementById('video-container').classList.add('animated7')
          },2100)
      
      setTimeout(function() {
          document.getElementById('body').classList.add('animated8')
          },2100)

      setTimeout(function() {
          document.getElementById('gridimage').classList.add('animated9')
          },2100)
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