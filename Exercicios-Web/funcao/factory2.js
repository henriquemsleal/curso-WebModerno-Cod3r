function criarProduto(nome, preco) {
    return {
        nome, //nome: nome,
        preco, //preco: preco
        desconto: 0.1
    }
}

const produto1 = criarProduto('celA', 100)
const produto2 = criarProduto('celB', 150)

console.log(produto1)
console.log(produto2)

console.log(criarProduto('notebookA', 2199.49))
console.log(criarProduto('tabletB', 1199.49))