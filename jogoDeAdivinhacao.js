const readline = require('readline-sync');

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let acertou = false;

while (!acertou) {
  const resposta = readline.question('Adivinhe o numero entre 1 e 100: ');
  const palpite = parseInt(resposta);
  tentativas++;

  if (isNaN(palpite)) {
    console.log('Por favor, digite um número válido.');
  } else if (palpite < numeroSecreto) {
    console.log('Mais alto!');
  } else if (palpite > numeroSecreto) {
    console.log('Mais baixo!');
  } else {
    console.log(`Parabéns! Você acertou em ${tentativas} tentativa(s).`);
    acertou = true;
  }
}
