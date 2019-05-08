import React, { Component } from 'react';
import toSnakeCase from 'to-snake-case';
import Gallery from 'react-grid-gallery';

import './Home.style.scss';
import config from '../../config/config';

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
      thumbnailCaption: file.comment,
    },
  ]), []);
}

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
                  <Gallery
                    images={buildSlideShowFromCategoryFiles(theme, category, props.files[theme][category])}
                    enableImageSelection={false}
                  />
                </div>
              </div>
            )) : null
          }
        </div>
      </div>
    ))}
  </div>
);
