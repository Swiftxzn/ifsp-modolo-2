// Function Declaration
function somar(x, y) {
  const resultado = x + y;
  return resultado;
}
console.log(somar(2, 3));
console.log(somar(5, 9));


// Function Expression
const subtrair = function (a, b) {
  return a - b;
};
console.log(subtrair(4, 9));


// Arrow Function
const dividir = (x, y) => {
    const r = x / y
    return r
}
console.log(dividir(10, 2));


// One Liner 
const multiplicar = (x, y) => x * y
console.log(multiplicar(5, 6))