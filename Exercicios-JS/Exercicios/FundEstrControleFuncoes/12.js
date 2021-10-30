function fatorial(num) {
    if (num < 0 || Number.isInteger(num) == false) {
        return 'Digite um número inteiro'
    } else if (num == 0 || num == 1) {
        return 1
    } else {
        let prod = 1
        for (; num > 1;) {
            prod *= num
            num--
        }
        /* while (num > 1) {
            prod *= num
            num--
        } */
        return prod
    }
}
console.log(fatorial(4))