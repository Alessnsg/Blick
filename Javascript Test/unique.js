

function hasUniqueCharacters(x = 'SomeValue') {
  const some = x.split("");
  const copy = x.split("");

  for (const char of some ){
    if (copy.indexOf(char)) return false;
  }
  return true;
}

console.info('True : ' +  hasUniqueCharacters('Hola'), 'False :' +  hasUniqueCharacters('Cancer'));