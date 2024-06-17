const { v4: uuidv4 } = require('uuid');

class Movie {
    constructor(filme_id, nome, ano, duracao, genero, sinopse = [], imagem, plataformas = []) {
        this.filme_id = uuidv4(); // Gerar automaticamente um UUID
        //this.filme_id = filme_id;
        this.nome = nome;
        this.ano = ano;
        this.duracao = duracao;
        this.genero = genero;
        this.sinopse = sinopse;
        this.imagem = imagem;
        this.plataformas = plataformas;
    }
}

module.exports = Movie;