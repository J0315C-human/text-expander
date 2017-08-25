import React from 'react';
import PropTypes from 'prop-types';
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

Word.propTypes = {
  children: PropTypes.string,
  index: PropTypes.number,
  onClick: PropTypes.func,
  type: PropTypes.string,
}
export default Word;
