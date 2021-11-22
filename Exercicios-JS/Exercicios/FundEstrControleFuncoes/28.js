const vetor = [5, 6, 8, 9, 100, 25, 31, 49, 66, 77, 88, 200, 46]
let pares = []
let impares = []

function parImpar(vet) {
    for (let i = 0; i < vet.length; i++) {
        if (vet[i] % 2 == 1) {
            impares.push(vet[i])
        } else {
            pares.push(vet[i])
        }
    }
    return `Pares: ${pares}\nImpares: ${impares}`
}

console.log(`${vetor}`)
console.log(parImpar(vetor))