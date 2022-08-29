function avalia(notas) {
    function conceito(n) {
        if (n >= 0 && n <= 4.9) {
            return 'D';
        }
        if (n >= 5 && n <= 6.9) {
            return 'C';
        }
        if (n >= 7 && n <= 8.9) {
            return 'B';
        }
        if (n >= 9 && n <= 10) {
            return 'A';
        }
    }

    notas.forEach(nota => console.log(`A nota ${nota} teve o conceito: ${conceito(nota)}`));
}

let notasAluno = [5, 7.9, 3.4, 6.8, 8.5, 9.2, 9];

avalia(notasAluno);