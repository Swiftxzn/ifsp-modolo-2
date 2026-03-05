function sorteioN1() {
  const sorteio = Math.floor(Math.random() * 100);
  return sorteio;
}
console.log(sorteioN1());

function sorteioN2() {
  const sorteio = (Math.random() * 10).toFixed(2);
  return sorteio;
}
console.log(sorteioN2());

function sorteioN3() {
  const sorteio = (Math.random() * 5).toFixed(1);
  return sorteio;
}
console.log(sorteioN3());
