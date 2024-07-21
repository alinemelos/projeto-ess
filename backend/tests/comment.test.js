const { defineFeature, loadFeature } = require('jest-cucumber');
const axios = require('axios');
const comment_feature = loadFeature('./tests/features/comment.feature');

function findCommentById(comments, commentId, user_id) {

    for (let i = 0; i < comments.length; i++) {
        const comment = comments[i];
        if (comment.comment_id === commentId) {
            return comment;
        } else if (comment.comments.length > 0) {
            const foundComment = findCommentById(comment.comments, commentId, user_id);
            if (foundComment) {
                return foundComment;
            }
        }
    }
    return null; // Retorna null se não encontrar o comentário
}

// Função de busca de comentários em reviews
function findById(movies, id, user_id = Infinity) {
    if (id.length == 35) {
        // Procurar em comentários
            for (const filme of movies) {
                if (filme.posts){
                    for (const post of filme.posts) {
                        const foundComment = findCommentById(post.comments, id, user_id);
                        if (foundComment) {
                            return foundComment;
                        }
                    }
                }
            }
    } else {
        // Procurar em posts
        for (const filme of movies) {
            for (let i = 0; i < filme.posts.length; i++) {
                const post = filme.posts[i];
                if (post.post_id === id) {
                    return post;
                }
            }
        }
    }
    return null; // Retorna null se não encontrar o post ou comentário
}


