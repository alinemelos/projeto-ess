const Movie = require('../models/movies');
const movies = require('../db/db');

exports.addMovie = (req, res) => {
  try {
    const { filme_id, nome, ano, duracao, genero, sinopse, imagem, plataformas } = req.body;
    
    // Validate the fields
    if (!nome) {
      return res.status(400).json({ error: 'O campo nome está vazio' });
    }
    if (!ano) {
      return res.status(400).json({ error: 'O campo ano está vazio' });
    }
    if (!duracao) {
      return res.status(400).json({ error: 'O campo duração está vazio' });
    }
    if (!genero) {
      return res.status(400).json({ error: 'O campo gênero está vazio' });
    }
    if (!sinopse) {
      return res.status(400).json({ error: 'O campo sinopse está vazio' });
    }
    if (!plataformas) {
      return res.status(400).json({ error: 'O campo plataformas está vazio' });
    }

    // Create a new movie instance
    const newMovie = new Movie(filme_id, nome, ano, duracao, genero, sinopse, imagem, plataformas);

    // Add the new movie to the database (array)
    movies.push(newMovie);
    res.status(201).json(newMovie);
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao adicionar o filme' });
  }
};
