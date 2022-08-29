const pessoa = {
  nome: 'Rebeca',
  idade: 2,
  peso: 13,
};

console.log(Object.keys(pessoa)); // chaves
console.log(Object.values(pessoa)); // valores
console.log(Object.entries(pessoa)); // um array para cada chave/valor

Object.entries(pessoa).forEach(e => {
  console.log(`${e[0]}: ${e[1]}`);
});
// ou
Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});

Object.defineProperty(pessoa, 'dataNascimento', {
  configurable: true,
  enumerable: true, // listável
  writable: false, // não pode ser alterado
  value: '01/01/2019',
});
pessoa.dataNascimento = '01/01/2017';
console.log(pessoa.dataNascimento); // resultado: '01/01/2019'
console.log(Object.keys(pessoa)); // [ 'nome', 'idade', 'peso', 'dataNascimento' ]
Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: false, // alterado para não listável, porque configurable: true
});
console.log(Object.keys(pessoa)); // [ 'nome', 'idade', 'peso' ]

// Object.assign (ECMAScript 2015)
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2);
console.log(dest);
console.log(obj);
// dest == obj
Object.freeze(dest);
obj.c = 1234;
console.log(obj); // c não foi alterado
