function inverterObjeto(obj) {
  const novasChaves = Object.values(obj);
  const novosValores = Object.keys(obj);
  let novoObjeto = {};
  for (let i = 0; i < novasChaves.length; i++) {
    novoObjeto[novasChaves[i]] = novosValores[i];
  }
  return novoObjeto;
}
console.log(inverterObjeto({ a: 1, b: 2, c: 3 }));

// ou

function inverter(objeto) {
  const paresDeChaveValorInvertidos = Object.entries(objeto).map(parChaveValor =>
    parChaveValor.reverse()
  );
  return Object.fromEntries(paresDeChaveValorInvertidos);
}
inverter({ x: 1, y: 2 });
console.log(inverter({ x: 1, y: 2 }));
