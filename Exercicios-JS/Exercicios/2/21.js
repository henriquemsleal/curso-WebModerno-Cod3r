function obterMenorNumero(array) {
  let menor = array[0] + 1;
  array.forEach(numero => (numero < menor ? (menor = numero) : null));
  return menor;
}
console.log(obterMenorNumero([100, 0, 110, 120, 20, 25, -30, 40]));

// ou

function obterMenorNumero2(array) {
  return array.reduce((anterior, atual) => (anterior < atual ? anterior : atual));
}
console.log(obterMenorNumero2([100, 0, -110, 120, 20, 25, -30, 40]));

// ou

function obterMenorNumero3(array) {
  return Math.min(...array);
}
console.log(obterMenorNumero3([100, 0, 110, -120, 20, 25, -30, 40]));
