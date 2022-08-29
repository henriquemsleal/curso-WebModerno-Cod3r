const valor = 'Global'

function minhaFuncao() { // declarada diretamente dentro do arquivo/módulo
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao() // vai procurar a const no local onde a função foi definida
}

exec() // retorna 'Global'