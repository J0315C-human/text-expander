

const checkBracketParity = (sentence) => {
  let i = 0;
  const len = sentence.length;
  const stack = [];

  while (i < len) {
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

const sanitizeWords = (words) => {
  return words.replace(/}/g, ' } ')
    .replace(/{/g, ' { ')
    .replace(/(\s)+/g, ' ')
    .replace(/{ /g, '{')
    .replace(/ }/g, '}')
    .replace(/{{/g, '{... {')
    .replace(/{(\S*)}/g, '$1')
    .trim().split(/\s+/);
};

const createTreeStructure = (sentence) => {
  const sent = sanitizeWords(sentence);
  const len = sent.length;
  const root = {};

  const stack = [root];

  for (let i = 0; i < len; i++) {
    if (sent[i + 1] && sent[i + 1].includes('{')) {
      const branch = {};
      stack[stack.length - 1][i] = branch;
      stack.push(branch);
    } else if (sent[i].includes('}')) {
      stack[stack.length - 1][i] = null;
      for (let x = 0; x < (sent[i].match(/}/g) || []).length; x++) {
        stack.pop();
      }
    } else {
      stack[stack.length - 1][i] = null;
    }
  }
  return root;
};

// given a tree structure and a path, collapse each step in the path to the top-level.
// Order matters: paths represent order of words expanded by user (by index).
const collapseByPath = (path, tree) => {
  let treeCopy = Object.assign({}, tree);
  // console.log(path);
  for (const i of path) {
    if (i in treeCopy && treeCopy[i] !== null) {
      const tmp = treeCopy[i];
      delete treeCopy[i];
      treeCopy = Object.assign(treeCopy, tmp);
    }
  }
  return treeCopy;
};

// get the visible (expanded) words given a collapsed tree structure
const getExpandedWordIndexes = (collapsedTree) => {
  const result = [];
  for (const i in collapsedTree) {
    result.push(i);
  }
  return result;
};

const getClickableWordIndexes = (collapsedTree) => {
  const result = [];
  for (const i in collapsedTree) {
    if (collapsedTree[i]) {
      result.push(i);
    }
  }
  return result;
};

const createDisplayWordlist = (words) =>
  sanitizeWords(words).map(
    word => word.replace(/{/g, '').replace(/}/g, ''));

export default {
  checkBracketParity,
  getExpandedWordIndexes,
  getClickableWordIndexes,
  createTreeStructure,
  createDisplayWordlist,
  collapseByPath,
};
