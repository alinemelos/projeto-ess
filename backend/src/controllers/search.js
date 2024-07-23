const movies = require('../db/db');

exports.search = (req, res) => {
  try {

    let { busca } = req.body;

    busca = busca.toLowerCase();

    if (!busca) {
      return res.status(400).json(
            { error: 'Bad request' }
        );
    }

    // Find the movies that match search terms
    const search_results = movies.filter( m =>
            m.nome.toLowerCase().includes(busca) ||
            m.genero.toLowerCase().includes(busca)
        );

    if (!search_results) {
      return res.status(404).json(
            { error: 'Nothing matches search terms' }
        );
    }

    // return search_results;
    res.status(200).json(search_results);

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
