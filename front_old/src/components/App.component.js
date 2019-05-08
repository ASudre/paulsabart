import 'babel-polyfill';
import React, { Component } from 'react';

import apiService from '../services/api.service';
import filesUtils from '../utils/files.utils';

import Footer from './Footer/Footer.component';
import Menu from './Menu/Menu.component';
import Header from './Header/Header.component';
import Home from './Home/Home.component';
import SubTitle from './SubTitle/SubTitle.component';

import './App.style.scss';

function buildImagePath(theme, category, file) {
  return `${config.server.host}:${config.server.port}${config.server.path ? `/${config.server.path}` : ''}/${config.server.imagesFolder}/${theme}/${category}${file.file_path ? `/${file.file_path}` : ''}/${file.file_name}`;
}

function buildSlideShowFromCategoryFiles(theme, category, categoryFiles) {
  return categoryFiles.reduce((files, file) => ([
    ...files,
    {
      src: buildImagePath(theme, category, file),
      thumbnail: buildImagePath(theme, category, file),
      thumbnailWidth: 320,
      caption: file.comment,
    },
  ]), []);
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      files: [],
    }
  }

  componentDidMount() {
    apiService.listFiles().then(list => {
      this.setState({ files: filesUtils.buildMenuContent(list) });
    }).catch(e => {
      console.error(e);
    });
  }

  render() {
    return <div className="app">
      <div className="menu-content">
        <Menu className="menu" files={this.state.files}>
          <SubTitle />
        </Menu>
        <div className="right-content">
          <Header>
            <SubTitle />
          </Header>
          <Home files={this.state.files} />
        </div>
      </div>
      <Footer className="footer" />
    </div>;
  }
};

export default App;