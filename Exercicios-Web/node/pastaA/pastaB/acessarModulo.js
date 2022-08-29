const moduloA = require('../../moduloA'); // caminho relativo
console.log(moduloA.ola);

const saudacao = require('saudacao'); // em node_modules
console.log(saudacao.ola);

// com padrao index, pode importar a pasta que contem um index.js
const C = require('./pastaC');
console.log(C.ola2);

// modules core - já vem pré instalados com o node
const http = require('http');
http
  .createServer(function (req, res) {
    res.write('Bom dia');
    res.end();
  })
  .listen(8080);
