{
    {
        {
            { var sera = "Será???" } // variável visível fora do bloco
            console.log(sera)
        }
    }
}

console.log(sera)

function teste() {
    var local = 123
    console.log(local) // variável visível só no bloco da função
}

teste()

// console.log(local) // erro - local acessível apenas no bloco