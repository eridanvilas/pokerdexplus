const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = 3030;

const PokemonOGG = require('./models/pokemon-ogg');

//DATABASE
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useCreateIndex: true 
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Mongoose defautlt connection is open');
});

db.on('error', err => {
    console.log(`Mongoose defautlt connection has occured \n${err}`);
});

db.on('disconnected', () => {
    console.log('Mongoose defautlt connection is disconnected');
});

process.on('SIGINT', () => {
    db.close(()=>{
        console.log('Mongoose default connection is disconnected due to application termination');
        process.exit(0);
    });
});


const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

app.listen(port, () => {
    console.log('PokerDex Plus API: Servidor Iniciado no Path http://localhost:' + port);
})

module.exports = app;
