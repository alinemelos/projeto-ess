const { defineFeature, loadFeature } = require('jest-cucumber');
const axios = require('axios');
const post_feature = loadFeature('./tests/features/post.feature');

defineFeature(post_feature, test => {
    test('Criar um review.', ({ given, when, and, then }) => {
        let filme_id;
        let post_id;

        given(/^Eu Estou na página do filme "(.*)"$/, async (arg0) => {
            // Fazendo a requisição GET
            const response = await axios.get('http://localhost:3000/');
            // Armazenando o filme_id do filme especificado
            filme_id = response.data.find((filme) => filme.nome === arg0).filme_id;
        });

        when(/^Eu clico no botão "(.*)"$/, (arg0) => {

        });

        and(/^Um "(.*)" abre na minha tela$/, (arg0) => {

        });

        and(/^Eu preencho "(.*)" no campo "(.*)", "(.*)" no campo nota e clico em "(.*)"$/, async (arg0, arg1, arg2, arg3) => {
            // Fazendo a requisição POST
            const post_test = {
                "user_id": 1337,
                "filme_id": filme_id, // Usando o filme_id armazenado anteriormente
                "nota": Number(arg2),
                "review": arg0
            };

            const response = await axios.post('http://localhost:3000/posts', post_test);
            post_id = response.data.post_id;  // Armazenando o id do post criado
        });

        then(/^O "(.*)" fecha$/, (arg0) => {

        });

        and(/^Eu posso ver meu review no topo do "(.*)"$/, async (arg0) => {
            // Fazendo a requisição GET
            const response = await axios.get('http://localhost:3000/');
            // Busca o filme e o post específicos
            const filme = response.data.find((filme) => filme.filme_id === filme_id);
            const post = filme.posts.find((post) => post.post_id === post_id);
            // Verificando se o post é igual ao post criado
            expect(post).toEqual(expect.objectContaining({ 
                "user_id": 1337,
                "filme_id": filme_id,
                "nota": 5,
                "review": "Filme muito bom",
            }));
        });
    });

    test('Falha criação de review sem nota.', ({ given, when, and, then }) => {
        let filme_id;

        given(/^Eu Estou na página do filme "(.*)"$/, async (arg0) => {
            // Fazendo a requisição GET
            const response = await axios.get('http://localhost:3000/');
            // Armazenando o filme_id do filme especificado
            filme_id = response.data.find((filme) => filme.nome === arg0).filme_id;
        });

        when(/^Eu clico no botão "(.*)"$/, (arg0) => {

        });

        and(/^Um "(.*)" abre na minha tela$/, (arg0) => {

        });

        and(/^eu preencho "(.*)" no campo "(.*)" e clico no botão "(.*)"$/, async (arg0, arg1, arg2) => {
            // Fazendo a requisição POST
            const post_test = {
                "user_id": 1338,
                "filme_id": filme_id, // Usando o filme_id armazenado anteriormente
                "review": arg0
            };
        
            try {
                const postResponse = await axios.post('http://localhost:3000/posts', post_test);
            } catch (error) {
                expect(error.response.status).toBe(400);
                expect(error.response.data).toEqual({
                    "error": "Nota is required."
                });
            }
        });

        then(/^Uma "(.*)" escrita "(.*)" surge ao lado do botão "(.*)"$/, (arg0, arg1, arg2) => {

        });

        and(/^Um asterisco vermelho surge ao lado do campo "(.*)"$/, (arg0) => {

        });
    });

    test('Atualizar um review.', ({ given, and, when, then }) => {
        let filme_id;
        let post_id;

        given(/^Eu estou na página do filme "(.*)"$/, async (arg0) => {
            // Fazendo a requisição GET
            const response = await axios.get('http://localhost:3000/');
            // Armazenando o filme_id do filme especificado
            filme_id = response.data.find((filme) => filme.nome === arg0).filme_id;
        });

        and(/^Eu já publiquei um review com o texto "(.*)" e nota "(.*)"$/, async (arg0, arg1) => {
            // Fazendo a requisição POST para criar um review
            const post_test = {
                "user_id": 1336,
                "filme_id": filme_id,
                "nota": Number(arg1),
                "review": arg0
            };

            const postResponse = await axios.post('http://localhost:3000/posts', post_test);
            // Armazenando o id do review criado
            post_id = postResponse.data.post_id;
        });

        when(/^Eu clico no botão "(.*)" no meu review$/, (arg0) => {

        });

        and(/^Um "(.*)" abre na minha tela$/, (arg0) => {

        });

        and(/^Eu altero o texto para "(.*)" e a nota para "(.*)" e clico em "(.*)"$/, async (arg0, arg1, arg2) => {
            const data = {
                post_id: post_id,
                user_id: 1336,
                filme_id: filme_id,
                nota: Number(arg1),
                review: arg0
            };
            await axios.put("http://localhost:3000/posts", data);
        });

        then(/^O "(.*)" fecha$/, (arg0) => {

        });

        and(/^Eu posso ver meu review atualizado com o texto "(.*)" e nota "(.*)" no topo do "(.*)"$/, async (arg0, arg1, arg2) => {
            // Fazendo a requisição GET para buscar o filme e o post específicos
            const response = await axios.get('http://localhost:3000/');
            const filme = response.data.find((filme) => filme.filme_id === filme_id);
            const post = filme.posts.find((post) => post.post_id === post_id);

            // Verificando se o campo review e nota foram atualizados corretamente
            expect(post.review).toEqual(arg0);
            expect(post.nota).toEqual(Number(arg1));
        });
    });


    test('Criação de um review sem a descricao.', ({ given, when, and, then }) => {
        let filme_id;

        given(/^Eu Estou na página do filme "(.*)"$/, async (arg0) => {
             // Fazendo a requisição GET
             const response = await axios.get('http://localhost:3000/');
             // Armazenando o filme_id do primeiro item do array retornado
             filme_id = response.data[0].filme_id;
        });

        when(/^Eu clico no botão "(.*)"$/, (arg0) => {

        });

        and(/^Um "(.*)" abre na minha tela$/, (arg0) => {

        });

        and(/^eu preencho "(.*)" no campo "(.*)" e clico no botão "(.*)"$/, async (arg0, arg1, arg2) => {
            // Fazendo a requisição POST
            const post_test = {
                "user_id": 1338,
                "filme_id": filme_id, // Usando o filme_id armazenado anteriormente
                "nota": Number(arg0),
                "review": ""
            };

            const postResponse = await axios.post('http://localhost:3000/posts', post_test);
        });

        then(/^O "(.*)" fecha$/, (arg0) => {

        });

        and(/^Eu posso ver meu review no topo do "(.*)"$/, async (arg0) => {
            // Fazendo a requisição GET
            const new_response = await axios.get('http://localhost:3000/');
            // Armazenando o filme_id do ultimo item do array retornado
            post_result = new_response.data[0].posts[new_response.data[0].posts.length - 1];
            // Verificando se o post é igual ao post criado
            expect(post_result).toEqual(expect.objectContaining({ 
                "user_id": 1338,
                "filme_id": filme_id,
                "nota": 5,
                "review": "",
                "comments": []
            }));
        });
    });

    test('Falha na criação de um post não clicou no botão de submeter', ({ given, when, and, then }) => {
        given(/^Eu Estou na página do filme "(.*)"$/, (arg0) => {

        });

        when(/^Eu clico no botão "(.*)"$/, (arg0) => {

        });

        and(/^Um "(.*)" abre na minha tela$/, (arg0) => {

        });

        and(/^Eu preencho "(.*)" no campo "(.*)", "(.*)" no campo nota e clico no "(.*)" para fechar$/, (arg0, arg1, arg2, arg3) => {

        });

        then(/^O "(.*)" fecha$/, (arg0) => {

        });

        and(/^Não existe um review feito por mim no topo do "(.*)"$/, (arg0) => {

        });
    });


    test('Falha na criação de um post clicou no botão de submeter sem preencher os campos', ({ given, when, and, then }) => {
        given(/^Eu Estou na página do filme "(.*)"$/, (arg0) => {

        });

        when(/^Eu clico no botão "(.*)"$/, (arg0) => {

        });

        and(/^Um "(.*)" abre na minha tela$/, (arg0) => {

        });

        and(/^Eu clico no botão "(.*)"$/, (arg0) => {

        });

        then(/^Uma "(.*)" escrita "(.*)" surge ao lado do botão "(.*)"$/, (arg0, arg1, arg2) => {

        });

        and(/^Um asterisco vermelho surge ao lado do campo "(.*)"$/, (arg0) => {

        });
    });

    test('Apagar um review.', ({ given, when, and, then }) => {
        let filme_id;
        let post_id;

        given(/^Eu estou na página do filme "(.*)"$/, async (arg0) => {
            // Fazendo a requisição GET
            const response = await axios.get('http://localhost:3000/');
            // Armazenando o filme_id do filme especificado
            filme_id = response.data.find((filme) => filme.nome === arg0).filme_id;
        });

        and(/^Eu já publiquei um review com o texto "(.*)" e nota "(.*)"$/, async (arg0, arg1) => {
            // Fazendo a requisição POST para criar um review
            const post_test = {
                "user_id": 1339,
                "filme_id": filme_id,
                "nota": Number(arg1),
                "review": arg0
            };

            const postResponse = await axios.post('http://localhost:3000/posts', post_test);
            // Armazenando o id do review criado
            post_id = postResponse.data.post_id;
        });

        when(/^Eu clico no botão "(.*)" no meu review$/, async (arg0) => {
            const data = {
                post_id: post_id,
                user_id: 1339,
                filme_id: filme_id
            };
            await axios.delete('http://localhost:3000/posts', { data });
        });

        then(/^Meu review é removido do "(.*)"$/, async (arg0) => {

        });

        and(/^Eu não posso mais ver meu review no "(.*)"$/, async (arg0) => {
            // Fazendo a requisição GET para verificar se o review foi removido
            const response = await axios.get('http://localhost:3000/');
            const filme = response.data.find((filme) => filme.filme_id === filme_id);
            // Verificando se o review não está mais presente no filme
            expect(filme.posts.some((post) => post.post_id === post_id)).toBe(false);
        });
    });
});