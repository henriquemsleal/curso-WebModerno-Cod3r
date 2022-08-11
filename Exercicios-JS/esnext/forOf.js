// percorre cada valor
for (let letra of 'Cod3r') {
  console.log(letra);
}

const assuntosEcma = ['Map', 'Set', 'Promise'];

// percorre índices
for (let i in assuntosEcma) {
  console.log(i);
}

// percorre valores
for (let assunto of assuntosEcma) {
  console.log(assunto);
}

const assuntosMap = new Map([
  ['Map', { abordado: true }],
  ['Set', { abordado: true }],
  ['Promise', { abordado: false }],
]);

// em Map(), tanto chaves quanto valores
for (let assunto of assuntosMap) {
  console.log(assunto);
}

// somente chaves
for (let chave of assuntosMap.keys()) {
  console.log(chave);
}

// somente valores
for (let valor of assuntosMap.values()) {
  console.log(valor);
}

// entries, com destructure
for (let [chave, valor] of assuntosMap.entries()) {
  console.log(chave, valor);
}

// com Set()
const s = new Set(['a', 'b', 'c']);
for (let letra of s) {
  console.log(letra);
}
