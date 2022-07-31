const obj = [
  { nome: 'Jornal online', categoria: 'Informação', preco: 89.99 },
  { nome: 'Cinema', categoria: 'Entretenimento', preco: 150 },
  { nome: 'Galaxy S20', categoria: 'Eletrônicos', preco: 3599.99 },
  { nome: 'Macbook Pro', categoria: 'Eletrônicos', preco: 30999.9 },
];

function somarDespesas(lista) {
  total = 0;
  lista.map(item => (total += item.preco));
  return total;
}
console.log(somarDespesas(obj));

// ou

function somarDespesas2(lista) {
  total = 0;
  for (const item of lista) {
    total += item.preco;
  }
  return total;
}
console.log(somarDespesas2(obj));
