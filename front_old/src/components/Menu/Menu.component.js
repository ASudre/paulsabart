import React, { Component } from 'react';
import toSnakeCase from 'to-snake-case';

import './Menu.style.scss';

export default (props) => (
  <div className="menu">
    <div className="subtitle">
      {props.children}
    </div>
    <div className="menu-list">
      {props.files ? Object.keys(props.files).map(theme => (
        <div key={theme}>
          <a href={`#${toSnakeCase(theme)}`} className="theme">{theme}</a>
          <div className="categories">
            {props.files[theme] ?
              Object.keys(props.files[theme]).map(
                category => (
                  <a key={category} href={`#${toSnakeCase(`${theme}${category}`)}`}>{category}</a>
                )) : null
            }
          </div>
        </div>
      )) : null}
    </div>
  </div>
);
