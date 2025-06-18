function DataValida(dia, mes, ano) {

  if (!Number.isInteger(dia) || !Number.isInteger(mes) || !Number.isInteger(ano)) return false;


  if (mes < 1 || mes > 12) return false;


  const diasNoMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


  const ehBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
  if (ehBissexto && mes === 2) {
    return dia >= 1 && dia <= 29;
  }


  return dia >= 1 && dia <= diasNoMes[mes - 1];
}
console.log(DataValida(29, 2, 2024)); // true (ano bissexto)
console.log(DataValida(29, 2, 2023)); // false
console.log(DataValida(31, 4, 2023)); // false (abril tem 30 dias)
console.log(DataValida(15, 8, 2023)); // true