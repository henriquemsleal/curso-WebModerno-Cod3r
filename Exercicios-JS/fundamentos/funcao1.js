// Funcao sem retorno
function imprimirSona(a, b) {
    console.log(a + b)
}

imprimirSona(2, 3)
imprimirSona(2)
imprimirSona(2, 10, 4, 5, 6, 7, 8)
imprimirSona()

// Funcao com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())