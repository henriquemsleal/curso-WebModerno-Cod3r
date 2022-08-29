const tecnologias = new Map();
tecnologias.set('react', { framework: false });
tecnologias.set('angular', { framework: true });

console.log(tecnologias.react); // undefined
console.log(tecnologias.get('react')); // { framework: false }
console.log(tecnologias.get('react').framework); // false

const chavesVariadas = new Map([
  [function () {}, 'Função'],
  [{}, 'Objeto'],
  [123, 'Número'],
]);
chavesVariadas.set('abc', 'string');

chavesVariadas.forEach((valor, chave) => {
  console.log(chave, valor);
});

console.log(chavesVariadas.has(123)); // true
chavesVariadas.delete(123);
console.log(chavesVariadas.has(123)); // false
console.log(chavesVariadas.size); // 3

chavesVariadas.set(123, 'a');
chavesVariadas.set(123, 'b'); // não aceita chaves com mesmo nome e substituirá o valor
chavesVariadas.set(456, 'b');
console.log(chavesVariadas);
/* 
Map(4) {
  [Function (anonymous)] => 'Função',
  {} => 'Objeto',
  'abc' => 'string',
  123 => 'b',
  456 => 'b'
}
*/
