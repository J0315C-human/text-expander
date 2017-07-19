import actionTypes from './actions.js';
import wordtree from './wordtree.js';


const defaultState = {
  inputSentence: 'These words {will be replaced {replaced {replaced {changed {switched up}} or added to} when clicked. {clicked by the user. {user, with a mouse.}}}}',
  inputValid: true,
  expanderWords: [], // list of single words (with brackets removed)
  expanderTree: {}, // structure of the 'word expansion tree'
  expandPath: [],  // drilldown path currently expanded
  clickableWordIndexes: [],
  visibleWordIndexes: [],
};

// console.log(getExpandedWords(collapseByPath([], tree0), words))


const expander = (state = defaultState, action) => {
  // console.log(action);
  // console.log(state);
  switch (action.type) {
  case actionTypes.CREATE_EXPANDER: {
    const words = wordtree.createDisplayWordlist(state.inputSentence);
    const tree = wordtree.createTreeStructure(state.inputSentence);
    const displayIndexes = wordtree.getExpandedWordIndexes(wordtree.collapseByPath([], tree));
    const clickableIndexes = wordtree.getClickableWordIndexes(tree);
    return {
      ...state,
      expanderWords: words,
      expanderTree: tree,
      visibleWordIndexes: displayIndexes,
      clickableWordIndexes: clickableIndexes,
      expandPath: [],
    };
  }
  case actionTypes.SENTENCE_CHANGE: {
    return Object.assign({}, state,
      {
        inputSentence: action.payload,
        inputValid: wordtree.checkBracketParity(action.payload),
      }
      );
  }
  case actionTypes.EXPAND_WORD: {
    const wordIdx = action.payload;
    const path = state.expandPath.concat(wordIdx);
    const collapsedTree = wordtree.collapseByPath(path, state.expanderTree);
    return {
      ...state,
      visibleWordIndexes: wordtree.getExpandedWordIndexes(collapsedTree),
      clickableWordIndexes: wordtree.getClickableWordIndexes(collapsedTree),
      expandPath: path,
    };
  }
  default:
    return state;
  }
};


export default expander;
