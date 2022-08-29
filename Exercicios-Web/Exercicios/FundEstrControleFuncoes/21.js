function planoValor(idade) {
    let taxa = 100
    switch (true) {
        case (idade < 10):
            taxa += 80
            break
        case idade < 31:
            taxa += 50;
            break
        case idade < 61:
            taxa += 95;
            break
        case idade >= 61:
            taxa += 130;
            break
        default:
            return 'Erro!'
    }
    return taxa
}
console.log(planoValor(61))