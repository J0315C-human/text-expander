import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({onClick, text, type}) => {
  return (
    <div onClick={onClick} className={type + " appButton"}>{text}</div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string,
}
export default Button;
