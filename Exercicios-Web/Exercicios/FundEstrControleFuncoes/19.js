function pedido(codigo, quantidade) {
    let preco = 0
    switch (codigo) {
        case 100:
            preco = 3
            break;
        case 200:
            preco = 4
            break;
        case 300:
            preco = 5.5
            break;
        case 400:
            preco = 7.5
            break;
        case 500:
            preco = 3.5
            break;
        case 600:
            preco = 2.8
            break;

        default:
            return console.log('Produto inexistente')
            break;
    }
    return console.log(`${preco * quantidade}`)
}

pedido(600, 4)