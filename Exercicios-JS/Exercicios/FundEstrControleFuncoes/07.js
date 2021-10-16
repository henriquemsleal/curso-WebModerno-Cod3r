const bhask = function(a, b, c) {
    const delta = b ** 2 - 4 * a * c
    const vetor = []
    if (delta < 0) {
        console.log('Delta é negativo')
    } else {
        x1 = ((-b + Math.sqrt(delta)) / 2 * a).toFixed(2)
        x2 = ((-b + Math.sqrt(delta)) / 2 * a).toFixed(2)
        vetor.push(x1, x2)
        console.log(`As raízes da equação são: ${vetor}`)
    }
}
bhask(1, -9, -100)