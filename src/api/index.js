const express = require('express');
const app = express();
const port = 8080

app.use(express.json());

app.get('/api/v1', (req, res) => res.json({
    nameApi:'PokerDex Plus API', 
    status:'API Iniciada...'
}));

app.listen(port, () =>{
    console.log('PokerDex Plus API: Servidor Iniciado no Path http://localhost:'+ port);
})

