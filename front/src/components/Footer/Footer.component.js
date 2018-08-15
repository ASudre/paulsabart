import React, { Component } from 'react';

import style from './Footer.style.css';

class Footer extends Component {

  render() {
    return (
      <footer className={style.footer}>
        <div>@2018</div>
      </footer>
    );
  }
}

export default Footer;