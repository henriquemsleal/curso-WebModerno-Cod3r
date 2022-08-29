function real(a) {
    a = a.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    console.log(`${a}`)
}
real(0.5940005)