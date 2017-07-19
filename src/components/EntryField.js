import React from 'react';
import '../styles/EntryField.css';

const EntryField = ({onChange}) => {
  let input;
  return (
    <input className="expanderEntryInput" ref={node => {input = node;}}
    type="text" onChange={() => {onChange(input.value);}}
    value="These words {will be replaced {replaced {replaced {changed {switched up}} or added to} when clicked. {clicked by the user. {user, with a mouse.}}}}" />
  );
};

export default EntryField;
