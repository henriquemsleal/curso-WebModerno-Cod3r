function multiplicar(numeroA, numeroB) {
  let resultado = 0;
  /* a otimização feita para diminuir a quantidade de chamadas recursivas pode ser
  realizada aqui para diminuir a quantidade de loops */
  for (let i = 0; i < numeroB; i++) resultado += numeroA;
  return resultado;
}

console.log(multiplicar(3, 7));

// ou

function multiplicar(numeroA, numeroB) {
  if (numeroA === 0 || numeroB === 0) return 0;
  const maiorNumero = Math.max(numeroA, numeroB);
  const menorNumero = Math.min(numeroA, numeroB);
  function multiplicarRecursivamente(numero, multiplicador) {
    return multiplicador === 1
      ? numero
      : numero + multiplicarRecursivamente(numero, multiplicador - 1);
  }
  // nessa versão, garantimos que o multiplicador será será o menor número, portanto haverá o mínimo de chamadas recursivas
  return multiplicarRecursivamente(maiorNumero, menorNumero);
}

console.log(multiplicar(3, 5));
