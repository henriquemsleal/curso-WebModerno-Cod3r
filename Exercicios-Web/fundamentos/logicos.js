function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTV50 = trabalho1 && trabalho2

    // não tem xor (ou exclusivo em javascript)
    // pode ser aplicado:
    // const comprarTV32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTV32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário

    return { comprarSorvete, comprarTV50, comprarTV32, manterSaudavel } // objeto (chave/valor) - ES5 - pode ser assim.   
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))