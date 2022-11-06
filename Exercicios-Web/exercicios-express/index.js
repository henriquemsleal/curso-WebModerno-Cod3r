const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const saudacao = require('./saudacaoMid');
const usuarioApi = require('./api/usuario');
/* const produtoApi = require('./api/produto');
produtoApi(app, 'com param!') */
// ou
require('./api/produto')(app, 'com param!');

app.post('/usuario', usuarioApi.salvar);
app.get('/usuario', usuarioApi.obter);

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(saudacao('Carlos'));

app.use((req, res, next) => {
  console.log('Antes');
  next();
});

// http://127.0.0.1:3000/clientes/relatorio?completo=true&ano=2022
// => Cliente relatório: completo = true ano = 2022
app.get('/clientes/relatorio', (req, res) =>
  res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
);

/* app.post('/corpo', (req, res) => {
  let corpo = '';
  req.on('data', parte => (corpo += parte));

  req.on('end', () => res.json(JSON.parse(corpo)));
}); */

app.post('/corpo', (req, res) => res.send(JSON.stringify(req.body)));

app.get('/clientes/:id', (req, res) => res.send(`Cliente ${req.params.id} selecionado.`));

// app.all('/opa', (req, res) => res.send('Estou bem!'));
app.get('/opa', (req, res, next) => {
  console.log('Durante...');
  res.json({
    data: [
      { id: 7, name: 'Ana', position: 1 },
      { id: 34, name: 'Bia', position: 2 },
      { id: 73, name: 'Carlos', position: 3 },
    ],
    count: 30,
    skip: 0,
    limit: 3,
    status: 200,
  });
  next();
});

app.use('/opa', (req, res) => console.log('Depois'));

app.listen(3000, msg => console.log('Executando'));
