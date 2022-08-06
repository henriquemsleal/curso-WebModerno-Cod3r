// como faz cache: tendo sido criado o objeto, retorna a mesma instância
const contadorA = require('./instanciaUnica');
const contadorB = require('./instanciaUnica');

// novas instâncias criadas a partir de uma função factory
const contadorC = require('./instanciaNova')();
const contadorD = require('./instanciaNova')();

//////////////
contadorA.inc();
contadorA.inc();
console.log(contadorA.valor, contadorB.valor); // 3 3

contadorC.inc();
contadorC.inc();
console.log(contadorC.valor, contadorD.valor); // 3 1
