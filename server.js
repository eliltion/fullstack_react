const express = require('express'); // importar o modelo express
const server = express(); // instanciar o express
const dotenv = require('dotenv').config(); // importar e configurar o módulo


// ROTAS
server.get('/', function(rec,res){ //rec -> requisicao do cliente; res-> resposta do servidor
    res.send('Bem vindo ao meu servidor NodeJs.');
})

server.get('/cursos', function(req,res){
    res.json({
        "web" : "React NodeJs",
        "mobile" : "React Native",
        "ML" : "Data Science" 
    })
})
server.listen(process.env.PORT); // criar o servidor e fazelo-lo escrutar em uma porta
console.log(`Servidor foi iniciado na porta ${process.env.PORT}.`);