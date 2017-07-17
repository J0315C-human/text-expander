import React from 'react';
import Sentence from './Sentence.js';
import '../styles/ExpanderDisplay.css';

const ExpanderDisplay = () => {
  return (
    <div className="expanderDisplayContainer">
      <div className="expanderDisplay">
        <Sentence words="Hel There Mr. Edminton how are you go tod f d f fe few aweogi f weog " />
      </div>
    </div>
  );
};

export default ExpanderDisplay;
