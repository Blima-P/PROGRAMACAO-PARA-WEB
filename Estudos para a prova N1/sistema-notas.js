// ============================================
// SISTEMA DE NOTAS - JAVASCRIPT EXPLICADO
// ============================================

// ============================================
// 1. ARRAYS (VETORES)
// ============================================

// Array é uma lista ordenada de valores
// Índices começam em 0 (primeiro item = índice 0)
// Sintaxe: const array = [valor1, valor2, valor3]

const notas = []; // Array vazio - vamos adicionar notas aqui

// EXEMPLOS de arrays:
// const frutas = ['maçã', 'banana', 'laranja'];
// frutas[0] → 'maçã' (primeiro item)
// frutas[1] → 'banana' (segundo item)
// frutas.length → 3 (quantidade de itens)

// ============================================
// 2. SELECIONANDO ELEMENTOS
// ============================================

const formNota = document.getElementById('formNota');
const inputNota = document.getElementById('nota');
const divListaNotas = document.getElementById('listaNotas');
const divResultado = document.getElementById('resultado');

// ============================================
// 3. EVENTO SUBMIT DO FORMULÁRIO
// ============================================

formNota.addEventListener('submit', function(event) {
    
    // Impede o recarregamento da página
    event.preventDefault();
    
    // Pega o valor e converte para número
    const valorNota = parseFloat(inputNota.value);
    
    // ============================================
    // 4. VALIDAÇÃO COM IF-ELSE
    // ============================================
    
    // Verifica se é um número válido entre 0 e 10
    if (isNaN(valorNota) || valorNota < 0 || valorNota > 10) {
        alert('❌ Digite uma nota válida entre 0 e 10!');
        return;
    }
    
    // ============================================
    // 5. PUSH() - ADICIONA AO FINAL DO ARRAY
    // ============================================
    
    // push() adiciona um item ao FINAL do array
    // Retorna o novo tamanho do array
    
    notas.push(valorNota);
    
    console.log('Nota adicionada:', valorNota);
    console.log('Array de notas:', notas);
    console.log('Quantidade de notas:', notas.length);
    
    // Limpa o input
    inputNota.value = '';
    
    // Atualiza a lista na tela
    atualizarLista();
});

// ============================================
// 6. FUNÇÃO PARA REMOVER ÚLTIMA NOTA
// ============================================

function removerUltima() {
    
    // ============================================
    // 7. LENGTH - TAMANHO DO ARRAY
    // ============================================
    
    // .length retorna a quantidade de itens no array
    
    if (notas.length === 0) {
        alert('❌ Não há notas para remover!');
        return;
    }
    
    // ============================================
    // 8. POP() - REMOVE O ÚLTIMO ITEM
    // ============================================
    
    // pop() remove e retorna o ÚLTIMO item do array
    
    const notaRemovida = notas.pop();
    
    console.log('Nota removida:', notaRemovida);
    console.log('Array após remoção:', notas);
    
    // Atualiza a lista na tela
    atualizarLista();
    
    // Limpa o resultado anterior
    divResultado.innerHTML = '';
    divResultado.className = '';
}

// ============================================
// 9. FUNÇÃO PARA ATUALIZAR A LISTA NA TELA
// ============================================

const atualizarLista = () => {
    
    // Se não há notas, mostra mensagem padrão
    if (notas.length === 0) {
        divListaNotas.textContent = 'Nenhuma nota adicionada';
        return;
    }
    
    // ============================================
    // 10. LOOP FOR - PERCORRENDO O ARRAY
    // ============================================
    
    // Sintaxe: for (inicialização; condição; incremento)
    // i++ é o mesmo que i = i + 1
    
    let listaHTML = '<ul>';
    
    for (let i = 0; i < notas.length; i++) {
        // notas[i] acessa o item no índice i
        // i começa em 0 e vai até length - 1
        
        listaHTML += `<li>Nota ${i + 1}: <strong>${notas[i]}</strong></li>`;
        
        console.log(`Índice ${i}: ${notas[i]}`);
    }
    
    listaHTML += '</ul>';
    
    // Usando innerHTML para inserir a lista HTML
    divListaNotas.innerHTML = listaHTML;
};

