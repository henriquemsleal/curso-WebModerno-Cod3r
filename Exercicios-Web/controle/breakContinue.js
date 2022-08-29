const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break // não age em if. funciona no bloco for ou while mais próximo.
    }
    console.log(`índice ${x} = ${nums[x]}`)
}

for (x in nums) {
    if (x == 5) {
        continue // não age em if. funciona no bloco for ou while mais próximo.
    }
    console.log(`índice ${x} = ${nums[x]}`)
}

/* break causa desvio de fluxo para fora do laço corrente
    continue causa interrompe repetição corrente e pula para a próxima */

externo: //cria rótulo 'externo' para
    for (a in nums) {
        for (b in nums) {
            if (a == 2 && b == 3) { break externo /* for rotulado */ }
            console.log(`Par = ${a}, ${b}`)
        }
    }
    // o ideal é não criar estruturas complexas, e sim quebrar em pequenas funções.