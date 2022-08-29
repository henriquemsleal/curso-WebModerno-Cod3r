// com promise:
function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(), tempo);
  });
}
/* esperarPor(2000)
  .then(() => console.log('Executando promise 1...'))
  .then(esperarPor)
  .then(() => console.log('Executando promise 2...'))
  .then(esperarPor)
  .then(() => console.log('Executando promise 3...')); 
*/

function retornarValor() {
  return new Promise(resolve => {
    setTimeout(() => resolve(10), 5000);
  });
}

// com async/await:

async function retornarValorRapido() {
  return 20;
}

async function executar() {
  // let valor = await retornarValor();
  let valor = await retornarValorRapido();

  await esperarPor(1500);
  console.log(`Async/Await ${valor}...`);
  await esperarPor(1500);
  console.log(`Async/Await ${valor + 1}...`);
  await esperarPor(1500);
  console.log(`Async/Await ${valor + 2}...`);

  return valor + 3;
}
// fora da função async, acessar o valor a partir do .then
// executar().then(console.log);

// o await é usado dentro de uma função async
async function executarDeVerdade() {
  const valor = await executar();
  console.log(valor);
}

executarDeVerdade();
