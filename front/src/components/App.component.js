import 'babel-polyfill';
import React from 'react';

import Footer from './Footer/Footer.component';
import Header from './Header/Header.component';
import Main from './Main/Main.component';

import style from './App.style.css';

const App = () => {
  return <div className={style.app}>
    <Header className={style.header}/>
    <Main className={style.main}/>
    <Footer className={style.footer}/>
  </div>;
};

export default App;