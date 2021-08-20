function boaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovodado com ' + nota)
    }
}
boaNoticia(7.5)
boaNoticia(6)
boaNoticia(8)

function seVerdadeFalo(valor) {
    if (valor) { console.log('É verdade... ' + valor) }
}
/* ou */
/* const seVerdadeFalo = valor => valor ? console.log('É verdade... ' + valor) : null */
seVerdadeFalo()
seVerdadeFalo(null)
seVerdadeFalo(undefined)
seVerdadeFalo(NaN)
seVerdadeFalo('')
seVerdadeFalo(0)
seVerdadeFalo(-1)
seVerdadeFalo(' ')
seVerdadeFalo('?')
seVerdadeFalo([])
seVerdadeFalo([1, 2])
seVerdadeFalo({})