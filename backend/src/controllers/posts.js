const Post = require('../models/post');
const movies = require('../db/db');

exports.createPost = (req, res) => {
  try {
    const { user_id, filme_id, nota, review, comments } = req.body;
    const newPost = new Post(user_id, filme_id, nota, review, comments);
    if (!newPost.validateNota()) {
      return res.status(400).json({ error: 'Nota must be between 0 and 5.' });
    }

    // Find the movie by filme_id
    const movie = movies.find(m => m.filme_id === filme_id);
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    // Add the new post to the movie's posts array
    movie.posts.push(newPost);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
