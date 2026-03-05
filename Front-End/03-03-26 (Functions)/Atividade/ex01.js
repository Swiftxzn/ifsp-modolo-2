let hora = 12;
let minuto = 45;
let segundo = 23;

let horario =
  hora <= 24 && minuto <= 60 && segundo <= 60 ? "Hora Válida" : "Hora Inválida";

console.log(horario);
