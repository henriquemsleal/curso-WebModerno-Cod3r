// Com promise...
const http = require('http');

const getTurma = letra => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let resultado = '';

      res.on('data', dados => {
        resultado += dados;
      });

      res.on('end', () => {
        try {
          resolve(JSON.parse(resultado));
        } catch (e) {
          reject(e);
        }
      });
    });
  });
};

// Recurso do ES8
// Objetivo de simplificar o uso de promises...
let obterAlunos = async () => {
  const turmaA = await getTurma('A');
  const turmaB = await getTurma('B');
  const turmaC = await getTurma('C');
  return [].concat(turmaA, turmaB, turmaC);
}; // retorna um objeto AsyncFunction

let teste = obterAlunos() // obtem um array de objetos
  .then(alunos => alunos.map(aluno => aluno.nome))
  .then(nomesAlunos => console.log(nomesAlunos));
