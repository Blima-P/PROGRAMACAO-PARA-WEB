# 📚 GUIA RÁPIDO - Prova N1 Programação para Web

## 1. ESTRUTURA HTML BÁSICA

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <!-- Metatags importantes -->
    <meta charset="UTF-8">                              <!-- Suporta acentos -->
    <meta name="viewport" content="width=device-width"> <!-- Responsivo -->
    
    <!-- CSS externo -->
    <link rel="stylesheet" href="estilo.css">
    
    <title>Título da Página</title>
</head>
<body>
    <!-- Conteúdo aqui -->
    
    <!-- JS no final do body OU com defer no head -->
    <script src="script.js"></script>
</body>
</html>
```

---

## 2. ELEMENTOS DE FORMULÁRIO

```html
<!-- Label associado ao input pelo 'for' = 'id' -->
<label for="nome">Nome:</label>
<input type="text" id="nome" placeholder="Digite seu nome" required>

<!-- Tipos de input comuns -->
<input type="text">      <!-- Texto -->
<input type="number">    <!-- Número -->
<input type="email">     <!-- Email -->
<input type="password">  <!-- Senha -->

<!-- Botões -->
<button type="submit">Enviar</button>    <!-- Envia formulário -->
<button type="button">Ação</button>      <!-- Não envia formulário -->

<!-- Select (dropdown) -->
<select id="opcao">
    <option value="1">Opção 1</option>
    <option value="2">Opção 2</option>
</select>
```

---

## 3. VARIÁVEIS: let vs const

```javascript
// const - NÃO pode ser reatribuído (use para valores fixos)
const PI = 3.14;
const elemento = document.getElementById('id');

// let - PODE ser reatribuído (use quando valor vai mudar)
let contador = 0;
contador = 1; // OK!

// const PI = 4; // ERRO! Não pode reatribuir const
```

---

## 4. SELECIONAR ELEMENTOS DO DOM

```javascript
// Pelo ID (retorna 1 elemento)
const elemento = document.getElementById('meuId');

// IMPORTANTE: O id no HTML deve ser igual ao parâmetro
// <div id="meuId">  →  getElementById('meuId')
```

---

## 5. ALTERAR CONTEÚDO

```javascript
// innerHTML - Interpreta HTML (tags funcionam)
elemento.innerHTML = '<b>Negrito</b>';  // Aparece: Negrito (em negrito)

// textContent - Texto puro (tags aparecem como texto)
elemento.textContent = '<b>Negrito</b>'; // Aparece: <b>Negrito</b>

// innerText - Similar ao textContent
elemento.innerText = 'Texto simples';
```

---

## 6. CRIAR E ADICIONAR ELEMENTOS

```javascript
// 1. Criar elemento
const novoBotao = document.createElement('button');

// 2. Configurar
novoBotao.textContent = 'Clique aqui';
novoBotao.className = 'minha-classe';
novoBotao.id = 'meuBotao';

// 3. Adicionar à página
document.getElementById('container').appendChild(novoBotao);
```

---

## 7. EVENTOS

```javascript
// Forma 1: addEventListener (recomendado)
elemento.addEventListener('click', function() {
    console.log('Clicou!');
});

// Forma 2: onclick no JS
elemento.onclick = function() {
    console.log('Clicou!');
};

// Forma 3: onclick no HTML
// <button onclick="minhaFuncao()">Clique</button>

// EVENTO SUBMIT - SEMPRE usar preventDefault()!
formulario.addEventListener('submit', function(event) {
    event.preventDefault();  // IMPEDE RECARREGAR A PÁGINA!
    // código aqui
});
```

---

## 8. CONVERSÃO DE TIPOS

```javascript
// Valores de input SEMPRE vêm como STRING!
const valorTexto = input.value;  // "123" (string)

// Converter para número:
const numero = parseFloat(valorTexto);  // 123 (number) - decimais
const inteiro = parseInt(valorTexto);   // 123 (number) - inteiro
const numero2 = Number(valorTexto);     // 123 (number)

// Verificar se é número válido:
if (isNaN(numero)) {
    console.log('Não é um número!');
}
```

---

## 9. FUNÇÕES

```javascript
// Função tradicional
function somar(a, b) {
    return a + b;
}

