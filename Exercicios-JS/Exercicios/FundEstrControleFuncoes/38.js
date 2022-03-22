function impares(inicio = 0, fim = 100) {
    lista = [];

    if (inicio > fim) {
        let temp = inicio;
        inicio = fim;
        fim = temp;
    }

    if (inicio % 2 == 0) {
        inicio++
    }

    for (let contador = inicio; contador <= fim; contador += 2) {
        lista.push(contador);
    }
    console.log(lista);
}

impares(51, 32);