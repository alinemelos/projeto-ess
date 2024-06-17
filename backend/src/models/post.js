const { v4: uuidv4 } = require('uuid');

class Post {
    constructor(user_id, filme_id, nota, review = []) {
        this.post_id = uuidv4(); // Gerar automaticamente um UUID
        this.user_id = user_id;
        this.filme_id = filme_id;
        this.nota = nota;
        this.review = review;
        this.comments = [];
    }

    validateNota() {
        return this.nota >= 0 && this.nota <= 5;
    }
}

module.exports = Post;
