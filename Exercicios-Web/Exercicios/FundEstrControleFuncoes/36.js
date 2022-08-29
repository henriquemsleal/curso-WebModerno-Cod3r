function multiplicaVet(vetor, numero) {
    let resultado = [];
    vetor.forEach(element => {
        resultado.push(element * numero)
    });
    console.log(resultado);
}

function multiplicaMaior5(a, b) {
    if (b > 5) {
        return multiplicaVet(a, b)
    }
}

const vet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const num = 6

multiplicaVet(vet, num)
multiplicaMaior5(vet, num)