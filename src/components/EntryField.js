import React from 'react';
import '../styles/EntryField.css';

const EntryField = ({onChange}) => {
  let input;
  return (
    <input className="expanderEntryInput" ref={node => {input = node;}}
    type="text" onChange={() => {onChange(input.value);}}/>
  );
};

export default EntryField;
