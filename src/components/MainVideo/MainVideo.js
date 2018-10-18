import React, { Component } from 'react';
import './MainVideo.css';
import videomp4 from '../../assets/Mt_Baker.mp4';
import videowebm from '../../assets/Mt_Baker.webm';
import clouds from '../../assets/clouds3.png';
import image from '../../assets/man-on-mountain2.png';

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
        <div className="main-video__grid">
          <img src={image} alt="Man on Mountain" className="main-video__grid-image"/>
          <p className="main-video__grid-text">
            Lorem ipsum dolor sit amet consectetur adipiscing elit viverra, 
            aliquet ad odio aenean porta risus nec nulla, ullamcorper imperdiet 
            luctus sollicitudin fames parturient dapibus. Magnis quis fusce tempor 
            dapibus maecenas sociis metus vehicula per, platea scelerisque primis 
            aptent lacus varius dictum. Est facilisi habitant ad suspendisse taciti 
            lacus ante ornare, praesent ultrices nullam montes purus hendrerit aliquam, 
            pellentesque eget nulla nunc turpis eu platea.
          </p>
        </div>
      </div>
    );
  }
}

export default MainVideo;