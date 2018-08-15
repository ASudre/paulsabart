import 'babel-polyfill';
import React from 'react';

import Footer from './Footer/Footer.component';
import Header from './Header/Header.component';
import Main from './Main/Main.component';

import './App.style.scss';

const App = () => {
  return <div className="app">
    <Header className="header"/>
    <Main className="main"/>
    <Footer className="footer"/>
  </div>;
};

export default App;