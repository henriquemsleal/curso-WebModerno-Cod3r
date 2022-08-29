// console.log(this); // {}

// formas de exportar
// 3 atributos no mesmo objeto
this.ola = 'Fala pessoal!';
exports.bemVindo = 'Bem vindo ao node!';
module.exports.ateLogo = 'Até próximo exemplo'; // forma mais clássica

// console.log(exports);
/* 
{
  ola: 'Fala pessoal!',
  bemVindo: 'Bem vindo ao node!',
  ateLogo: 'Até próximo exemplo'
}
*/
