const soma = function(x, y) { // função anônima, numa constante
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma) { // outra
    console.log(operacao(a, b))
}

imprimirResultado(3, 4) // assume operacao como 3o param.
imprimirResultado(3, 4, soma) // pode referenciar a func. soma, mas não fará diferença
imprimirResultado(3, 4, function(x, y) {
        return x - y
    }) // pode passar outra função, no 3o param.
imprimirResultado(3, 4, (x, y) => x * y) // outro exemplo, com arrow function

const pessoa = { // como atributo de um objeto
    falar: function() { console.log('Opa!') }
}

pessoa.falar()