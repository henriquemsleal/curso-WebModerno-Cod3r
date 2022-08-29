let valor // não inicializada
console.log(typeof valor)
console.log(valor)

valor = null // ausência de valor
console.log(typeof valor)
console.log(valor)

// console.log(valor.toString()) // Erro!

const produto = {}
console.log(typeof produto)
console.log(produto.preco) // undefined
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined
    /* evite atribuir undefined - deixe para a linguagem atribuir -
    quando precisar, usar null */

console.log(!!produto.preco) // !! converte para boolean
    // por estar undefined = false

// delete produto.preco // para remover
console.log(produto)

produto.preco = null // sem preço - diferente de com valor 0
console.log(!!produto.preco)
console.log(produto)