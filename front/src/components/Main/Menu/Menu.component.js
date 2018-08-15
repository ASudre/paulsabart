import React, { Component } from 'react';
import toSnakeCase from 'to-snake-case';

import './Menu.style.scss';

export default (props) => (
  <div className="menu">
    {Object.keys(props.files).map(theme => (
    <div key={theme}>
      <a href={`#${toSnakeCase(theme)}`} >{theme}</a>
      <ul>
        {props.files[theme] ?
          Object.keys(props.files[theme]).map(
            category => (
              <li key={category}>
                <a key={category} href={`#${toSnakeCase(`${theme}${category}`)}`}>{category}</a>
              </li>
            )) : null

        }
      </ul>
    </div>
    ))}
  </div>
);
