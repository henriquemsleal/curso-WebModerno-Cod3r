function vendaFruta(fruta) {
    switch (fruta) {
        case 'maçã':
        case 'maça':
            console.log('Não vendemos essa fruta aqui')
            break
        case 'kiwi':
            console.log('Estamos com escassez de kiwis')
            break
        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo')
            break
        default:
            console.log('Não vendemos essa fruta aqui')
    }
}
vendaFruta('kiwi')