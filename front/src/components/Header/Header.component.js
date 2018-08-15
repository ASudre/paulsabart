import React, { Component } from 'react';

import logo from './bandeau.jpg';
import './Header.style.scss';

class Header extends Component {

  render() {
    return (
      <header className="header">
        <img src={logo} className="headerLogo" alt="logo" />
        <div className="subTitle">
          <div>Atelier peinture de l'Université Paul Sabatier.</div>
          <div>Villa du SCAS le mardi de 17h à 20h.</div>
        </div>
      </header>
    );
  }
}

export default Header;