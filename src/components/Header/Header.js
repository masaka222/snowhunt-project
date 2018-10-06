import React, { Component } from 'react';
import './Header.css';
import IconMagnifyingGlass from '../../IconMagnifyingGlass';
import logo from '../../assets/SnowHunt-logo.png';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__navigation">
          <button className="nav-btn"></button>
          Navigation
        </div>
        <img src={logo} alt="Snowhunt logo" className="header__logo"/>
        <div className="header__search">
          Search
          <div className="magnifying-icon">
            <IconMagnifyingGlass 
                    width="2rem" 
                    height="2rem"
                    fill="#999"
            />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;