function buscarPalavraSemelhante(str, lista) {
  return lista.filter(palavra => palavra.includes(str));
}
console.log(buscarPalavraSemelhante('pro', ['programação', 'mobile', 'profissional']));
