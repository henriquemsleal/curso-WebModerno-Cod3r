function removerVogais(frase) {
  const vogais = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  let novaFrase = '';
  for (const str of frase) {
    if (!vogais.includes(str)) novaFrase += str;
  }
  return novaFrase;
}
console.log(removerVogais('Curso Web Moderno'));

// ou

function removerVogais2(frase) {
  return frase.replace(/[aeiou]/gi, '');
}
console.log(removerVogais2('Curso Web Moderno'));

/* function removerVogais(frase) {
  const vogais = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  vogais.forEach(vogal => {
    frase = frase.replace(vogal, '');
    console.log(frase);
  });
  return frase;
}
console.log(removerVogais('Curso Web Moderno')); */
