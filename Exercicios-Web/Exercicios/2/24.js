function contarOcorrencia(carac, string) {
  let ocorrencias = 0;
  for (const str of string) if (str === carac) ocorrencias++;
  return ocorrencias;
}

console.log(contarOcorrencia('e', 'Curso Web Moderno'));

// ou

function contarCaractere(caractereBuscado, frase) {
  return [...frase].filter(caractere => caractere === caractereBuscado).length;
}
console.log(contarOcorrencia('o', 'Curso Web Moderno'));
