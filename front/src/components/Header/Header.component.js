import React, { Component } from 'react';

import logo from './bandeau.jpg';
import './Header.style.scss';

class Header extends Component {

  render() {
    return (
      <header className="header">
        <img src={logo} className="headerLogo" alt="logo" />
        <div className="subtitle">
          {this.props.children}
        </div>
      </header>
    );
  }
}

export default Header;