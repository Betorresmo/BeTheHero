const express = require('express');

const app = express();

app.get('/', (request, response) =>{
    return response.json({
        name: 'Primeiro teste node - Semana OmniStack 11.0',
        type: 'pipipipopopo'
    });
})

app.listen(3333);
