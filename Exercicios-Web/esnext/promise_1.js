let p = new Promise(function (resolve) {
  resolve(['Ana', 'Carlos', 'Bia']);
});

console.log(typeof p); // object

// .then()
p.then(function (resultado) {
  console.log(resultado);
  return resultado;
})
  .then(array => {
    console.log(array[0]);
    return array[0];
  })
  .then(primeiro => {
    console.log(primeiro[0]);
    return primeiro[0];
  })
  .then(letra => console.log(letra.toLowerCase()));
