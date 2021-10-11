const divisao = (a, b) => {
    result = a / b
    rest = a % b
    console.log(`${a} dividido por ${b} = ${Math.trunc(result)}`)
    console.log(`o resto da divisão = ${rest}`)
}
divisao(8, 3)