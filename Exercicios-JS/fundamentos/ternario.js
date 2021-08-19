const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7))
console.log(resultado(6))
console.log(resultado(7.1))

// pode ser com bloco
const resultado2 = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}
console.log(resultado2(5))