function avalia(nota) {
    if (nota < 38) {
        console.log(`O aluno com nota ${nota} foi REPROVADO!`)
    } else {
        if (nota % 5 == 3) {
            nota += 2
        }
        if (nota % 5 == 4) {
            nota += 1
        }
        console.log(`O aluno com nota ${nota} foi APROVADO!`)
    }
}
avalia(53)