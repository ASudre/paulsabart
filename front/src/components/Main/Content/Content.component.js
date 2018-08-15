import React, { Component } from 'react';
import style from './Content.style.css';
import toSnakeCase from 'to-snake-case';

import config from '../../../config/config';

export default (props) => (
  <div className={style.content}>
    {Object.keys(props.files).map(theme => (
      <div key={theme}>
        <h1 id={toSnakeCase(theme)}>{theme}</h1>
        <div className={style.themes}>
          {props.files[theme] ?
            Object.keys(props.files[theme]).map(category => (
              <div key={category}>
                <h2 id={toSnakeCase(`${theme}${category}`)}>{category}</h2>
                <div className={style.categories}>
                  {props.files[theme][category].map(file => (
                    <div key={file.file_name} className={style.images}>
                      <img src={buildImagePath(theme, category, file)} className={style.img} />
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
