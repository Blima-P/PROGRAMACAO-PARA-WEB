document.getElementById('numeroForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário
    // Obtém o valor do número digitado nos campos
    const numero = parseFloat(document.getElementById('numero').value);
    const operacao = document.getElementById('operacao').value;
    const campoResultado = document.getElementById('resultado');

    let resultado;

    //se a operção for selecionada quadrado o resultado é calculado como quadrado se for cubo calcula como cubo.

    if (operacao === "quadrado") {
        resultado = calcularQuadrado(numero);
    } else {
        resultado = calcularCubo(numero);
    }

    // resultado mostrado no html
    campoResultado.textContent = resultado;
});
function calcularCubo(n) {
    return n * n * n;
}
function calcularQuadrado(n) {
    return n * n;
}
