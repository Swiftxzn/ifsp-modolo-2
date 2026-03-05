// Definir a função
function HelloWorld() {
  console.log("Hello, World!");
}

// Chama a função
HelloWorld();
HelloWorld();
HelloWorld();

// Retorno
function HelloWorld() {
  return "Hello, World!";
}

let x = HelloWorld();
console.log(x);

// Parâmetros
function Hello(name) {
  // return "Hello, " + name + "!";
  return `Hello, ${name}!`;
}
console.log(Hello("Bruno"));
console.log(Hello("Maria"));

let prof = "William";
console.log(Hello(prof));

// Somar, Subitrair, ...
function somar(n1, n2) {
  const resultado = n1 + n2;
  return resultado;
}
console.log(somar(1, 2));
console.log(somar(5, -2));
console.log(somar(1234, 5678));

function subitrair(x, y) {
  return x - y;
}

let a = 5
let b = 6
let resultado = subitrair(a, b)
console.log(`${a} - ${b} = ${resultado}`) // String interpolation
console.log(a + " - " + b + " = " + resultado) // Concatenation