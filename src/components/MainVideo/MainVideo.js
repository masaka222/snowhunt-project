import React, { Component } from 'react';
import './MainVideo.css';
import videomp4 from '../../assets/Mt_Baker.mp4';
import videowebm from '../../assets/Mt_Baker.webm';
import clouds from '../../assets/clouds3.png';

class MainVideo extends Component {
  render() {
    return (
      <div className="main-video" id="video-container">
        <video className = "main-video__content" id="video" autoPlay muted loop>
          <source src={videomp4} type="video/mp4"/>
          <source src={videowebm} type="video/webm"/>
          Your browser is not supported!
        </video>
        <img src={clouds} alt="clouds" className="main-video__cloudsimg" id="image"/>
        <div className="main-video__text">
          <p className="main-video__title" id="main-title">Sierra Nevada</p>
          <p className="main-video__subtitle" id="main-subtitle">Mountain Range, Spain</p>
        </div>
      </div>
    );
  }
}

export default MainVideo;