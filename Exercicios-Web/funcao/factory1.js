// função factory = função que retorna um objeto

/* const prod1 = {
    nome: 'exemplo',
    preco: 45

    const prod2 = {
    nome: 'exemplo2',
    preco: 50
} */ // isso pode ser um problema, se feito muitas vezes

// para resolver, pode criar uma função factory:

// Factory simples
function criarProduto() {
    return {
        nome: 'celularB',
        preco: 150
    }
}

// outro exemplo
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}