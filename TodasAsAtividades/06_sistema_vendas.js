let baseVendas = [];
let contadorId = 1;

function registarVenda() {
    const nomeVendedor = document.getElementById('vendedor').value;
    const valorBruto = parseFloat(document.getElementById('valor').value);

    if (!nomeVendedor || isNaN(valorBruto)) {
        alert("Preencha os dados corretamente!");
        return;
    }

    const novaVenda = {
        id: contadorId++,
        vendedor: nomeVendedor,
        valorOriginal: valorBruto,
        desconto: valorBruto * 0.10,
        valorComDesconto: valorBruto * 0.90,
        dataHora: new Date().toLocaleString('pt-BR')
    };

    baseVendas.push(novaVenda);
    console.log("Venda registada com sucesso!");
    console.table(baseVendas);
}

// Operações de Array solicitadas
const apagarUltimaVenda = () => baseVendas.pop();
const resetarSistema = () => { baseVendas = []; contadorId = 1; };
const eliminarVendaPorId = (id) => {
    baseVendas = baseVendas.filter(v => v.id !== id);
};