const filhas = ['Ualeskah', 'Cibalena'];
const filhos = ['Uoxiton', 'Uesclei'];
const todos = filhas.concat(filhos);
// Array.concat(array) retorna novo array, sem alterar originais
console.log(todos, filhas, filhos);

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]));
// [ 1, 2, 3, 4, 5, [ 6, 7 ] ]
console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [[6, 7]]));
// [ 'a', 'b', 1, 2, 3, 4, 5, [ 6, 7 ] ]
