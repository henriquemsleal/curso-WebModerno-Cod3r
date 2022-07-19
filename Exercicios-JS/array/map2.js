const carrinho = [
  '{"nome": "Borracha", "preco": 3.45 }',
  '{"nome": "Caderno", "preco": 13.90 }',
  '{"nome": "Kit de Lapis", "preco": 41.22 }',
  '{"nome": "Caneta", "preco": 7.50 }',
];

// Retornar um array apenas com os preços
const obj = carrinho.map(item => JSON.parse(item));
// console.log(obj);
const precos = obj.map(item => item.preco);
// console.log(precos);
const moeda = precos.map(preco => `R$${parseFloat(preco).toFixed(2).replace('.', ',')}`);
console.log(moeda);
