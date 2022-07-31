function repetir(elemento, repeticoes) {
  resultado = [];
  for (i = 0; i < repeticoes; i++) {
    resultado.push(elemento);
  }
  return resultado;
}

console.log(repetir('abc', 6));

// ou

function repetir(item, quantidade) {
  return Array(quantidade).fill(item);
}
console.log(repetir(123, 6));
