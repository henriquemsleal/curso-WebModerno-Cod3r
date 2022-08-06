const fs = require('fs');

const caminho = __dirname + '/arquivo.json';

// sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8');
console.log(conteudo);

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
  // poderia testar se o err está preenchido ou não
  const config = JSON.parse(conteudo);
  console.log(`${config.db.host}:${config.db.port}`);
});

// forma simples de ler um arquivo json
const config = require('./arquivo.json');
console.log(config.db);

// leitura de uma pasta
fs.readdir(__dirname, (err, arquivos) => {
  console.log('Conteúdo da pasta:');
  console.log(arquivos);
});

// __dirname - caminho da pasta, disponível em todos os arquivos do node
