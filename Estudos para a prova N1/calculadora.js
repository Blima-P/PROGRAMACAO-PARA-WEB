// ============================================
// CALCULADORA - JAVASCRIPT EXPLICADO
// ============================================

// ============================================
// 1. SELECIONANDO ELEMENTOS DO DOM
// ============================================

// document.getElementById() - Seleciona um elemento pelo seu ID
// Retorna o elemento HTML que tem o id especificado

const formulario = document.getElementById('formularioCalculo');
const inputNumero = document.getElementById('numero');
const divResultado = document.getElementById('resultado');

// ============================================
// 2. ADICIONANDO EVENTO AO FORMULÁRIO
// ============================================

// addEventListener() - Adiciona um "ouvinte" de eventos
// Primeiro parâmetro: tipo do evento ('submit', 'click', etc)
// Segundo parâmetro: função que será executada

formulario.addEventListener('submit', function(event) {
    
    // ============================================
    // 3. PREVENTDEFAULT() - MUITO IMPORTANTE!
    // ============================================
    
    // event.preventDefault() - Impede o comportamento padrão do evento
    // No caso do submit, impede que a página recarregue
    // SEM ISSO, a página recarrega e você perde os dados!
    
    event.preventDefault();
    
    // ============================================
    // 4. PEGANDO O VALOR DO INPUT
    // ============================================
    
    // .value - Pega o valor digitado no input
    // ATENÇÃO: O valor SEMPRE vem como STRING (texto)!
    
    const valorDigitado = inputNumero.value;
    console.log('Valor digitado (string):', valorDigitado);
    console.log('Tipo:', typeof valorDigitado); // "string"
    
    // ============================================
    // 5. CONVERTENDO STRING PARA NÚMERO
    // ============================================
    
    // parseFloat() - Converte string para número decimal
    // parseInt() - Converte string para número inteiro
    // Number() - Também converte para número
    
    const numero = parseFloat(valorDigitado);
    console.log('Número convertido:', numero);
    console.log('Tipo:', typeof numero); // "number"
    
    // ============================================
    // 6. VALIDAÇÃO COM IF-ELSE
    // ============================================
    
    // isNaN() - Verifica se NÃO é um número (Not a Number)
    
    if (isNaN(numero)) {
        // Se não for um número válido, mostra erro
        divResultado.innerHTML = '<p style="color: red;">❌ Digite um número válido!</p>';
        return; // Para a execução aqui
    }
    
    // ============================================
    // 7. REALIZANDO CÁLCULOS
    // ============================================
    
    // Operadores matemáticos: + - * / ** (potência)
    
    const quadrado = numero ** 2;  // ou: numero * numero
    const cubo = numero ** 3;      // ou: numero * numero * numero
    
    console.log('Quadrado:', quadrado);
    console.log('Cubo:', cubo);
    
    // ============================================
    // 8. EXIBINDO RESULTADO - innerHTML vs textContent
    // ============================================
    
    // innerHTML - Permite inserir código HTML (tags funcionam)
    // textContent - Insere apenas texto puro (tags aparecem como texto)
    // innerText - Similar ao textContent, mas respeita CSS
    
    // Usando innerHTML para inserir HTML formatado:
    divResultado.innerHTML = `
        <p><strong>Número:</strong> ${numero}</p>
        <p><strong>Quadrado (n²):</strong> ${quadrado}</p>
        <p><strong>Cubo (n³):</strong> ${cubo}</p>
    `;
    
    // EXEMPLO da diferença:
    // innerHTML: divResultado.innerHTML = '<b>Negrito</b>' → aparece: Negrito (em negrito)
    // textContent: divResultado.textContent = '<b>Negrito</b>' → aparece: <b>Negrito</b>
});

// ============================================
// RESUMO DOS CONCEITOS USADOS:
// ============================================
/*
    1. document.getElementById('id') - Seleciona elemento
    2. addEventListener('evento', função) - Escuta eventos
    3. event.preventDefault() - Impede comportamento padrão
    4. .value - Pega valor do input (sempre string!)
    5. parseFloat() - Converte string para número
    6. if-else - Estrutura condicional
    7. isNaN() - Verifica se não é número
    8. innerHTML vs textContent - Formas de alterar conteúdo
    9. Template literals (``) - Strings com ${variáveis}
*/
