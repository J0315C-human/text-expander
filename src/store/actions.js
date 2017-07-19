const actionSymbols = [
  'CREATE_EXPANDER',
  'SENTENCE_CHANGE',
  'EXPAND_WORD',
];

const mapToConst = (types) => types.reduce((mem, name) => {
  mem[name] = name;
  return mem;
}, {});

const actionTypes = mapToConst(actionSymbols);

export default actionTypes;
