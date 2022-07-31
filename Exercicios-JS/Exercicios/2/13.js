function filtrarNumeros(array) {
  novoArray = [];
  array.filter(item => (!isNaN(item) ? novoArray.push(item) : null));
  return novoArray;
}
console.log(filtrarNumeros(['a', '2', 10, 'd', 30, 'f']));

// ou

function filtrarNumeros2(array) {
  return array.filter(item => typeof item === 'number');
}
console.log(filtrarNumeros(['a', '15', 4, 'd', 50, 'f']));
