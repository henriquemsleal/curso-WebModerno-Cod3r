const pessoa /* objeto */ = {
    saudacao: 'Bom dia!', // atributo par chave/valor
    // recurso novo para criar uma função
    falar() { // em vez de falar: function...
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas entre funcional e OO
    /* apresenta erro, porque agora o this aponta para outro objeto */

const falarDePessoa = pessoa.falar.bind(pessoa) // bind(vincular): método que amarra o this
falarDePessoa()