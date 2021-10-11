function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda}${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(getPreco()) // NaN - não tem preco e desc
globalThis.preco = 20
global.desc = 0.1
console.log(getPreco())

console.log(produto.getPreco())

// Call e Apply

const carro = {
    preco: 49990,
    desc: 0.20
}

// aqui são iguais
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// passando parâmetros
// primeiro o objeto que vai ser usado como contexto
console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, "$"]))
console.log(getPreco.apply(global, [0.17, "$"]))