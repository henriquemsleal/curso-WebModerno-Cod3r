// como o Array.map funciona
// simulando map

Array.prototype.map2 = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

const carrinho = [
  '{"nome": "Borracha", "preco": 3.45 }',
  '{"nome": "Caderno", "preco": 13.90 }',
  '{"nome": "Kit de Lapis", "preco": 41.22 }',
  '{"nome": "Caneta", "preco": 7.50 }',
];

// Retornar um array apenas com os preços
const obj = carrinho.map(item => JSON.parse(item));
const precos = obj.map(item => item.preco);
console.log(precos);
const moeda = precos.map2(preco => `R$${parseFloat(preco).toFixed(2).replace('.', ',')}`);
console.log(moeda);
