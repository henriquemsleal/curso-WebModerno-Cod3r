// cria um método para Array, simulando o forEach
Array.prototype.forEach2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];
// método forEach recebe três argumentos (item, índice e próprio array)
aprovados.forEach2((nome, indice) => {
  // suprimindo o terceiro argumento
  console.log(`${indice}) ${nome}`);
});
