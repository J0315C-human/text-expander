import React from 'react';
import PropTypes from 'prop-types';
import EntryField from './EntryField.js';
import Button from './Button.js';
import Warnings from './Warnings.js';
import '../styles/ExpanderEntry.css';

const ExpanderEntry = ({ inputValid, onClick, onEntryChange }) => {
  return (
    <div>
      <div className="expanderEntry" id="expanderEntry">
        <EntryField onChange={(val) => onEntryChange(val)} />

        <Warnings text={inputValid ? '' : 'invalid brackets!'} />
      </div>
      <Button text="Create" onClick={onClick} type={inputValid ? 'btn btnenabled' : 'btn btndisabled'} />
    </div>
  );
};

ExpanderEntry.propTypes = {
  inputValid: PropTypes.bool,
  onClick: PropTypes.func,
  onEntryChange: PropTypes.func,
}
export default ExpanderEntry;
