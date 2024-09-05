const mongoose = require('mongoose');

const animals = mongoose.model('animals',{
    nome_animal: String,
    nome_cientifico: String,
    continente: String,
    som: String,
    imagem: String

});

module.exports = animals;