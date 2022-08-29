const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop(); // remove o último item
pilotos.push('Verstappen'); // adiciona item
pilotos.shift(); // remove o primero item
pilotos.unshift('Hamilton'); // adiciona item ao início do array
pilotos.splice(2, 0, 'Bottas', 'Massa'); // adiciona intens a partir do índice 2 e '0' não remove elementos
pilotos.splice(3, 1); // remove 1 item, a partir do índice 3
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // novo array a partir do índice 2
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // novo array a partir do índice 1 até o anterior a 4
console.log(algunsPilotos2);
