console.log(7 / 0) // resultado Infinity
console.log('10' / 2) // js verifica se o valor da string pode ser dividido
console.log('10,2' / 2) // 10,2 não é um número (10.2 é número)
console.log('3' + 2) // concatenação
console.log('3' - 2) // subtrai
console.log('Show!' * 2) // js não multiplica string
console.log(0.1 + 0.7) // == 0.7999999999999999 imprecisão

a = 0.1
b = 0.2
c = a + b
console.log(c) // == 0.30000000000000004 imprecisão

// console.log (10.toString()) --> ^^^ SyntaxError: Invalid or unexpected token