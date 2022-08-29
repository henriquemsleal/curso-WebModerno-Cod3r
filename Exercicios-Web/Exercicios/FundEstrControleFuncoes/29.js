function dezVinte(vetor) {
    let dentro = 0
    let fora = 0
    for (let num of vetor) {
        if (num >= 10 && num <= 20) {
            dentro += 1
        } else {
            fora += 1
        }
    }
    return console.log(`O total de números, no vetor, entre 10 e 20 é ${dentro}
    e fora do intervalo é ${fora}`)
}
const vet = [1, 2, 10, 20, 15, 30, 25, 100, 11, 18, 17]
dezVinte(vet)