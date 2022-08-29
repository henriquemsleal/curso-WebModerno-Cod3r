const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma() {
    return a + b + c;
  },
};

// JSON é arquivo em formato de texto

// criando JSON a partir de um objeto
console.log(JSON.stringify(obj));
// {"a":1,"b":2,"c":3} excluindo a função, porque JSON é apenas dados

// criando objeto a partir de um JSON
// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")); // erro de formato
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")); // erro de formato
// console.log(JSON.parse('{ 'a': 1, 'b': 2, 'c': 3 }')); // erro de formato
// console.log(JSON.parse("{ "a": 1, "b": 2, "c": 3 }")); // erro de formato
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")); // erro de formato

// formato válido: chaves e strings com aspas duplas
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')); // { a: 1, b: 2, c: 3 }
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }')); // { a: 1.7, b: 'string', c: true, d: {}, e: [] }
