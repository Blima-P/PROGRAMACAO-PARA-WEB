// Atividade 1: Boas-vindas
function entrar() {
    const area = document.getElementById('area');
    const nome = prompt("Digite o seu nome:");
    const curso = prompt("Digite o seu curso:");

    if (nome === '' || nome === null) {
        alert("Ops, algo correu mal!");
    } else {
        area.innerHTML = `Bem-vindo, ${nome}, ao curso de ${curso}!`;
    }
}

// Atividade 2: Média Escolar
const calcularMediaFinal = (n1, n2, n3) => {
    const media = (n1 + n2 + n3) / 3;
    const situacao = media >= 7 ? "APROVADO" : "REPROVADO";
    console.log(`Média: ${media.toFixed(2)} - Situação: ${situacao}`);
};