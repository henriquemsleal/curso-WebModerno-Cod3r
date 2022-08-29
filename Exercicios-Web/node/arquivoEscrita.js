const fs = require('fs');

const produto = {
  name: 'Celular',
  preco: 1249.99,
  desconto: 0.15,
};

// parâmetros: caminho, conteúdo e callback
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
  console.log(err || 'Arquivo salvo!');
});
