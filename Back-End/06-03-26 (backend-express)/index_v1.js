const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({msg: 'Olá, Express.js'});
});

app.listen(8000, () => { console.log('Executando na porta 8000')});