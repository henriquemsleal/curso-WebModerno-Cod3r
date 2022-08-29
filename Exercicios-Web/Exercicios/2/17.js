function somarElementos(array) {
  return array.reduce((acumulador, atual) => acumulador + atual, 0);
}
console.log(somarElementos([2, 4, 6, 8, 10]));

// ou

function somarElementos2(array) {
  return array.length === 0 ? 0 : array[0] + somarElementos(array.slice(1));
}
console.log(somarElementos2([2, 4, 6, 8, 10]));
