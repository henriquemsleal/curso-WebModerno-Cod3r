function meuObjeto() {}
console.log(meuObjeto.prototype);

const obj1 = new meuObjeto();
const obj2 = new meuObjeto();
console.log(obj1.__proto__ === obj2.__proto__); // true - todos os objetos criados a partir de uma mesma função construtora apontam para o mesmo protótipo
console.log(meuObjeto.prototype === obj1.__proto__); // true - criando objeto, a partir de função construtora, usando o new, o protótipo desse objeto aponta para a função.prototype

meuObjeto.prototype.nome = 'Anônimo';
meuObjeto.prototype.falar = function () {
  // console.log(`Bom dia! Meu nome é ${this.nome}!`);
  return `Bom dia! Meu nome é ${this.nome}!`;
};
obj1.nome = 'Carlos';
obj2.nome = 'Henrique';
console.log(obj1.falar()); // Bom dia! Meu nome é Carlos!
console.log(obj2.falar()); // Bom dia! Meu nome é Henrique!

const obj3 = {};
console.log(obj3.__proto__); // {}
obj3.__proto__ = meuObjeto.prototype;
console.log(obj3.__proto__); // meuObjeto { nome: 'Anônimo', falar: [Function] }

// Resumo:

console.log(new meuObjeto().__proto__ === meuObjeto.prototype); // true
console.log(meuObjeto.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null); // true - o atributo existe, não é undefined
