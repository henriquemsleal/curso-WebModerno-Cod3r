function crescimento(tam1, cresc1, tam2, cresc2) {
    if ((tam1 > tam2 && cresc1 >= cresc2) || (tam1 < tam2 && cresc1 <= cresc2)) {
        return 'A criança menor não ultrapassará o crescimento da maior'
    }
    if (tam1 > tam2) {
        if (cresc2 > cresc1) {
            return `A criança menor ultrapassará a menor em ${calcCresceu(tam2, cresc2, tam1, cresc1)} anos`
        }
    }
    if (tam2 > tam1) {
        if (cresc1 > cresc2) {
            return `A criança menor ultrapassará a menor em ${calcCresceu(tam1, cresc1, tam2, cresc2)} anos`
        }
    }

    return 'As crianças tem a mesma altura'
}

function calcCresceu(menor, txMaior, maior, txMenor) {
    let anos = 0
    while (menor <= maior) {
        menor *= 1 + txMaior / 100
        maior *= 1 + txMenor / 100
        anos += 1
    }
    return anos
}

console.log(crescimento(130, 2, 131, 1))