const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana Oministak 11.0',
        aluno: 'Gabriel Fernandes Lima',
        idade: '29'
    })
});

app.listen(3333);