// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' };
pessoa.nome = 'Pedro'; // mudou o valor da propriedade

// pessoa -> 456 -> {...}
// pessoa = {nome: 'Ana'};

Object.freeze(pessoa);

// não muda os valores das propriedades
pessoa.nome = 'Maria';
pessoa.end = 'Rua ABC';
delete pessoa.nome;

console.log(pessoa);
console.log(pessoa.nome); // Pedro
console.log(pessoa.end); // undefined

const pessoaConstante = Object.freeze({ nome: 'Joao' });
pessoaConstante.nome = 'Maria';
console.log(pessoaConstante);

pessoa = [1, 2]; // erro
