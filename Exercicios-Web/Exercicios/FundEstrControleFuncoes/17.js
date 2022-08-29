function aumento(plano, salario) {
    let ajuste = 0
    switch (plano) {
        case 'A':
            ajuste = 1.1
            break;
        case 'B':
            ajuste = 1.15
            break;
        case 'C':
            ajuste = 1.2
            break;
        default:
            return 'O plano informado é inválido.'
    }
    return `O novo salário é ${salario * ajuste}`
}

const planos = ['A', 'B', 'C']
const plan = 'A'
const sal = 1000
const retorno = aumento(plan, sal)

console.log(`${retorno}`)