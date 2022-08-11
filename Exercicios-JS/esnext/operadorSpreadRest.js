// operador ... rest(juntar)/spread(espalhar)
// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 1234.98 };
const clone = { ativo: true, ...funcionario }; // spreead para pegar atributos de outro objeto
funcionario.nome = 'Ana';
console.log(funcionario);
console.log(clone);

// usar spread com array
const grupoA = ['João', 'Pedro', 'Glória'];
const grupoFinal = ['Maria', ...grupoA, 'Rafaela'];
console.log(grupoFinal);
