const lista = '10 20 20 8 25 3 0 30 40 45 1'
const vetor = lista.split(' ')
let pontos = []
for (const i in vetor) {
    pontos.push(parseInt(vetor[i]))
}
let maior = pontos[0]
let menor = pontos[0]
let record = -1
let posicaoMenor = 100
let resp = []

for (const i in pontos) {
    // console.log(i)
    if (pontos[i] > maior) {
        record += 1
    }
    // console.log(i)
    if (pontos[i] < menor) {
        menor = pontos[i]
        posicaoMenor = parseInt(i) + 1
    }
}

resp[0] = record
resp[1] = posicaoMenor
console.log(`Pontuação registrada: ${pontos}`)
console.log(resp)