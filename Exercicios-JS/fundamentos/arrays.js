const valores = [7.5, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({ id: 3 }, false, null, 'teste') // adiciona ao fim
console.log(valores)

console.log(valores.pop()) // remove o último
delete valores[0]
console.log(valores)

console.log(typeof valores)