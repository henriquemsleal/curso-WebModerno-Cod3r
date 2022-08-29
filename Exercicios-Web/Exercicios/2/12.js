function copiarObjetoSemUmaPropriedade(obj, prop) {
  const objeto = Object.assign({}, obj);
  delete objeto[prop];
  return objeto;
}
console.log(copiarObjetoSemUmaPropriedade({ a: 1, b: 2, c: 3 }, 'a'));

// ou

function copiarObjetoSemUmaPropriedade2(obj, prop) {
  const objeto = { ...obj };
  delete objeto[prop];
  return objeto;
}
console.log(copiarObjetoSemUmaPropriedade2({ a: 10, b: 20, c: 30 }, 'a'));
