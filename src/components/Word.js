import React from 'react';
import '../styles/Word.css';

const Word = (props) => {
  return (
    <span className="wordExpandable">{props.children}</span>
  );
};

export default Word;
