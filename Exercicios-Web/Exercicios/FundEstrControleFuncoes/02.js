lado1 = 12
lado2 = 12
lado3 = 12
const tipoTriangulo = function(a, b, c) {
    if (a == b & b == c) {
        return 'Equilátero'
    } else if ((a == b & b != c) || (a != b & b == c) || (a == c & c != b)) {
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}
console.log(`O triângulo é ${tipoTriangulo(lado1, lado2, lado3)}.`)