import React from 'react';
import PropTypes from 'prop-types';

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

Warnings.propTypes = {
  text: PropTypes.string,
}
export default Warnings;
