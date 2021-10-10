/* transformar a class em função construtora

class Pessoa {
    constructor(nome, idade) {
        this.atribNome = nome
        this.atribIdade = idade
    }

    falar() {
        console.log(`Meu nome é ${this.atribNome} e tenho ${this.atribIdade} anos`)
    }
} */
function Pessoa(nome, idade) {
    this.atribNome = nome
    this.atribIdade = idade
    this.falar = function() {
        console.log(`Meu nome é ${this.atribNome} e tenho ${this.atribIdade} anos`)
    }
}

const p1 = new Pessoa('João', 10)
p1.falar()
const p2 = new Pessoa('Carlos', 37)
p2.falar()
const p3 = new Pessoa('Henrique', 37)
p3.falar()