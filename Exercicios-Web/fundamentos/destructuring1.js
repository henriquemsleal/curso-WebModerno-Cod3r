// recurso introduzido no ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// destructuring

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(nome, idade)

const { endereco: { logradouro: l, numero: num } } = pessoa
console.log(l, num)

const { endereco: { numero, cep } } = pessoa
console.log(numero, cep)

const { conta: { ag, num } } = pessoa // erro pq não existe esse objeto
console.log(ag, num)