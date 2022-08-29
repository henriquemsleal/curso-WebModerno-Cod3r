function gerarNumerosEntreX10(min, max) {
  if (min > max) [max, min] = [min, max];
  return new Promise(resolve => {
    const fator = max - min + 1;
    const aleatorio = parseInt(Math.random() * fator + min);
    resolve(aleatorio);
  });
}

gerarNumerosEntreX10(1, 10)
  .then(numero => numero * 10)
  .then(numeroX10 => `O número gerado foi ${numeroX10}`)
  .then(console.log);
