class Pessoa {
    constructor(nome, idade) {
        this.atribNome = nome
        this.atribIdade = idade
    }

    falar() {
        console.log(`Meu nome é ${this.atribNome} e tenho ${this.atribIdade} anos`)
    }
}

const p1 = new Pessoa('João', 10)
p1.falar()
const p2 = new Pessoa('Carlos', 37)
p2.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p3 = criarPessoa('Henrique')
p3.falar()