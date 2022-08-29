const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];
// método forEach recebe três argumentos (item, índice e próprio array)
aprovados.forEach((nome, indice) => {
  // suprimindo o terceiro argumento
  console.log(`${indice + 1}) ${nome}`);
});
const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados);
