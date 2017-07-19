import React from 'react';
import Word from './Word.js';
import '../styles/Sentence.css';

// words: all the words
// displayIndexes: which are visible
const Sentence = ({words, visibleIndexes, clickableIndexes, onWordClick}) => {
  let id = -1;
  console.log('visible Indexes', visibleIndexes);
  console.log('clicakble Indexes', clickableIndexes);
  return (
    <div className="sentence">
      {words.map(word => {
        id += 1;
        if (visibleIndexes.includes(`${id}`)) {
          if (clickableIndexes.includes(`${id}`)) {
            console.log(`word ${id} is visible and clicakble`);

            return ( // clickable word
            <Word key={id} type="word wordExpandable" index={id} onClick={(wordIdx) => onWordClick(wordIdx)}>{words[id]}</Word>
            );
          }
          console.log(`word ${id} is visible`);

          return ( // visible word
          <Word key={id} type="word" index={id} onClick={() => null}>{words[id]}</Word>
          );
        }
        console.log(`word ${id} is invisible`);

        return ( // invisible word (collapses)
        <Word key={id} type="wordInvisible" index={id} onClick={() => null}>{words[id]}</Word>
        );
      })
      }
    </div>
  );
};

export default Sentence;
