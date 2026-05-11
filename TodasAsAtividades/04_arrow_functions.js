// Atividade de refatoração de evento
const formulario = document.querySelector('#meuForm');
if (formulario) {
    formulario.addEventListener('submit', (event) => event.preventDefault());
}

// Atividade de cálculos científicos
const calcularQuadrado = n => n * n;
const calcularCubo = n => n ** 3;
const calcularRaizQuadrada = n => Math.sqrt(n);

// Testes de consola
console.log("Quadrado de 5:", calcularQuadrado(5));
console.log("Cubo de 3:", calcularCubo(3));
console.log("Raiz de 16:", calcularRaizQuadrada(16));