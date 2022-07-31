function estaEntre(numero, minimo, maximo, inclusivo = false) {
  console.log(inclusivo);
  if (inclusivo) return numero >= minimo && numero <= maximo ? true : false;
  // if(inclusivo) return numero >= minimo && numero <= maximo
  if (!inclusivo) return numero > minimo && numero < maximo ? true : false;
  // return numero > minimo && numero < maximo
}

/* // ou
function estaEntre(minimo, maximo, numero, inclusivo = false) {
return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
} 
*/

console.log(estaEntre(2, 2, 10));
