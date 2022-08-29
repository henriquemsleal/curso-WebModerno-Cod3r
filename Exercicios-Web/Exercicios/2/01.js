function saudar(nome) {
  return `Olá, ${nome}!`;
}

// ou
function saudar2(nome) {
  return ['Olá', nome].join(', ').concat('!');
}

console.log(saudar('Carlos'));
console.log(saudar2('Carlos'));
