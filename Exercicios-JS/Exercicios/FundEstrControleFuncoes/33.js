const vetorInteiro = [2, 5, 8, 10]
const vetorString = ['a', 'b', 'c', 'd']
const vetorDouble = [5.4, 8.1, 2.5, 3.2]

// resposta do professor

function concatenar(...args) {
    resultado = []
    for (let i = 0; i < arguments.length; i++) {
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))

/* const vetorConc1 = vetorInteiro.concat(vetorString)
const vetorConc2 = vetorDouble.concat(vetorConc1)

console.log(vetorConc1)
console.log(vetorConc2) */