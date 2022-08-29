function obterParesIndicesPares(array) {
  novoArray = [];
  for (const indice in array) {
    if (indice % 2 === 0 && array[indice] % 2 === 0) novoArray.push(array[indice]);
  }
  return novoArray;
}
console.log(obterParesIndicesPares([10, 11, 12, 14, 15, 16, 17, 18, 19, 20]));

// ou

function obterParesIndicesPares2(array) {
  return array.filter((numero, indice) => {
    const numeroPar = numero % 2 === 0;
    const indicePar = indice % 2 === 0;
    return numeroPar && indicePar;
  });
}
console.log(obterParesIndicesPares2([11, 12, 14, 15, 16, 17, 18, 19, 20]));
