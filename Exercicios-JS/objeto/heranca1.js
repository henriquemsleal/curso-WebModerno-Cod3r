const ferrari = {
  modelo: 'F40',
  velMax: 324,
};

const volvo = {
  modelo: 'V40',
  velMax: 200,
};

console.log(ferrari.prototype); // undefined. o objeto nao tem o atributo prototype
console.log(ferrari.__proto__); // forma de acessar o atributo dentro do objeto
// retorna {} objeto vazio
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype);