// ============================================
// 11. FUNÇÃO PARA CALCULAR A MÉDIA
// ============================================

function calcularMedia() {
    
    // Validação: precisa ter pelo menos uma nota
    if (notas.length === 0) {
        alert('❌ Adicione pelo menos uma nota!');
        return;
    }
    
    // ============================================
    // 12. SOMANDO VALORES COM FOR
    // ============================================
    
    let soma = 0;
    
    for (let i = 0; i < notas.length; i++) {
        soma = soma + notas[i]; // ou: soma += notas[i]
    }
    
    console.log('Soma das notas:', soma);
    
    // Calculando a média
    const media = soma / notas.length;
    
    console.log('Média:', media);
    
    // ============================================
    // 13. TOOFIXED() - FORMATA CASAS DECIMAIS
    // ============================================
    
    // toFixed(n) formata o número com n casas decimais
    // ATENÇÃO: retorna uma STRING!
    
    const mediaFormatada = media.toFixed(2); // Ex: "7.50"
    
    // ============================================
    // 14. IF-ELSE PARA DETERMINAR STATUS
    // ============================================
    
    let status;
    let classeCSS;
    
    if (media >= 7) {
        status = '✅ APROVADO';
        classeCSS = 'aprovado';
    } else if (media >= 5) {
        status = '⚠️ RECUPERAÇÃO';
        classeCSS = 'reprovado';
    } else {
        status = '❌ REPROVADO';
        classeCSS = 'reprovado';
    }
    
    // ============================================
    // 15. EXIBINDO RESULTADO
    // ============================================
    
    divResultado.innerHTML = `
        <p><strong>Quantidade de notas:</strong> ${notas.length}</p>
        <p><strong>Média:</strong> ${mediaFormatada}</p>
        <p><strong>Status:</strong> ${status}</p>
    `;
    
    // Aplicando classe CSS para cor
    divResultado.className = classeCSS;
    
    // Mostrando também no console
    console.log('=== RESULTADO ===');
    console.log('Notas:', notas);
    console.log('Média:', mediaFormatada);
    console.log('Status:', status);
}

// ============================================
// 16. FUNÇÃO PARA LIMPAR TUDO
// ============================================

const limparTudo = () => {
    
    // ============================================
    // 17. ESVAZIANDO O ARRAY
    // ============================================
    
    // Forma 1: notas = [] (se fosse let)
    // Forma 2: notas.length = 0 (funciona com const)
    // Forma 3: notas.splice(0, notas.length)
    
    notas.length = 0; // Esvazia o array
    
    // Limpa a interface
    divListaNotas.textContent = 'Nenhuma nota adicionada';
    divResultado.innerHTML = '';
    divResultado.className = '';
    
    console.log('Tudo limpo! Array:', notas);
};

// ============================================
// RESUMO DOS CONCEITOS DE ARRAYS:
// ============================================
/*
    CRIAÇÃO:
    const arr = [];           // Array vazio
    const arr = [1, 2, 3];    // Array com valores
    
    ACESSO:
    arr[0]      // Primeiro item (índice 0)
    arr[1]      // Segundo item (índice 1)
    arr.length  // Quantidade de itens
    
    MÉTODOS PRINCIPAIS:
    arr.push(item)   // Adiciona ao FINAL
    arr.pop()        // Remove do FINAL (retorna o item)
    arr.unshift(item)// Adiciona ao INÍCIO
    arr.shift()      // Remove do INÍCIO (retorna o item)
    
    LOOP FOR:
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    
    FOR...OF (alternativa mais simples):
    for (let item of arr) {
        console.log(item);
    }
*/

// ============================================
// RESUMO GERAL DOS CONCEITOS USADOS:
// ============================================
/*
    1. Arrays: [], push(), pop(), length
    2. Loops: for (let i = 0; i < arr.length; i++)
    3. If-else: validações e condicionais
    4. parseFloat(): converte string para número
    5. toFixed(n): formata casas decimais
    6. getElementById: seleciona elementos
    7. innerHTML/textContent: altera conteúdo
    8. addEventListener: escuta eventos
    9. event.preventDefault(): impede reload
    10. Arrow Functions: () => {}
*/
