function primUltElemArray(array) {
  return [array.shift(), array.pop()];
  // return [array[0], array[array.length - 1]];
}

console.log(primUltElemArray(['primeiro', 'a', 'b', 'c', 'ultimo']));

// ou

function receberPrimeiroEUltimoElemento(elementos) {
  const primeiroElemento = elementos.shift();
  const ultimoElemento = elementos.pop();
  return [primeiroElemento, ultimoElemento];
}

console.log(receberPrimeiroEUltimoElemento(['1o', 'a', 'b', 'c', 'ult']));

// ou

function receberPrimeiroEUltimoElemento2([primeiroElemento, ...elementosRestantes]) {
  const ultimoElemento = elementosRestantes.pop();
  return [primeiroElemento, ultimoElemento];
}

console.log(receberPrimeiroEUltimoElemento2(['1', 'a', 'b', 'c', '5']));
