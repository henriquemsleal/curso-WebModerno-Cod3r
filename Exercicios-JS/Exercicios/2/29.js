function segundoMaior(numeros) {
  return numeros.sort()[numeros.length - 2];
}
console.log(segundoMaior([12, 16, 1, 5]));

// ou

function segundoMaior2(numeros) {
  let indiceDoMaior = 0;
  let segundoMaior;
  numeros.forEach((numero, indice) => {
    if (numero > numeros[indiceDoMaior]) indiceDoMaior = indice;
  });
  numeros.splice(indiceDoMaior, 1);
  segundoMaior = numeros[0];
  numeros.forEach(numero => {
    if (numero > segundoMaior) segundoMaior = numero;
  });
  return segundoMaior;
}
console.log(segundoMaior2([120, 106, 15, 125]));
