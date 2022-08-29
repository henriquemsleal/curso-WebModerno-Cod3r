// console.log(global);

// exemplo de objeto acessível por qualquer arquivo do projeto
global.MinhaApp = {
  saudacao() {
    return 'Estou em todos os lugares!';
  },
  nome: 'Sistema Legal',
};

// pode bloquear alteração com o Object.freeze()
/* global.MinhaApp = Object.freeze({
  saudacao() {
    return 'Estou em todos os lugares!';
  },
  nome: 'Sistema Legal',
}); */
