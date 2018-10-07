import React, { Component } from 'react';
import './MainVideo.css';
import videomp4 from '../../assets/Mt_Baker.mp4';
import videowebm from '../../assets/Mt_Baker.webm';

class MainVideo extends Component {
  render() {
    return (
      <div className="main-video">
        <video className = "main-video__content" autoPlay muted loop>
          <source src={videomp4} type="video/mp4"/>
          <source src={videowebm} type="video/webm"/>
          Your browser is not supported!
        </video>
      </div>
    );
  }
}

export default MainVideo;