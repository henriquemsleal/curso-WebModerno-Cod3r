function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    try {
      con.log('temp'); // simulação de erro
      if (Math.random() < chanceErro) {
        reject('Ocorreu um erro!');
      } else {
        resolve(valor);
      }
    } catch (e) {
      reject(e);
    }
  });
}

funcionarOuNao('Testando...', 0.5)
  .then(v => `Valor: ${v}`)
  .then(
    v => consol.log(v),
    err => console.log(`Erro específico: ${err}`) // tratando erro dentro do then, o catch não será chamado
  )
  .then(console.log('Quase fim'))
  .catch(err => console.log(`Erro geral: ${err}`)) // depois de todos .then()
  .then(console.log('Fim'));
