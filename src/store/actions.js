const actionTypes = [
  'ACTION_TYPE0',
];

const mapToConst = (types) => types.reduce((mem, name) => {
  mem[name] = name;
  return mem;
}, {});

export default mapToConst(actionTypes);
