const Page = require('../models/page');
const movies = require('../db/db')

exports.showpage = (req, res) => {
    try{

        const {nome, filme_id} = req.body;

 
        // Find the movie by filme_id
        const movie = movies.find(m => m.filme_id === filme_id);
        if (!movie) {
          return res.status(404).json({ error: 'Movie not found' });
        }

        // update page information based on the movie of the data base
        const newPage = new Page(movie.filme_id, movie.titulo, movie.poster, movie.sinopse, movie.diretor, movie.ano, movie.genero, movie.duracao, movie.faixa_etaria, movie.posts);
 
        res.status(201).json(newPage);
        return newPage;
    }catch(error){
        res.status(400).json({error: error.message});
    }
};


