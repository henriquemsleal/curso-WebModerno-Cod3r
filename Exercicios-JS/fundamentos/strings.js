const escola = "Cod3r"
console.log(escola.charAt(4)) // retorna a 5a letra

{let cont = 0
for (letra in escola) {    
    console.log(`${escola.charAt(cont)}..`)
    cont ++
}}

console.log(escola.charAt(5)) // retorna vazio, pq nao tem a 6a letra
console.log(escola.charCodeAt(3)) // retorna 51, código html de '3' na tabela unicode 
console.log(escola.indexOf('d')) // retorna 2, índice do caractere 'd' na string
console.log(escola.indexOf('a')) // retorna -1, pq nao existe o caractere 'a' na string
console.log(escola.substring(1)) // retorna a string a partir do índice 1
console.log(escola.substring(0, 3)) // retorna a string a partir do índice 0 até o 2
console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e')) // substitui caracteres
console.log(escola.replace(/\d/, 'e')) // substitui digitos com expressão regular
console.log(escola.replace(/\w/g, 'e')) // substitui todos os caracteres com expressão regular
console.log('Ana,Maria,Pedro,Antonio,Carlos'.split(',')) // cria array, separando por ,