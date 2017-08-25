import React from 'react';
import PropTypes from 'prop-types'
import '../styles/EntryField.css';

const EntryField = ({ onChange }) => {
  let input;
  return (
    <textarea className="expanderEntryInput" ref={node => { input = node; }}
      rows={4} onChange={() => { onChange(input.value); }}
    />
  );
};

EntryField.propTypes = {
  onChange: PropTypes.func,
}

export default EntryField;
