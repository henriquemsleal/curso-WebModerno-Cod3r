const a = 1;
const b = 2;
const c = 3;

const obj1 = { a: a, b: b, c: c };
const obj2 = { a, b, c };

const nomeAttr = 'nota';
const valorAttr = 7.87;

const obj3 = {};
obj3[nomeAttr] = valorAttr;

console.log(obj1, obj2); // mesmo resultado

const obj4 = { [nomeAttr]: valorAttr };

console.log(obj3, obj4); // mesmo resultado

const obj5 = {
  // tradicional
  funcao1: function () {
    // bloco de código
  },
  // reduzida
  funcao2() {
    // bloco de código
  },
};

console.log(obj5);
// { funcao1: [Function: funcao1], funcao2: [Function: funcao2] }
