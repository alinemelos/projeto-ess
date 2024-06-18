
class Page{
    constructor(filme_id, nome, image_url, sinopse, diretor, ano, genero, duracao, posts = []) {
        this.filme_id = filme_id;
        this.poster = image_url;    
        this.nome = nome;
        this.ano = ano;
        this.duracao = duracao;
        this.sinopse = sinopse;
        this.diretor = diretor;
        this.genero = genero;
        this.posts = posts;
    }
}

module.exports = Page