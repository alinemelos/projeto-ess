const { v4: uuidv4 } = require('uuid');

class Movie {
    constructor(nome, ano, duracao, genero, sinopse, poster) {
        this.filme_id = uuidv4();
        this.nome = nome;
        this.ano = ano;
        this.duracao = duracao;
        this.genero = genero;
        this.sinopse = sinopse;
        this.poster = poster;
        this.plataformas = [];
        this.posts = [];
    }
}

module.exports = Movie;
