const movies = require('../db/db');

exports.get = (req, res) => {
  res.json(movies);
};
