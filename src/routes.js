const express = require('express');
const { planoExercicios } = require('./controllers/musculacao');
const routes = express.Router();
const musculacaoController = require('./controllers/musculacao');

routes.get('/', function(rec,res){ //rec -> requisicao do cliente; res-> resposta do servidor
    res.send('Bem vindo ao meu servidor NodeJs.');
});

routes.get('/cursos', (req,res)=>{
    res.json({
        "web" : "React NodeJs",
        "mobile" : "React Native",
        "ML" : "Data Science" 
    })
});

//req -> body, header, params
routes.post('/cursos', (req,res)=>{
    const response = req.body;
    res.json(response);
});

routes.post('/alunos',(req,res)=>{
    const response = req.body;
    res.status(200).send();
    console.log(`Bem vindo  ${response.nome} ${(response.sobrenome)}`);
});

//capturando os parametros dentro da requisicao pela URL
routes.post('/prog/:nome', (req,res)=>{
    const response = req.params.nome;
    res.send(response);
});

routes.post('/diretoria', (req,res)=>{
    const nome = req.query.nome;
    const idade = req.query.idade;
    const sexo = req.query.sexo;

    //res.send(nome + ' ' + idade + ' ' + sexo);
    res.send(`${nome} - ${idade} - ${sexo}`);
});

routes.post('/matricula', musculacaoController.planoExercicios);

module.exports = routes;
