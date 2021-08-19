let a = 3
global.b = 123
this.c = 456
this.d = false
this.e = 'teste'
globalThis.f = 'casa'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)
console.log(global)

// cada arquivo é um módulo no nodejs

// criando uma variável maluca: sem var ou let!
abc = 3 // não faça isso!
console.log(global.abc)
console.log(globalThis.abc)