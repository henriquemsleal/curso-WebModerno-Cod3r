const vet = [100, 10, 15, 200, 201, 199, 11, 18, 19, 35, 9]
let maior = 0
let menor = 100

function maiorEMenor(vetor) {
    let oMaior = 0
    let oMenor = 100
    for (const it of vetor) {
        if (it > oMaior) {
            oMaior = it
        }
        if (it < oMenor) {
            oMenor = it
        }
    }
    maior = oMaior
    menor = oMenor
}

maiorEMenor(vet)
console.log(`O maior valor do intervalo é ${maior}`)
console.log(`O menor valor do intervalo é ${menor}`)