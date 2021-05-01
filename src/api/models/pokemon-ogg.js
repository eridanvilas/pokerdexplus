const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    pokemon:{
        type: String,
        require: true,
    },
    name:{
        type: String,
        require: true,
    },
    path:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("PokemonOGG", schema);