let comparaComThis = function(param) {
    console.log(this === param)
}
comparaComThis(global) // true

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // false
comparaComThis(obj) // true

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // false
comparaComThisArrow(module.exports) // true

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // false
    /* numa função arrow, o this é associado ao contexto no qual foi escrito, mesmo com bind */
comparaComThisArrow(module.exports) // true