// Arrow Function (forma completa)
const somar = (a, b) => {
    return a + b;
};

// Arrow Function (forma curta - uma linha)
const somar = (a, b) => a + b;

// Arrow Function (um parâmetro - sem parênteses)
const dobrar = n => n * 2;

// Arrow Function (sem parâmetros)
const saudar = () => console.log('Olá!');
```

---

## 10. IF-ELSE

```javascript
const nota = 7;

if (nota >= 7) {
    console.log('Aprovado');
} else if (nota >= 5) {
    console.log('Recuperação');
} else {
    console.log('Reprovado');
}

// Operadores de comparação:
// ==  igual (valor)
// === igual (valor E tipo) - PREFIRA ESTE!
// !=  diferente
// !== diferente (valor E tipo)
// >   maior
// <   menor
// >=  maior ou igual
// <=  menor ou igual

// Operadores lógicos:
// && (E) - ambos verdadeiros
// || (OU) - pelo menos um verdadeiro
// !  (NÃO) - inverte
```

---

## 11. LOOPS

```javascript
// FOR tradicional
for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}

// FOR percorrendo array
const frutas = ['maçã', 'banana', 'laranja'];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// FOR...OF (mais simples para arrays)
for (let fruta of frutas) {
    console.log(fruta);
}
```

---

## 12. ARRAYS (VETORES)

```javascript
// Criar array
const notas = [];              // Vazio
const numeros = [1, 2, 3, 4];  // Com valores

// Acessar (índice começa em 0!)
numeros[0]  // 1 (primeiro)
numeros[1]  // 2 (segundo)

// Propriedade length
numeros.length  // 4 (quantidade de itens)

// MÉTODOS PRINCIPAIS:
numeros.push(5);    // Adiciona ao FINAL → [1,2,3,4,5]
numeros.pop();      // Remove do FINAL → [1,2,3,4] (retorna 5)

numeros.unshift(0); // Adiciona ao INÍCIO → [0,1,2,3,4]
numeros.shift();    // Remove do INÍCIO → [1,2,3,4] (retorna 0)

// Somar todos os valores
let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}
const media = soma / notas.length;
```

---

## 13. TEMPLATE LITERALS

```javascript
const nome = 'Pedro';
const idade = 20;

// Forma antiga (concatenação)
const msg1 = 'Olá, ' + nome + '! Você tem ' + idade + ' anos.';

// Template Literal (use crase ` e ${})
const msg2 = `Olá, ${nome}! Você tem ${idade} anos.`;

// Funciona com expressões também
const msg3 = `Dobro da idade: ${idade * 2}`;
```

---

## 14. PROMPT E ALERT

```javascript
// prompt() - Pede entrada do usuário
const nome = prompt('Qual seu nome?');
// Retorna: texto digitado ou null (se cancelar)

// alert() - Mostra mensagem
alert('Olá, mundo!');

// confirm() - Pergunta sim/não
const confirmou = confirm('Tem certeza?');
// Retorna: true ou false
```

---

## 🎯 CHECKLIST PARA A PROVA

- [ ] Sei usar metatags (charset, viewport)
- [ ] Sei colocar script no final do body ou com defer
- [ ] Sei usar document.getElementById()
- [ ] Sei a diferença entre innerHTML e textContent
- [ ] Sei usar createElement e appendChild
- [ ] Sei usar addEventListener e preventDefault
- [ ] Sei converter string para número (parseFloat)
- [ ] Sei usar let vs const
- [ ] Sei escrever Arrow Functions
- [ ] Sei usar if-else
- [ ] Sei usar for loop
- [ ] Sei usar arrays: push, pop, length

---

## 💡 DICAS IMPORTANTES

1. **Sempre use `event.preventDefault()`** em formulários!
2. **Valores de input são STRINGS** - converta com parseFloat/parseInt
3. **Índices de array começam em 0** - primeiro item é arr[0]
4. **Prefira `===` ao invés de `==`** para comparações
5. **Script no final do body** garante que HTML já carregou
6. **Use const** para elementos do DOM e valores fixos
7. **Use let** quando o valor vai mudar

---

Boa prova! 🍀
