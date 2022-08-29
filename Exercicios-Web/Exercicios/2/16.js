function verificarBissexto(ano) {
  if (ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0)) {
    return true;
  } else return false;
}

console.log(verificarBissexto(2100));

// ou

function verificarBissexto2(ano) {
  const divisivelQuatro = ano % 4 === 0;
  const divisivelCem = ano % 100 === 0;
  const divisivelQuatrocentos = ano % 400 === 0;
  return divisivelQuatrocentos || (divisivelQuatro && !divisivelCem);
}

console.log(verificarBissexto2(2020));
