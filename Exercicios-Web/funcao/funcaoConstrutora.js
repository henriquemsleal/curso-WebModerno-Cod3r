/* 
// conforme aula
function Carro(velMax = 200, delta = 5) {

    // atributo privado
    let velAtual = 0

    // metodo publico
    this.acelerar = function() {
        if (velAtual + delta <= velMax) {
            velAtual += delta
        } else {
            velAtual = velMax
        }
    }

    // metodo publico
    this.getVelAtual = function() {
        return velAtual
    }
} */

// funcao convertida em uma classe ES2015
class Carro {
    constructor(velMax = 200, delta = 5) {

        // atributo privado
        let velAtual = 0

        // metodo publico
        this.acelerar = function() {
            if (velAtual + delta <= velMax) {
                velAtual += delta
            } else {
                velAtual = velMax
            }
        }

        // metodo publico
        this.getVelAtual = function() {
            return velAtual
        }
    }
}

const uno = new Carro
    // console.log(uno.velAtual) // resultado undefined, pq velAtual é atrib. privado
uno.acelerar()
console.log(`vel uno = ${uno.getVelAtual()}`)
uno.acelerar()
console.log(`vel uno = ${uno.getVelAtual()}`)

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(`vel ferrari = ${ferrari.getVelAtual()}`)
ferrari.acelerar()
console.log(`vel ferrari = ${ferrari.getVelAtual()}`)
ferrari.acelerar()
console.log(`vel ferrari = ${ferrari.getVelAtual()}`)

/* 
typeof Carro = function
typeof ferrari, uno = object
 */