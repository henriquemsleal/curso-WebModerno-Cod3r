const vetorPilha = [1, 2, 3, 4, 5];
const vetorAdiciona = [6, 7, 8, 9, 10];

function adicionarVet(vetRecebe, vetEnvia) {
    for (let i = 0; i < vetEnvia.length; i++) {
        vetRecebe.push(vetEnvia[i]);
    }

    console.log('Vetor adicionado: ' + vetEnvia);
    console.log('Resultado: ' + vetRecebe);
}

console.log('Vetor original: ' + vetorPilha);
adicionarVet(vetorPilha, vetorAdiciona);