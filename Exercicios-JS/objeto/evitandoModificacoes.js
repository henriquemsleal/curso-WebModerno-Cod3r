// Object.preventExtensions
const produto = Object.preventExtensions({
  nome: 'qualquer',
  preco: 1.99,
  tag: 'promoção',
});
console.log('Extensível:', Object.isExtensible(produto)); // método para testar se foi criada a partir do método preventExtensions

produto.nome = 'Borracha'; // o valor será alterado
produto.descricao = 'Borracha escolar branca'; // a chave não será criada
delete produto.tag; // a chave será deletada
console.log(produto); // { nome: 'Borracha', preco: 1.99 }

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35 };
Object.seal(pessoa); // vai selar o objeto pessoa, para impossibilitar a inclusão e a exclusão de atributos
console.log('Selado:', Object.isSealed(pessoa)); //método para testar se o objeto foi selado

pessoa.sobrenome = 'Silva'; // a chave não será criada
delete pessoa.nome; // a chave não será deletada
pessoa.idade = 29; // o valor será alterado
console.log(pessoa); // { nome: 'Juliana', idade: 29 }

// Object.freeze
const pessoa2 = { nome: 'João', idade: 11 };
Object.freeze(pessoa2); // vai congelar o objeto pessoa2, impossibilitando a inclusão, a exclusão e a alteração de atributos
console.log('Congelado:', Object.isFrozen(pessoa2)); //método para testar se o objeto foi congelado

pessoa2.sobrenome = 'Oliveira'; // a chave não será criada
delete pessoa2.nome; // a chave não será deletada
pessoa2.idade = 20; // o valor não será alterado
console.log(pessoa2); // { nome: 'João', idade: 11 }
