(function() {
    let pares = []
    for (let cont = 1; cont <= 100; cont++) {
        if (cont % 2 == 0) {
            pares.push(cont)
        }
    }
    console.log(pares.toString())
})()