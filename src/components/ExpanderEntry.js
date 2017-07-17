import React from 'react';
import EntryField from './EntryField.js';
import Button from './Button.js';
import Warnings from './Warnings.js';
import '../styles/ExpanderEntry.css';

const ExpanderEntry = ({ sentence, inputValid, onClick, onEntryChange }) => {
  return (
    <div className="expanderEntry">
      <EntryField onChange={(val) => onEntryChange(val)}/>
      <Button text="Create" onClick={onClick} type={ inputValid ? 'btn btnenabled' : 'btn btndisabled'}/>
      <Warnings text={ inputValid ? '' : 'invalid brackets!'} />
    </div>


  );
};

export default ExpanderEntry;
