function ppt() {
    const jogo = Math.floor(Math.random() * 3);
    if (jogo == 0) {
        return "Pedra";
    } else if (jogo == 1) {
        return "Papel";
    } else {
        return "Tesoura";
    }
}
console.log(ppt());