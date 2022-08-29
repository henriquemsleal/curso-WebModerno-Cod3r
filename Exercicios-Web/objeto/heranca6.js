function aula(nome, videoId) {
  this.nome = nome;
  this.videoId = videoId;
}

const aula1 = new aula('Bem Vindo', 123);
console.log(aula1);
const aula2 = new aula('Até Breve', 456);
console.log(aula2);

// criando função simulando o new
// para a mesma função construtora
function novo(funcao, ...parametros) {
  const objeto = {};
  objeto.__proto__ = funcao.prototype;
  funcao.apply(objeto, parametros);
  return objeto;
}

const aula3 = novo(aula, 'Bem Vindo', 123);
console.log(aula3);

const aula4 = novo(aula, 'Até Breve', 456);
console.log(aula4);
