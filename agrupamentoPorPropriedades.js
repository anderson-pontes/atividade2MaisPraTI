function agruparVendasPorCliente(vendas) {
  return vendas.reduce((acumulador, venda) => {
    const { cliente, total } = venda;

    if (acumulador[cliente]) {
      acumulador[cliente] += total;
    } else {
      acumulador[cliente] = total;
    }

    return acumulador;
  }, {});
}
const vendas = [
  { cliente: "Ana", total: 100 },
  { cliente: "João", total: 200 },
  { cliente: "Ana", total: 150 },
  { cliente: "Maria", total: 300 },
  { cliente: "João", total: 50 }
];

const resultado = agruparVendasPorCliente(vendas);
console.log(resultado);
// Saída esperada:
// { Ana: 250, João: 250, Maria: 300 }
