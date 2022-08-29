console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1;
exports.b = 2;
module.exports.c = 3;

exports = null; // não terá efeito em module.exports
console.log(exports); // null

console.log(module.exports); // { a: 1, b: 2, c: 3 }

// não será exportado
exports = {
  nome: 'Teste',
};

// somente o module.exports será exportado
console.log(module.exports); // { a: 1, b: 2, c: 3 }

//
module.exports = { publico: true };
console.log(module.exports);
