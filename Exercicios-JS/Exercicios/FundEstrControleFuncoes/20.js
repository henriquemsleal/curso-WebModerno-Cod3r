function sacar(vlr) {
    let n100 = n50 = n10 = n5 = n1 = 0
    let sacado = 'Sacado R$'
    sacado += vlr + ',00 em '
    while (vlr > 0) {
        if (vlr >= 100) {
            n100 += 1
            vlr -= 100
        } else if (vlr >= 50) {
            n50 += 1
            vlr -= 50
        } else if (vlr >= 10) {
            n10 += 1
            vlr -= 10
        } else if (vlr >= 5) {
            n5 += 1
            vlr -= 5
        } else if (vlr >= 1) {
            n1 += 1
            vlr -= 1
        }
    }
    if (n100 !== 0) {
        sacado += `${n100} cédula(s) de R$100,00 `
    }
    if (n50 !== 0) {
        sacado += `${n50} cédula(s) de R$50,00 `
    }
    if (n10 !== 0) {
        sacado += `${n10} cédula(s) de R$10,00 `
    }
    if (n5 !== 0) {
        sacado += `${n5} cédula(s) de R$5,00 `
    }
    if (n1 !== 0) {
        sacado += `${n1} cédula(s) de R$1,00`
    }
    console.log(sacado)
}

sacar(1538.00)