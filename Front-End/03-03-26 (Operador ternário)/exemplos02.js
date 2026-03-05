//estrutura de Decisão Encadeada(if/else)
let nota = 6.5;

let situacao = nota >= 6 ? "Aprovado" : "Reprovado";

console.log(`Situação do Aluno: ${situacao}`);

// Estrutura de Descisão Compostas (if/else if/ else)
let conceito =
  nota >= 8 ? "A" 
  : nota >= 6 ? "B" 
  : nota >= 4 ? "C" 
  : nota >= 2 ? "D" 
  : "E";

console.log(`Conceito: ${conceito}`);