function aritm(n, a1, r) {
    let termos = [a1];
    let soma = a1;
    for (let cont = 0; cont < n - 1; cont++) {
        termos.push(termos[cont] + r);
        soma += termos[cont + 1];
    }
    console.log(termos, soma);
}

function geom(n, a1, r) {
    let termos = [a1];
    let soma = a1;
    for (let cont = 0; cont < n - 1; cont++) {
        termos.push(termos[cont] * r);
        soma += termos[cont + 1];
    }
    console.log(termos, soma);
}

aritm(5, 2, 2);
geom(5, 2, 2);