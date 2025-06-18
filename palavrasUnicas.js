function palavrasUnicas(frase) {
  const palavras = frase.split(' ');
  const unicas = [];

  for (let i = 0; i < palavras.length; i++) {
    let contador = 0;

    for (let j = 0; j < palavras.length; j++) {
      if (palavras[i] === palavras[j]) {
        contador++;
      }
    }

    if (contador === 1) {
      unicas.push(palavras[i]);
    }
  }

  return unicas;
}

// Exemplo de uso
const frase = "olá olá mundo mundo teste exemplo exemplo sol";
const resultado = palavrasUnicas(frase);
console.log(resultado); 
