// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function(x, y) { // função anônima
    return x - y
}

// named function expression
const mult = function mult(x, y) { // é pouco usada
    return x * y
}

console.log(`soma = ${soma(2, 1)}`)
console.log(`subtração = ${sub(2, 1)}`)
console.log(`multiplicação = ${mult(2, 1)}`)