const express = require('express'); // importar o modelo express
const { route } = require('./src/routes');
const server = express(); // instanciar o express
const dotenv = require('dotenv').config(); // importar e configurar o módulo

//configuracoes
server.use(express.json()); //permitir resposta ao cliente em formato json

// ROTAS
server.use(require('./src/routes'));

server.listen(process.env.PORT); // criar o servidor e fazelo-lo escrutar em uma porta
console.log(`Servidor foi iniciado na porta ${process.env.PORT}.`);