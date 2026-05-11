const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numeroSecreto = Math.floor(Math.random() * 100) + 1;

console.log("--- BEM-VINDO AO JOGO DE ADIVINHAÇÃO ---");

const jogar = () => {
    rl.question('Tente adivinhar o número (entre 1 e 100): ', (resposta) => {
        const chute = parseInt(resposta);

        if (isNaN(chute)) {
            console.log("Por favor, digite um número válido.");
            jogar();
        } else if (chute === numeroSecreto) {
            console.log(`PARABÉNS! O número era ${numeroSecreto}.`);
            rl.close();
        } else {
            console.log(chute < numeroSecreto ? "MAIOR! Tente novamente." : "MENOR! Tente novamente.");
            jogar();
        }
    });
};

jogar();