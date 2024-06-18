
class Page{
    constructor(filme_id, nome, image_url, sinopse, diretor, ano, genero, duracao, faixa_etaria, posts = []) {
        this.filme_id = filme_id;
        this.poster = image_url;    
        this.nome = nome;
        this.ano = ano;
        this.duracao = duracao;
        this.sinopse = sinopse;
        this.diretor = diretor;
        this.genero = genero;
        this.faixa_etaria = faixa_etaria;
        this.posts = posts;
    }
}

module.exports = Page