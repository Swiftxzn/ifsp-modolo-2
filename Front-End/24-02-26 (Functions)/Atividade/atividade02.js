function dadoN(faces) {
    return Math.floor(Math.random() * faces) + 1;
}
console.log(`lado do dado: ${dadoN(2)}`);