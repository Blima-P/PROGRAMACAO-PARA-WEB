document.getElementById('numeroForm').addEventListener('submit', function(event)
{
event.preventDefault(); // Impede o envio do formulário
// Obtém o valor do número digitado
const numero = parseFloat(document.getElementById('numero').value);
// Chama a função para calcular o quadrado
const resultadoQuadrado = calcularQuadrado(numero);
const resultadoCubo = calcularCubo(numero);
// Exibe o resultado na página
document.getElementById('resultadoQuadrado').textContent = resultadoQuadrado;
document.getElementById('resultadoCubo').textContent = resultadoCubo;
});
function calcularQuadrado(numero) {
return numero * numero;
}
function calcularCubo(numero) {
return numero * numero * numero;
}
//Feito por: Pedro Braga, 2026/02/25 falta estilizar a página, mas o código funciona perfeitamente.