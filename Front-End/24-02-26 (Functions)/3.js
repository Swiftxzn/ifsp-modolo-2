// Geração de números aleatórios
console.log(Math.random());
console.log(Math.random() * 2);
console.log(Math.floor(Math.random() * 2));

// Função para sortear uma moeda "cara" ou "coroa"
function sortearCaraOuCoroa() {
  const sorteio = Math.floor(Math.random() * 2);
  if (sorteio == 0) {
    return "cara";
  } else {
    return "coroa";
  }
}

function sortearCaraOuCoroa() {
  const sorteio = Math.floor(Math.random() * 2);
  if (sorteio == 0) {
    return "cara";
  }
  return "coroa";
}

// Operador ternário
function sortearCaraOuCoroa() {
  const sorteio = Math.floor(Math.random() * 2);
  return sorteio == 0 ? "cara" : "coroa";
}

function sortearCaraOuCoroa() {
  return Math.floor(Math.random() * 2) == 0 ? "cara" : "coroa";
}

console.log(sortearCaraOuCoroa());
console.log(sortearCaraOuCoroa());
console.log(sortearCaraOuCoroa());