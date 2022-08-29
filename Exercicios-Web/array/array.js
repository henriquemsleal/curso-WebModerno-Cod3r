console.log(typeof Array); // function
console.log(typeof new Array()); // object
console.log(typeof []); // object

let aprovados = new Array('Bia', 'Carlos', 'Ana'); // não é a forma recomendada
console.log(aprovados);

// notação literal
aprovados = ['Ana', 'Carlos', 'Bia']; // forma recomendada para criar array
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]); // retorna undefined

// formas de adicionar elementos
aprovados[3] = 'Paulo';
aprovados.push('Marcos'); // adiciona após a última posição
console.log(aprovados);

console.log(aprovados.length);

// permite adicionar em novo índice, fora da sequência, adicionando undefined aos outrs elementos
aprovados[9] = 'Rafael';
console.log(aprovados); // [ 'Ana', 'Carlos', 'Bia', 'Paulo', 'Marcos', <4 empty items>, 'Rafael' ]

// o método sort ordena e altera no array original
aprovados.sort();
console.log(aprovados); // [ 'Ana', 'Bia', 'Carlos', 'Marcos', 'Paulo', 'Rafael', <4 empty items> ]

// delete apaga o registro, mas não reordena os índices. o índice fica vazio
delete aprovados[1];
console.log(aprovados[1]); // undefined

// splice adiciona ou remove elementos ou ambos
aprovados = ['Bia', 'Carlos', 'Ana'];
aprovados.splice(1, 1); // vai para o índice 1 e remove 1 elemento
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
aprovados.splice(1, 1, 'Elemento 1', 'Elemento 2'); // vai para o índice 1 e remove 1 elemento e, ali, adiciona 2
console.log(aprovados); // [ 'Bia', 'Elemento 1', 'Elemento 2', 'Ana' ]
