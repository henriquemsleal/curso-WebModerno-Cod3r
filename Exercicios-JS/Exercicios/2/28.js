function filtrarNumerosPorDigitos(array, digitos) {
  return array.filter(num => (String(num).length === digitos ? num : null));
}
console.log(filtrarNumerosPorDigitos([38, 2, 365, 10, 125, 11], 2));

// ou

function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDesejada) {
  let resultado = [];
  for (const numero of numeros) {
    const quantidadeDeDigitos = String(numero).length;
    if (quantidadeDeDigitos === quantidadeDesejada) resultado.push(numero);
  }
  return resultado;
}
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 3));
