import React from 'react';

const style = {
  color: 'red',
  fontSize: '12px',
  position: 'absolute',
  top: '-20px',
  left: '10px',
};

const Warnings = ({text}) => {
  return (
    <div style={style} >{text}
    </div>
  );
};

export default Warnings;
