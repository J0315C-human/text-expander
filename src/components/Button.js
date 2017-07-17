import React from 'react';
import '../styles/Button.css';

const Button = ({onClick, text, type}) => {
  return (
    <div onClick={onClick} className={type}>{text}</div>
  );
};

export default Button;
