function nomesOrdenadosPorPreco(produtos) {
  return produtos
    .slice()
    .sort((a, b) => a.preco - b.preco) 
    .map(produto => produto.nome); 
}
const produtos = [
  { nome: "Camiseta", preco: 49.9 },
  { nome: "Tênis", preco: 149.9 },
  { nome: "Boné", preco: 29.9 },
  { nome: "Calça", preco: 99.9 }
];

const nomesOrdenados = nomesOrdenadosPorPreco(produtos);
console.log(nomesOrdenados);
// Saída: ['Boné', 'Camiseta', 'Calça', 'Tênis']
