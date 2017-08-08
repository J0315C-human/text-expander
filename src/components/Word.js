import React from 'react';
import '../styles/Word.css';

const Word = ({children, index, onClick, type}) => {
  return (
    <span
      className={
        children === '_' ?
        'wordInvisible'
        :
        type
        }
      onClick={ ()=> onClick(index)}
      >{children}
    </span>
  );
};

export default Word;
