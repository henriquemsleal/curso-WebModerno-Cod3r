console.log(this === global); // false
console.log(this === module); // false

console.log(this === module.exports); // true
console.log(this === exports); // true

// this numa função dentro do módulo
function logThis() {
  console.log('Dentro de uma função:');
  console.log(this === exports); // false
  console.log(this === module.exports); // false
  console.log(this === global); // true
}
logThis();

// this numa arrow function dentro do módulo
const logThis2 = () => {
  console.log('Dentro de uma arrow function:');
  console.log(this === exports); // true
  console.log(this === module.exports); // true
  console.log(this === global); // false
  console.log(this); // {}
};
logThis2();
