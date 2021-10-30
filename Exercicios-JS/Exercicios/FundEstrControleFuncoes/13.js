function dia(x) {
    if (x < 1 || x > 31) {
        console.log('Digite uma data válida')
    } else {
        switch (x) {
            case 1:
            case 8:
            case 15:
            case 22:
            case 29:
            case 7:
            case 14:
            case 21:
            case 28:
                console.log(`O dia ${x} é em final de semana`)
                break;
            default:
                console.log(`O dia ${x} é últil`)
        }
    }
}

dia(7)