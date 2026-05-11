const express = require('express');
const app = express();
const porta = 3000;

app.get('/salarios', (req, res) => {
    const query = req.query.valores;
    
    if (!query) {
        return res.status(400).send("Envie os valores na URL. Ex: ?valores=1500,3000,1200");
    }

    const listaSalarios = query.split(',').map(Number);
    const maiorSalario = Math.max(...listaSalarios);

    res.send(`
        <html>
            <body>
                <h1>Processamento de Salários</h1>
                <p>Lista enviada: ${listaSalarios.join(' | ')}</p>
                <h2>O maior salário é: R$ ${maiorSalario}</h2>
            </body>
        </html>
    `);
});

app.listen(porta, () => {
    console.log(`Servidor a correr em http://localhost:${porta}/salarios`);
});