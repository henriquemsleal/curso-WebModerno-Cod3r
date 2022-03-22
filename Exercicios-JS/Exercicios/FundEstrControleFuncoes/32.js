const vet = [10, 12, 13, 45, 5, 6, 7]

function media() {
    let soma = 0
    let media = 0
    for (let i = 0; i < vet.length; i++) {
        soma += vet[i]
    }
    media = soma / vet.length
    return media
}

console.log(media())