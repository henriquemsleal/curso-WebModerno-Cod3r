// Função em JS é First-Class Object (Citizens)
// Higher-order function

// criar de forma literal
function fun1() {}

// armazenar em uma variável
const fun2 = function() {} // função anônima atribuída para uma constante.
    // para invocar, chama a constante passando os parênteses

// armazenar em um array
const array = [function(a, b) { return a + b }, fun1, fun2] // de forma direta ou com um nome
console.log(array[0](2, 3))

// armazenar em um atributo de objeto
const obj = {}
obj.falar = function() { return 'falar' }
console.log(obj.falar())

// passar um func como parâmetro para outra
function run(fun) {
    fun() // para invocar, precisa dos parênteses
}
run(function() { console.log('Executando...') })
    // pode chamar uma func existente ou criar na chamada

// uma função pode retornar/conter uma função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(4) // como chamar / ou
const cincoMais = soma(2, 3)
cincoMais(4)