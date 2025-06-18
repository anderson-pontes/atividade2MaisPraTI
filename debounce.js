function debounce(fn, delay) {
  let timerId;

  return function (...args) {
    
    clearTimeout(timerId);

    
    timerId = setTimeout(() => {
      fn.apply(this, args); 
    }, delay);
  };
}
function pesquisar(valor) {
  console.log('Buscando por:', valor);
}

const pesquisarComDebounce = debounce(pesquisar, 500);

// Simulando chamadas rápidas
pesquisarComDebounce('a');
pesquisarComDebounce('ab');
pesquisarComDebounce('abc');
// Apenas a última chamada será executada após 500ms sem novas chamadas
