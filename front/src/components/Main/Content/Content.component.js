import React, { Component } from 'react';
import './Content.style.scss';
import toSnakeCase from 'to-snake-case';

import config from '../../../config/config';

export default (props) => (
  <div className="content">
    {Object.keys(props.files).map(theme => (
      <div key={theme}>
        <h1 id={toSnakeCase(theme)}>{theme}</h1>
        <div className="themes">
          {props.files[theme] ?
            Object.keys(props.files[theme]).map(category => (
              <div key={category}>
                <h2 id={toSnakeCase(`${theme}${category}`)}>{category}</h2>
                <div className="categories">
                  {props.files[theme][category].map(file => (
                    <div key={file.file_name} className="images">
                      <img src={buildImagePath(theme, category, file)} className="img" />
                      <p>{file.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )) : null
          }
        </div>
      </div>
    ))}
  </div>
);

function buildImagePath(theme, category, file) {
  return `${config.server.host}:${config.server.port}/${config.server.imagesFolder}/${theme}/${category}${file.file_path ? `/${file.file_path}` : ''}/${file.file_name}`;
}