defineFeature(comment_feature, test => {
    test('Criar um comentário', ({ given, and, then }) => {
        let filme_data;
        let post_id;
        let comment_test;
        let response;

        given(/^Execute um get na rota "(.*)" armazenando o id do filme "(.*)"$/, async (arg0, arg1) => {
            // Fazendo a requisição GET
            response = await axios.get(arg0);
            // Armazenando o filme_id do filme especificado
            filme_data = response.data.find((filme) => filme.nome === arg1);
        });

        and(/^execute um post na rota "(.*)" com o post_id do "(.*)"º review, user_id "(.*)" e comentário "(.*)"$/, async (arg0, arg1, arg2, arg3) => {
            post_id = filme_data.posts[Number(arg1)].post_id;

            comment_test = {
                "user_id": arg2,
                "response_id": post_id,
                "comment": arg3,
            };

            // Fazendo a requisição POST
            response = await axios.post(arg0, comment_test);
        });

        and(/^verifique se o status code é (.*) e armazene o comentário$/, (arg0) => {
            // Verificando se o status code é 201
            expect(response.status).toBe(Number(arg0));
            comment_test = response.data.comment_id;
        });

        then(/^execute um get na rota "(.*)" e verifique o comentário com o comment_id de retorno existe.$/, async (arg0) => {
            // Fazendo a requisição GET)
            const response = await axios.get(arg0);

            // Verificando se o comentário foi criado
            expect(response.data.some((comment) => comment.comment_id === comment_test.comment_id)).toBe(true);
        });
    })

    test('Atualizar um comentário', ({ given, when, and, then }) => {
        let filme_data;
        let post_id;
        let comment_test;
        let comment_final;
        let response;

        given(/^Execute um get na rota "(.*)" armazenando o id do filme "(.*)"$/, async (arg0, arg1) => {
            // Fazendo a requisição GET
            response = await axios.get(arg0);
            // Armazenando o filme_id do filme especificado
            filme_data = response.data.find((filme) => filme.nome === arg1);
        });

        and(/^execute um post na rota "(.*)" com o post_id do "(.*)"º review, user_id "(.*)" e comentário "(.*)"$/, async (arg0, arg1, arg2, arg3) => {
            post_id = filme_data.posts[Number(arg1)].post_id;

            comment_test = {
                "user_id": arg2,
                "response_id": post_id,
                "comment": arg3,
            };

            // Fazendo a requisição POST
            response = await axios.post(arg0, comment_test);
            console.log("response: ", response.data)
        });

        when(/^execute um put na rota "(.*)" user_id "(.*)" e comentário "(.*)"$/, async (arg0, arg1, arg2) => {
            
            comment_test = {
                "user_id": arg1,
                "comment_id": response.data.comment_id,
                "comment": arg2
            }
            console.log(comment_test)
            comment_final = await axios.put(arg0, comment_test);
        })

        then(/^execute um get na rota "(.*)" e verifique se o comentário contém "(.*)"$/, async (arg0, arg1) => {
            // Fazendo a requisição GET
            const response = await axios.get(arg0);
            // Verificando se o comentário foi atualizado
            let comment = findById(response.data, comment_final.data.comment_id);

            expect(comment.comment === arg1).toBe(true);
        })
    })

    test('Apagar um comentário', ({ given, when, and, then }) => {
        let filme_data;
        let post_id;
        let comment_test;
        let comment_id;
        let response;

        given(/^Execute um get na rota "(.*)" armazenando o id do filme "(.*)"$/, async (arg0, arg1) => {
            // Fazendo a requisição GET
            response = await axios.get(arg0);
            // Armazenando o filme_id do filme especificado
            filme_data = response.data.find((filme) => filme.nome === arg1);
        });

        and(/^execute um post na rota "(.*)" com o post_id do "(.*)"º review, user_id "(.*)" e comentário "(.*)"$/, async (arg0, arg1, arg2, arg3) => {
            post_id = filme_data.posts[Number(arg1)].post_id;

            comment_test = {
                "user_id": arg2,
                "response_id": post_id,
                "comment": arg3,
            };

            // Fazendo a requisição POST
            response = await axios.post(arg0, comment_test);
        });

        when(/^execute um DELETE na rota "(.*)" user_id "(.*)" e o comment id do comentário publicado$/, async (arg0, arg1) => {
            // Fazendo a requisição DELETE
            
            const delete_req = {
                "user_id": arg1,
                "response_id": response.data.comment_id
            }

            await axios.delete(arg0, {data: delete_req});
        });

        then(/^Executa um GET na rota "(.*)" para verificar se o comentário foi apagado.$/, async (arg0) => {
            // Fazendo a requisição GET
            const req = await axios.get(arg0);
            // Verificando se o comentário foi excluído
            let res = findById(req.data, response.data.comment_id);
            expect(res === null).toBe(true);
        })
    })

    test('Falha ao criar um comentário vazio', ({ given, when, and, then }) => {
        let filme_data;
        let post_id;
        let comment_test;
        let erro;

        given(/^Execute um get na rota "(.*)" armazenando o id do filme "(.*)"$/, async (arg0, arg1) => {
            // Fazendo a requisição GET
            response = await axios.get(arg0);
            // Armazenando o filme_id do filme especificado
            filme_data = response.data.find((filme) => filme.nome === arg1);
        });

        and(/^execute um post na rota "(.*)" com o post_id do "(.*)"º review, user_id "(.*)" e comentário "(.*)"$/, async (arg0, arg1, arg2, arg3) => {
            post_id = filme_data.posts[Number(arg1)].post_id;

            comment_test = {
                "user_id": arg2,
                "response_id": post_id,
                "comment": arg3,
            };

            // Fazendo a requisição POST
            try{
                response = await axios.post(arg0, comment_test);
            }
            catch (error){
                erro = error.response.data['error']
            }
        });

        then(/^Uma mensagem de erro "(.*)" deve ser exibida$/, async (arg0) => {
            expect(erro).toBe(arg0);
        })
    })

    test('Criar um comentário de comentário', ({ given, when, and, then }) => {
        let filme_data;
        let post_id;
        let comment_test;
        let comment_id;
        let response;

        given(/^Execute um get na rota "(.*)" armazenando o id do filme "(.*)"$/, async (arg0, arg1) => {
            // Fazendo a requisição GET
            response = await axios.get(arg0);
            // Armazenando o filme_id do filme especificado
            filme_data = response.data.find((filme) => filme.nome === arg1);
        });

        and(/^execute um post na rota "(.*)" com o post_id do "(.*)"º review, user_id "(.*)" e comentário "(.*)"$/, async (arg0, arg1, arg2, arg3) => {
            post_id = filme_data.posts[Number(arg1)].post_id;

            comment_test = {
                "user_id": arg2,
                "response_id": post_id,
                "comment": arg3,
            };

            // Fazendo a requisição POST
            response = await axios.post(arg0, comment_test);
        });

        when(/^execute um post na rota "(.*)" com o post_id do comentário anterior, user_id "(.*)" e comentário "(.*)"$/, async (arg0, arg1, arg2) => {
            comment_test = {
                "user_id": arg1,
                "response_id": response.data.comment_id,
                "comment": arg2,
            };
            response = await axios.post(arg0, comment_test);
        });

        then(/^Executa um GET na rota "(.*)" para verificar se o comentário "(.*)" do user_id "(.*)" foi adicionado$/, async (arg0, arg1, arg2) => {
            // Fazendo a requisição GET)
            const req = await axios.get(arg0);
            
            comment_test = findById(req.data, response.data.comment_id);
            // Verificando se o comentário foi criado
            expect(comment_test.comment === arg1).toBe(true);
        });
    })

    test('Erro ao apagar um comentário de outro usuário', ({ given, when, and, then }) => {
        let filme_data;
        let post_id;
        let comment_test;
        let comment_id;
        let erro;

        given(/^Execute um get na rota "(.*)" armazenando o id do filme "(.*)"$/, async (arg0, arg1) => {
            // Fazendo a requisição GET
            response = await axios.get(arg0);
            // Armazenando o filme_id do filme especificado
            filme_data = response.data.find((filme) => filme.nome === arg1);
        });

        and(/^execute um post na rota "(.*)" com o post_id do "(.*)"º review, user_id "(.*)" e comentário "(.*)"$/, async (arg0, arg1, arg2, arg3) => {
            post_id = filme_data.posts[Number(arg1)].post_id;

            comment_test = {
                "user_id": arg2,
                "response_id": post_id,
                "comment": arg3,
            };

            // Fazendo a requisição POST
            response = await axios.post(arg0, comment_test);
        });

        when(/^execute um DELETE na rota "(.*)" user_id "(.*)" e o comment id do comentário publicado$/, async (arg0, arg1) => {
            // Fazendo a requisição DELETE
            
            const delete_req = {
                "user_id": arg1,
                "response_id": response.data.comment_id
            }
            
            try{
                await axios.delete(arg0, {data: delete_req});
            }
            catch (error){
                erro = error.response.data['error']
            }
        });

        then(/^deve ser retornado a mensagem de erro "(.*)"$/, async (arg0) => {
            expect(erro).toBe(arg0);
        })
    })
})