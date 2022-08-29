function mediaArray(array) {
  let total = 0;
  array.map(numero => (total += numero));
  return total / array.length;
}
console.log(mediaArray([100, 110, 120, 200, 250, 300, 400]));

// ou

function mediaArray2(array) {
  return array.reduce((acumulador, atual) => acumulador + atual, 0) / array.length;
}
console.log(mediaArray2([100, 110, 120, 200, 250, 300, 400]));
