function repetirSimbMais(numVezes) {
  let str = '';
  for (let i = 0; i < numVezes; i++) {
    str += '+';
  }
  return str;
}

console.log(repetirSimbMais(6));

// ou

function simboloMais(quantidade) {
  return Array(quantidade).fill('+').join('');
}
console.log(simboloMais(4));

// ou

function simboloMais2(quantidade) {
  return '+'.repeat(quantidade);
}
console.log(simboloMais2(2));
