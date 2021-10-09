const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // forEach é uma função do array, que passar o nome e índice de cada elemento

fabricantes.forEach(fabricante => console.log(fabricante))

//ou
fabricantes.forEach(function(a) {
    console.log(a)
})