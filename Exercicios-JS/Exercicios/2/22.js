function sortearNumero(num) {
  const aleatorio = Math.floor(Math.random() * (11 - 1)) + 1;
  if (num === aleatorio) {
    return `Parabéns! O número sorteado foi o ${aleatorio}`;
  } else {
    return `Que pena! O número sorteado foi o ${aleatorio}`;
  }
}

console.log(sortearNumero(1));
