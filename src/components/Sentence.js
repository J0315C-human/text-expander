import React from 'react';
import PropTypes from 'prop-types';
import Word from './Word.js';
import '../styles/Sentence.css';

// words: all the words
// displayIndexes: which are visible
const Sentence = ({words, visibleIndexes, clickableIndexes, onWordClick}) => {
  let id = -1;
  console.log('visible Indexes', visibleIndexes);
  console.log('clickable Indexes', clickableIndexes);
  return (
    <div className="sentence">
      {words.map(word => {
        id += 1;
        if (visibleIndexes.includes(`${id}`)) {
          if (clickableIndexes.includes(`${id}`)) {
            return ( // clickable word
            <Word key={id} type="word wordExpandable" index={id} onClick={(wordIdx) => onWordClick(wordIdx)}>{word.replace(/_/g, ' ')}</Word>
            );
          }
          return ( // visible word
          <Word key={id} type="word" index={id} onClick={() => null}>{word.replace(/_/g, ' ')}</Word>
          );
        }
        return ( // invisible word (collapses)
        <Word key={id} type="wordInvisible" index={id} onClick={() => null}>{word.replace(/_/g, ' ')}</Word>
        );
      })
      }
    </div>
  );
};

Sentence.propTypes = {
  words: PropTypes.array,
  visibleIndexes: PropTypes.array,
  clickableIndexes: PropTypes.array,
  onWordClick: PropTypes.func,
};
export default Sentence;
