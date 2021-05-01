const mongoose = require('mongoose');
const PokemonOGG = mongoose.model('PokemonOGG');

// listar OGG path referente ao pokemon

exports.listPokemonOGG = async (req, res) => {
    try {
        const data = await PokemonOGG.find({});
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({ message: 'Falha ao carregar as OGG do Pokemon.' });
    }
};

// Armazena OGG no banco

exports.createPokemonOGG = async (req, res) => {
    try {
        const pokemonOGG = new PokemonOGG({
            pokemon: req.body.pokemon,
            name: req.body.name,
            path: req.body.path
        });

        console.log(pokemonOGG);

        await pokemonOGG.save();

        res.status(201).send({ message: 'PokemonOGG cadastrado com sucesso!' });

    } catch (error) {
        res.status(201).send({ message: 'Falha ao cadastrar o PokemonOGG.' });
    }
};