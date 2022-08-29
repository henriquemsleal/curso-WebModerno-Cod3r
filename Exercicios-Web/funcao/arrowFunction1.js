let dobro = function(a) {
    return 2 * a
}

dobro = (a) => { // a arrow function sempre é anônima. precisa ser armazenada.
    return 2 * a
}

dobro = a => 2 * a // pode ser sem parênteses, se tem apenas 1 parâmetro; tem retorno implícito, se retirar as chaves, com apenas 1 linha.

console.log(dobro(Math.PI))

// -----------------

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // outra forma. possui apenas um parâmetro.
console.log(ola())