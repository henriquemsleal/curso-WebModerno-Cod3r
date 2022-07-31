function salario(horasMes, valorHora) {
  total = horasMes * valorHora;
  return `Salário igual a R$${total}`;
}

console.log(salario(150, 8));

// deduzindo impostos
function salario2(horasMes, valorHora) {
  salBruto = horasMes * valorHora;
  salLiquido = salBruto * 0.7;
  return `Salário igual a R$${salLiquido}`;
}

console.log(salario2(150, 8));
