import React, { Component } from 'react';
import style from './Main.style.css';

import apiService from '../../services/api.service';
import Menu from './Menu/Menu.component';
import Content from './Content/Content.component';
import filesUtils from './files.utils';

class Main extends Component {

  constructor() {
    super();
    this.state = {
      files: [],
    }
  }

  componentDidMount() {
    apiService.listFiles().then(list => {
      this.setState({files: filesUtils.buildMenuContent(list)});
    }).catch(e => {
      console.error(e);
    });
  }

  render() {
    return (
      <div className={style.main}>
        <div className={style.leftMenu} >
          <Menu files={this.state.files}/>
        </div>
        <Content className={style.content} files={this.state.files}/>
      </div>
    );
  }
}

export default Main;