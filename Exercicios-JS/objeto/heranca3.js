const pai = { nome: 'João', corCabelo: 'preto', olhos: 'castanhos escuros e grandes' };
const filha1 = Object.create(pai);

filha1.nome = 'Ana';
console.log(filha1.olhos);

const filha2 = Object.create(pai, {
  nome: {
    value: 'Henrique',
    writable: false,
    enumerable: true,
  },
});

console.log(filha2.nome);
filha2.nome = 'Pedro';
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo} e olhos ${filha2.olhos}.`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

for (let key in filha2) {
  filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança ${key}`);
}
