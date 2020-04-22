const removeJNames = names => {
  let newNames = names;
  names.forEach(name => {
    if(name.charAt(0)=== 'J') {
      const index = newNames.indexOf(name);
      newNames.splice(index, 1);
    }
  });
  return newNames
};

module.exports = removeJNames;