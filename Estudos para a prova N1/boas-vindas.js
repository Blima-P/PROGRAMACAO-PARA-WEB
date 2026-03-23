// ============================================
// SISTEMA DE BOAS-VINDAS - JAVASCRIPT EXPLICADO
// ============================================

// ============================================
// 1. VARIÁVEIS: let vs const
// ============================================

// const - Valor que NÃO pode ser reatribuído (constante)
// Use para elementos do DOM e valores fixos

const divMensagem = document.getElementById('mensagem');
const areaBotoes = document.getElementById('areaBotoes');

// let - Valor que PODE ser reatribuído
// Use quando o valor vai mudar durante a execução

let nomeUsuario = ''; // Vai guardar o nome digitado

// ============================================
// 2. FUNÇÃO TRADICIONAL
// ============================================

// Sintaxe: function nomeDaFuncao(parametros) { código }

function pedirNome() {
    
    // ============================================
    // 3. PROMPT() - PEDE ENTRADA DO USUÁRIO
    // ============================================
    
    // prompt() - Abre uma caixa de diálogo pedindo input
    // Retorna o texto digitado ou null se cancelar
    
    nomeUsuario = prompt('Qual é o seu nome?');
    
    // Verificando se o usuário digitou algo
    console.log('Nome digitado:', nomeUsuario);
    
    // ============================================
    // 4. VALIDAÇÃO COM IF-ELSE
    // ============================================
    
    // Verificar se o usuário não cancelou e digitou algo
    // null = cancelou | '' = não digitou nada
    
    if (nomeUsuario === null || nomeUsuario === '') {
        // Usando textContent (texto simples, sem HTML)
        divMensagem.textContent = '❌ Você não digitou um nome!';
        return; // Para a execução
    }
    
    // ============================================
    // 5. EXIBINDO MENSAGEM DE BOAS-VINDAS
    // ============================================
    
    // Usando innerHTML para inserir HTML formatado
    // Template literal (``) permite usar ${variavel}
    
    divMensagem.innerHTML = `
        <p>🎉 <strong>Olá, ${nomeUsuario}!</strong></p>
        <p>Seja bem-vindo(a) ao nosso sistema!</p>
    `;
    
    // ============================================
    // 6. CRIANDO ELEMENTOS DINAMICAMENTE
    // ============================================
    
    // Agora vamos criar um botão de "Sair" via código!
    
    criarBotaoSair();
}

// ============================================
// 7. ARROW FUNCTION (FUNÇÃO SETA)
// ============================================

// Sintaxe: const nome = (parametros) => { código }
// É uma forma mais curta de escrever funções

// Arrow Function SEM parâmetros:
const criarBotaoSair = () => {
    
    // Primeiro, limpa a área de botões (evita duplicar)
    areaBotoes.innerHTML = '';
    
    // ============================================
    // 8. DOCUMENT.CREATEELEMENT()
    // ============================================
    
    // Cria um novo elemento HTML (mas ainda não está na página!)
    // Parâmetro: nome da tag ('button', 'div', 'p', etc)
    
    const botaoSair = document.createElement('button');
    
    // ============================================
    // 9. CONFIGURANDO O ELEMENTO CRIADO
    // ============================================
    
    // Definindo o texto do botão
    botaoSair.textContent = '🚪 Sair';
    
    // Adicionando uma classe CSS
    botaoSair.className = 'btn-sair';
    
    // ============================================
    // 10. ADICIONANDO EVENTO COM ARROW FUNCTION
    // ============================================
    
    // Podemos usar onclick ou addEventListener
    // Aqui usamos onclick com Arrow Function
    
    botaoSair.onclick = () => {
        realizarLogout();
    };
    
    // OU de forma mais curta (quando é só uma função):
    // botaoSair.onclick = realizarLogout;
    
    // ============================================
    // 11. APPENDCHILD() - ADICIONA À PÁGINA
    // ============================================
    
    // appendChild() - Adiciona o elemento como filho de outro
    // Só agora o botão aparece na página!
    
    areaBotoes.appendChild(botaoSair);
    
    console.log('Botão de sair criado!');
};

// ============================================
// 12. OUTRA ARROW FUNCTION
// ============================================

// Arrow Function com uma linha (return implícito opcional)
const realizarLogout = () => {
    
    // Mostra mensagem de despedida
    divMensagem.innerHTML = `
        <p>👋 <strong>Até logo, ${nomeUsuario}!</strong></p>
        <p>Volte sempre!</p>
    `;
    
    // Remove o botão de sair
    areaBotoes.innerHTML = '';
    
    // Limpa o nome
    nomeUsuario = '';
    
    console.log('Usuário fez logout');
};

// ============================================
// COMPARAÇÃO: FUNÇÃO TRADICIONAL vs ARROW
// ============================================

/*
    FUNÇÃO TRADICIONAL:
    function somar(a, b) {
        return a + b;
    }
    
    ARROW FUNCTION (forma completa):
    const somar = (a, b) => {
        return a + b;
    };
    
    ARROW FUNCTION (forma curta - uma linha):
    const somar = (a, b) => a + b;
    
    ARROW FUNCTION (um parâmetro - sem parênteses):
    const dobrar = n => n * 2;
*/

// ============================================
// RESUMO DOS CONCEITOS USADOS:
// ============================================
/*
    1. let vs const - Variáveis mutáveis vs constantes
    2. prompt() - Pede entrada do usuário
    3. function nome() {} - Função tradicional
    4. const nome = () => {} - Arrow Function
    5. document.createElement('tag') - Cria elemento
    6. elemento.appendChild(filho) - Adiciona à página
    7. onclick - Evento de clique
    8. .textContent vs .innerHTML - Formas de alterar conteúdo
    9. .className - Define classe CSS do elemento
    10. Template literals (`${variavel}`) - Strings dinâmicas
*/
