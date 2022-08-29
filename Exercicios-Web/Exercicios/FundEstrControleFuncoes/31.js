const vet = [100, 10, 15, 200, 201, 199, 11, 18, 19, 35, 9]

function negativos(vetor) {
    let totNegativos = 0
    let impares = []

    for (let item of vetor) {
        if (item % 2 == 1) {
            totNegativos += 1
            impares.push(item)
        }
    }
    return `Há ${totNegativos} números impares. São: ${impares}`
}

console.log(negativos(vet))