/* function imprimirNomeGritado(obj) {
    console.log(obj.name.toUpperCase() + '!!!')
}
const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)
    TypeError: Cannot read property 'toUpperCase' of undefined (nome >> name) */

// função criada para o cath
function tratarErroELancar(erro) { // várias formas
    // throw new Error('... alguma mensagem')
    // throw 10
    // throw true
    // throw '. mensagem . . .'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

// usando try e cath:
function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } // se houver erro, entra em cath
    catch (e) {
        tratarErroELancar(e)
    } finally { // executa com ou sem erro
        console.log('final')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)