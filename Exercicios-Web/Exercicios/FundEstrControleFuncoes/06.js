function simples(cap, tx, t) {
    let capital = cap
    let taxa = tx
    let tempo = t
    let mont = capital + capital * taxa / 100 * tempo
    let real = mont.toFixed(2)
    console.log(`O montante, com juros simples, é ${real}`)

}

function comp(cap, tx, t) {
    let capital = cap
    let taxa = tx
    let tempo = t
    let mont = capital * (1 + tx / 100) ** t
    let real = mont.toFixed(2)
    console.log(`O montante, com juros compostos, é ${real}`)
}

simples(500, 2, 3)
comp(500, 2, 3)