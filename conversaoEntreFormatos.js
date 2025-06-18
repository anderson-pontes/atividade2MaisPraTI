 
function paresParaObjeto(pares) {
  const obj = {};
  for (let i = 0; i < pares.length; i++) {
    const [chave, valor] = pares[i];
    obj[chave] = valor;
  }
  return obj;
}


function objetoParaPares(obj) {
  const pares = [];
  for (const chave in obj) {
    if (obj.hasOwnProperty(chave)) {
      pares.push([chave, obj[chave]]);
    }
  }
  return pares;
}

const pares = [['nome', 'Anderson'], ['idade', 35], ['cidade', 'São Paulo']];
const obj = paresParaObjeto(pares);
console.log(obj);
// { nome: 'Anderson', idade: 35, cidade: 'São Paulo' }

const paresDeNovo = objetoParaPares(obj);
console.log(paresDeNovo);
// [ ['nome', 'Anderson'], ['idade', 35], ['cidade', 'São Paulo'] ]

