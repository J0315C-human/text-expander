import React from 'react';
import '../styles/ExpanderDisplay.css';

const ExpanderDisplay = ({children}) => {
  return (
    <div className="expanderDisplayContainer">
      <div className="expanderDisplay">
        {children}
      </div>
    </div>
  );
};

export default ExpanderDisplay;
