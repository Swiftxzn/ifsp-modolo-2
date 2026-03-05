// 2) Verificar se uma data é válida (sem considerar ano bissexto). Utilize o operador ternário para tomada de decisão, sem usar if/else.
let dia = 12;
let mes = 4;
let ano = 2008;

let Data = dia <= 31 && mes <= 12 ? "Data Válida" : "Data Inválida";

console.log(`A data ${dia}/${mes}/${ano} é ${Data}.`);
