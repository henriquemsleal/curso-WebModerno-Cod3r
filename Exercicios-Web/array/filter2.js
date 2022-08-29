// simulando um método Array.filter

Array.prototype.filter2 = function (callback) {
  const newArray = [];
  for (let index = 0; index < this.length; index++) {
    if (callback(this[index], index, this)) {
      newArray.push(this[index]);
    }
  }
  return newArray;
};

const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'iPad Pro', preco: 4199, fragil: true },
  { nome: 'Copo de vidro', preco: 12.49, fragil: true },
  { nome: 'Copo de plástico', preco: 2499, fragil: false },
];

const caro = item => item.preco >= 500;
const fragil = item => item.fragil; // já armazena valor booleano

const caroFragil = produtos.filter2(caro).filter2(fragil);
console.log(caroFragil);
