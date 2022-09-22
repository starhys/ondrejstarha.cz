import React from 'react';

import config from '../../config';
const pic = require('../assets/images/test.png');

export default function Footer() {
  return (
    <header>
      <p>{config.note}</p>
      <span className="avatar">
        <img
          height="128px"
          src="https://ucarecdn.com/ee84e719-abef-4a72-a43f-a15d32932133/"
          alt=""
        />
      </span>
      <h1>{config.authorName}</h1>
      <h2>{config.heading}</h2>
    </header>
  );
}
