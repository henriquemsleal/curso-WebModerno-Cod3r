function calc(a, op, b) {
    switch (op) {
        case '+':
            return a + b
            break
        case '-':
            return a - b
            break
        case '*':
            return a * b
            break
        case '/':
            return a / b
            break
        default:
            return 'Operação inválida'
    }
}
let a = 10
let b = 2
let op = '%'
console.log(a, op, b, `= ${calc(a, op, b)}`)