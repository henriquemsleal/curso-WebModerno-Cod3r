function rand({ min = 0, max = 1000 }) { // dois atributos, com valores padrão, dentro de operador destructuring

    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({ max: 50, min: 40 })) // entre () é um objeto {}

/*
pode ser
const obj = { max: 50, min: 40 }
console.log(rand(obj))
*/

console.log(rand({ min: 955 })) // apenas um parâmetro e max assume valor padrão
console.log(rand({})) // min e max com valores padrão 0 e 1000

// console.log(()) // erro - tenta desestruturar algo indefinido