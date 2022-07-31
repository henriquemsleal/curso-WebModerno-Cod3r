function mes(num) {
  if (num === NaN || num % 1 !== 0 || num < 1 || num > 12) {
    return 'Digite um número inteiro de 1 a 12';
  } else {
    switch (num) {
      case 1:
        return 'janeiro';
      case 2:
        return 'fevereiro';
      case 3:
        return 'março';
      case 4:
        return 'abril';
      case 5:
        return 'maio';
      case 6:
        return 'junho';
      case 7:
        return 'julho';
      case 8:
        return 'agosto';
      case 9:
        return 'setembro';
      case 10:
        return 'outubro';
      case 11:
        return 'novembro';
      case 12:
        return 'dezembro';
    }
  }
}

console.log(mes(11));

// ou
function receberNomeDoMes(numero) {
  const mapeamento = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
  ];
  return mapeamento[--numero];
}

console.log(receberNomeDoMes(1));
