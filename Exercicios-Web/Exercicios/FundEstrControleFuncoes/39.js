function trocaElementos(vetA, vetB) {

    if (vetA.length == vetB.length) {
        console.log(`Vetor A: ${vetA}`);
        console.log(`Vetor B: ${vetB}`);

        for (i = 0; i < vetA.length; i++) {
            vetA[i] = vetB[i] + vetA[i];
            vetB[i] = vetA[i] - vetB[i];
            vetA[i] = vetA[i] - vetB[i];
        }

        console.log(`Novo Vetor A: ${vetA}`);
        console.log(`Novo Vetor B: ${vetB}`);
    } else {
        console.log('Os vetores tem tamanhos diferentes. Não é possível substituir elementos.');
    }
}

const vetorA = [10, 20, 30, 40, 50, 60, 70, 80];
const vetorB = [101, 201, 301, 401, 501, 601, 701, 801];

trocaElementos(vetorA, vetorB);