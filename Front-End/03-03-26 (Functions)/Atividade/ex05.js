function n(numero) {
    if (numero > 0) {
        return "Positivo";
    } else if (numero < 0) {
        return "Negativo";
    } else {
        return "Zero";
    }
}

console.log(n(10));
console.log(n(-5));  
console.log(n(0));