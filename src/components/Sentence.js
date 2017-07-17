import React from 'react';
import Word from './Word.js';
import '../styles/Sentence.css';

const Sentence = ({words}) => {
  return (
    <div className="sentence">
      {words.split(' ').map(word => (   // / this should be in a reducer
        <Word >{word}</Word>
      ))}
    </div>
  );
};

export default Sentence;
