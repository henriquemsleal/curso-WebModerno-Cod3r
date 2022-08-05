/* 
npm init // criou arquivo package.json
npm i --save axios // instalou pacote axios - client http - faz requisições p/ obter informações remotamente
*/

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

const chineses = f => f.pais === 'China';
const mulheres = f => f.genero === 'F';
const menorSalario = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual;
};

// metodo get obtem informação de servidor
axios.get(url).then(response => {
  const funcionarios = response.data;
  // console.log(funcionarios);

  // mulher chinesa com menor Salário
  const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario);

  console.log(func);
});
