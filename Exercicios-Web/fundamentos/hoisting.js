console.log('a =', a)
var a = 2 // em js é como se tivesse declarado var a
console.log('a =', a)

/* resultado:
a = undefined
a = 2
*/

console.log('b =', b) // erro - não faz hoisting com let
let b = 2
console.log('b =', b)