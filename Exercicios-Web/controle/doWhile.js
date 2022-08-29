function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// let opcao = -1
let opcao //somente iniciada a variável, pois não é necessário atribuir um valor inicial

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`A opção escolhida foi ${opcao}.`)
} while (opcao != -1)
// diferente de while, do/while executa o bloco e depois verifica a condição.

console.log('Até a próxima.')