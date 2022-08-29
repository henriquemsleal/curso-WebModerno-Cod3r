function objParaArray(obj) {
  return Object.entries(obj);
}
console.log(objParaArray({ a: 1, b: 'dois', c: 3 }));

// ou

function objParaArray2(obj) {
  const chaves = Object.keys(obj);
  const array = chaves.map(chave => [chave, obj[chave]]);
  return array;
}
console.log(objParaArray2({ a: 10, b: 'onze', c: 12 }));
