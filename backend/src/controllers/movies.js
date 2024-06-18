const Movie = require('../models/movies');
const movies = require('../db/db');

exports.addMovie = (req, res) => {
  try {
    const { nome, ano, duracao, genero, sinopse, poster } = req.body;

    if (!nome) {
      return res.status(400).json({ error: 'O nome não foi preenchido' });
    }
    if (!ano) {
      return res.status(400).json({ error: 'O ano não foi preenchido' });
    }
    if (!duracao) {
      return res.status(400).json({ error: 'A duração não foi preenchida' });
    }
    if (!genero) {
      return res.status(400).json({ error: 'O genero não foi preenchido' });
    }
    if (!sinopse) {
      return res.status(400).json({ error: 'A sinopse não foi preenchida' });
    }
    if (!poster) {
      return res.status(400).json({ error: 'O poster não foi adicionado' });
    }

    const existingNome = movies.find(movie => movie.nome === nome);
    const existingPoster = movies.find(movie => movie.poster === poster);
    if (existingNome || existingPoster) {
      return res.status(409).json({ error: 'Um filme com esse nome ou poster já existe' });
    }
    
    const newMovie = new Movie(nome, ano, duracao, genero, sinopse, poster);

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
    
    const movieIndex = movies.findIndex(movie => movie.filme_id === filme_id);

    if (movieIndex === -1) {
      return res.status(404).json({ error: 'Filme não encontrado' });
    }

    movies.splice(movieIndex, 1);
    
    res.status(200).json({ message: 'Filme removido com sucesso' });
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao remover o filme' });
  }
};


exports.editMovie = (req, res) => {
  try {
    const { filme_id, nome, ano, duracao, genero, sinopse, poster, plataformas } = req.body;

    const movieIndex = movies.findIndex(movie => movie.filme_id === filme_id);

    if (movieIndex === -1) {
      return res.status(404).json({ error: 'Filme não encontrado' });
    }

    if (!nome && !ano && !duracao && !genero && !sinopse && !poster && !plataformas) {
      return res.status(400).json({ error: 'Nenhum campo para atualizar' });
    }

    if (nome) movies[movieIndex].nome = nome;
    if (ano) movies[movieIndex].ano = ano;
    if (duracao) movies[movieIndex].duracao = duracao;
    if (genero) movies[movieIndex].genero = genero;
    if (sinopse) movies[movieIndex].sinopse = sinopse;
    if (poster) movies[movieIndex].poster = poster;
    if (plataformas) movies[movieIndex].plataformas = plataformas;

    res.status(200).json(movies[movieIndex]);
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao editar o filme' });
  }
};