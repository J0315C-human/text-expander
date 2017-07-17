

const checkBracketParity = (sentence) => {
  let i = 0;
  const len = sentence.length;
  const stack = [];

  while (i < len) {
    /* If the exp[i] is a starting parenthesis then push it*/
    if (sentence[i] === '{') {
      stack.push('{');
    } else if (sentence[i] === '}') {
      if (stack.length === 0) {
        return false;       // no remaining chars
      }

      if (stack.pop() === '}') {
        return false;    // no left-match found
      }
    }
    i++;
  }

  if (stack.length === 0) {
    return true;
  }
  return false;
};


const defaultState = {
  inputSentence: '',
  inputValid: true,
  displaySentence: {},
  displayState: 0,  // have to decide what this will be
};


const expander = (state = defaultState, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
  case 'CREATE_EXPANDER': {
    return state;
  }
  case 'SENTENCE_CHANGE': {
    return Object.assign({}, state,
      {
        inputSentence: action.payload,
        inputValid: checkBracketParity(action.payload),
      }
    );
  }
  default:
    return state;
  }
};


export default expander;
