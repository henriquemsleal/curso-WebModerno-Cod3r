const anonimo = process.argv.indexOf('-a') !== -1; // usando diretamente no terminal com flag -a
// console.log(anonimo); // true se usou flag -a

if (anonimo) {
  process.stdout.write('Fala Anônimo!\n');
  process.exit(); // para matar o processo
} else {
  process.stdout.write('Informe o seu nome: ');
  process.stdin.on('data', data => {
    const nome = data.toString().replace('\n', '');
    process.stdout.write(`Fala ${nome}!\n`);
    process.exit();
  });
}
