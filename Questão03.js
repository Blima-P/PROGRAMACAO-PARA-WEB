function calcular() {
    // 1. Pegar os valores dos campos (e converter para números)
    const valorTotal = parseFloat(document.getElementById('valorTotal').value);
    const numParcelas = parseInt(document.getElementById('parcelas').value);
    const taxaMensal = parseFloat(document.getElementById('taxaJuros').value) / 100;

    // Validação simples para não calcular com campos vazios
    if (isNaN(valorTotal) || isNaN(numParcelas) || isNaN(taxaMensal)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // 2. Cálculo do Valor da Parcela (Fórmula de Juros Compostos)
    // Se a taxa for 0, é apenas uma divisão simples
    let valorParcela;
    if (taxaMensal === 0) {
        valorParcela = valorTotal / numParcelas;
    } else {
        valorParcela = (valorTotal * taxaMensal) / (1 - Math.pow(1 + taxaMensal, -numParcelas));
    }

    // 3. Cálculo do Montante Total Pago
    const montanteTotal = valorParcela * numParcelas;

    // 4. Exibir o resultado na tela
    const divResultado = document.getElementById('resultado');
    divResultado.innerHTML = `
        <p>Valor de cada parcela: R$ ${valorParcela.toFixed(2)}</p>
        <p>Total a ser pago: R$ ${montanteTotal.toFixed(2)}</p>
    `;
}