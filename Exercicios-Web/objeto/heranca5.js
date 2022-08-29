console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

// criar um método no protótipo de String
String.prototype.reverse = function () {
  return this.split('').reverse().join('');
};

console.log('Escola Cod3r');
console.log('Escola Cod3r'.split(''));

console.log('Escola Cod3r'.reverse());

// criar um método no protótipo de Array
Array.prototype.first = function () {
  return this[0];
};

console.log([1, 2, 3, 4, 5].first());
console.log(['a', 'b', 'c', 'd', 'e'].first());

// evitar criar comportamentos globais
// nunca substituir métodos globais
