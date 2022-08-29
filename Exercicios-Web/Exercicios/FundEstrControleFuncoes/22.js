function taxaAtual(mes, valor) {
    if (mes == 1) {
        return `O valor da sua taxa de anuidade é R$${valor.toFixed(2)}.`
    } else {
        let juros = 0
        let montante = valor * (1 + 5 / 100) ** (mes - 1)
        return `O valor da sua taxa de anuidade é R$${montante.toFixed(2)}.`
    }

}

console.log(taxaAtual(3, 200.00))