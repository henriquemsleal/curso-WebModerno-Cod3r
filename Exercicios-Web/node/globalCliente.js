require('./global'); // não precisa armazenar, porque está apenas carregando e tornando disponível na aplicação inteira. não é preciso fazer require em outros arquivos.

console.log(MinhaApp.saudacao()); // não precisa apontar global.
// Estou em todos os lugares!

// os atributos ficaram abertos para mudança
console.log(MinhaApp.nome); // Sistema Legal
MinhaApp.nome = 'Eita';
console.log(MinhaApp.nome); // Eita

// pode bloquear alteração com o Object.freeze() no objeto global
/* em global.js:
global.MinhaApp = Object.freeze({
  saudacao() {
    return 'Estou em todos os lugares!';
  },
  nome: 'Sistema Legal',
});
*/
