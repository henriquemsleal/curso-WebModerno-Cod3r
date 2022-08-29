const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}
imprimirResultado(8)
imprimirResultado()

// ou 
/* const imprimirResultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
console.log(imprimirResultado(8)) */

imprimirResultado('Epa!') // cuidado!!!