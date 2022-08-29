function calculaMedia(aluno, nota1, nota2, nota3) {

    function calcMedia() {
        if ((nota1 == nota2 && nota1 == nota3) || (nota1 > nota2 && nota1 > nota3)) {
            console.log('opção 1')
            return ((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / 10
        } else if (nota2 > nota1 && nota2 > nota3) {
            console.log('opção 2')
            return ((nota1 * 3) + (nota2 * 4) + (nota3 * 3)) / 10
        } else {
            console.log('opção 3')
            return ((nota1 * 3) + (nota2 * 3) + (nota3 * 4)) / 10
        }
    }

    function aprova(media) {
        if (media >= 5) {
            return 'APROVADO'
        } else {
            return 'REPROVADO'
        }
    }

    let media = calcMedia()
    let situacao = aprova(media)

    return `O aluno ${aluno}, com notas ${nota1}, ${nota2} e ${nota3}, teve média ${media} e foi ${situacao}!`

}

console.log(calculaMedia(1015, 6, 6, 7))