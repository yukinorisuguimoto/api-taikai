var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var linhaSchema = new Schema({
    musica:  String,
    cantor: String,
    cidade:   String,
    estado: String,
    notas: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    ordem: Number 
});

exports.Linha = mongoose.model('Linha', linhaSchema);

exports.test = 'testeee';

const { PI } = Math;

exports.area = (r) => PI * r ** 2;