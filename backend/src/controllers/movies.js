const Movie = require('../models/movies');
const movies = require('../db/db');

exports.addMovie = (req, res) => {
  try {
    const { nome, ano, duracao, genero, sinopse, poster } = req.body;
    //console.log(nome, ano, duracao, genero, sinopse, poster)
    // Validate the fields
    if (!nome) {
      return res.status(400).json({ error: 'Cadastro Incompleto' });
    }
    if (!ano) {
      return res.status(400).json({ error: 'Cadastro Incompleto' });
    }
    if (!duracao) {
      return res.status(400).json({ error: 'Cadastro Incompleto' });
    }
    if (!genero) {
      return res.status(400).json({ error: 'Cadastro Incompleto' });
    }
    if (!sinopse) {
      return res.status(400).json({ error: 'Cadastro Incompleto' });
    }
    if (!poster) {
      return res.status(400).json({ error: 'Cadastro Incompleto' });
    }

    const existingNome = movies.find(movie => movie.nome === nome);
    const existingPoster = movies.find(movie => movie.poster === poster);
    if (existingNome || existingPoster) {
      return res.status(409).json({ error: 'Um filme com esse nome ou poster já existe' });
    }
    
    // Create a new movie instance
    const newMovie = new Movie(nome, ano, duracao, genero, sinopse, poster);

    // Add the new movie to the database (array)
    movies.push(newMovie);
    res.status(201).json(newMovie);
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao adicionar o filme' });
  }
};


exports.delMovie = (req, res) => {
  try {
    const { filme_id } = req.body;
    
    // Find the index of the movie with the given filme_id
    const movieIndex = movies.findIndex(movie => movie.filme_id === filme_id);

    if (movieIndex === -1) {
      // If the movie is not found, return a 404 error
      return res.status(404).json({ error: 'Filme não encontrado' });
    }

    // Remove the movie from the array
    movies.splice(movieIndex, 1);
    
    // Return a success response
    res.status(200).json({ message: 'Filme removido com sucesso' });
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao remover o filme' });
  }
};


exports.editMovie = (req, res) => {
  try {
    const { filme_id, nome, ano, duracao, genero, sinopse, poster, plataformas } = req.body;

    // Find the movie with the given filme_id
    const movieIndex = movies.findIndex(movie => movie.filme_id === filme_id);

    if (movieIndex === -1) {
      // If the movie is not found, return a 404 error
      return res.status(404).json({ error: 'Filme não encontrado' });
    }

    // Validate the fields
    if (!nome && !ano && !duracao && !genero && !sinopse && !poster && !plataformas) {
      return res.status(400).json({ error: 'Nenhum campo para atualizar' });
    }

    // Update the movie details
    if (nome) movies[movieIndex].nome = nome;
    if (ano) movies[movieIndex].ano = ano;
    if (duracao) movies[movieIndex].duracao = duracao;
    if (genero) movies[movieIndex].genero = genero;
    if (sinopse) movies[movieIndex].sinopse = sinopse;
    if (poster) movies[movieIndex].poster = poster;
    if (plataformas) movies[movieIndex].plataformas = plataformas;

    // Return the updated movie
    res.status(200).json(movies[movieIndex]);
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao editar o filme' });
  }
};