import React, { Component } from 'react';

import logo from './bandeau.jpg';
import style from './Header.style.css';

class Header extends Component {

  render() {
    return (
      <header className={style.header}>
        <img src={logo} className={style.headerLogo} alt="logo" />
        <div className={style.subTitle}>
          <div>Atelier peinture de l'Université Paul Sabatier.</div>
          <div>Villa du SCAS le mardi de 17h à 20h.</div>
        </div>
      </header>
    );
  }
}

export default Header;