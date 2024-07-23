const Movie = require('../models/movies');
const movies = require('../db/db');
const { v5: uuidv5 } = require('uuid');

const MY_NAMESPACE = 'd7b4380e-75f9-4b83-a67b-867540268a50';

exports.addMovie = (req, res) => {
  try {
    const { poster, nome, ano, duracao, sinopse, diretor, genero } = req.body;
    //Ainda existe algum problema com esse iiud5 que não sei o que é
    key = nome + ano + duracao + genero;
    filme_id = uuidv5(key, MY_NAMESPACE);

    const existingID = movies.find((movie) => movie.filme_id === filme_id);

    if (existingID) {
      return res.status(200).json({ filme_id: existingID.filme_id });
    }

    if (!poster) {
      return res.status(400).json({ error: "O poster não foi adicionado" });
    }
    if (!nome) {
      return res.status(400).json({ error: "O campo nome não foi preenchido" });
    }
    if (!ano) {
      return res.status(400).json({ error: "O campo ano não foi preenchido" });
    }
    if (!duracao) {
      return res
        .status(400)
        .json({ error: "O campo duração não foi preenchido" });
    }
    if (!sinopse) {
      return res
        .status(400)
        .json({ error: "O campo sinopse não foi preenchido" });
    }
    if (!diretor) {
      return res
        .status(400)
        .json({ error: "O campo diretor não foi preenchido" });
    }
    if (!genero) {
      return res
        .status(400)
        .json({ error: "O campo genero não foi preenchido" });
    }

    const newMovie = new Movie(
      filme_id,
      poster,
      nome,
      ano,
      duracao,
      sinopse,
      diretor,
      genero
    );

    movies.push(newMovie);
    res.status(201).json({ filme_id: newMovie.filme_id });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao adicionar o filme" });
  }
};

