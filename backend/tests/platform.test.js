const { defineFeature, loadFeature } = require('jest-cucumber');
const axios = require('axios');
const comment_feature = loadFeature('./tests/features/availability.feature');

defineFeature(comment_feature, test => {
    test('Adicionar plataforma', ({ given, when, and, then }) => {
        let filme_id;
        
        given(/^Eu estou na página do filme "(.*)"$/, async (filmeNome) => {
            try {
                // Fazendo a requisição GET
                const response = await axios.get('http://localhost:3000/');
                // Armazenando o filme_id do filme especificado
                const filme = response.data.find((filme) => filme.nome === filmeNome);
                if (filme) {
                    filme_id = filme.filme_id;
                } else {
                    throw new Error(`Filme "${filmeNome}" não encontrado.`);
                }
            } catch (error) {
                console.error(error.message);
            }
        });

        when(/^Eu pressiono o botão "(.*)"$/, (arg0) => {
            // Simulação do clique no botão
        });

        and(/^Eu visualizo um "(.*)" na tela$/, (arg0) => {
            // Simulação de visualizar o formulário na tela
        });

        and(/^Eu preencho "(.*)" no campo "(.*)", "(.*)" no campo "(.*)", "(.*)" no campo "(.*)" e clico em"(.*)"$/, async (nome, arg1, url, arg3, image, arg5, arg6) => {
            try {
                // Fazendo a requisição POST
                const platform_test = {
                    filme_id: filme_id,
                    nome: nome,
                    url: url,
                    image: image
                };
                const response = await axios.post('http://localhost:3000/platform', platform_test);
                expect(response.status).toBe(201);
            } catch (error) {
                console.error(error.message);
            }
        });

        then('O formulário é fechado', () => {
            // Simulação de fechar o formulário
        });

        and(/^Eu posso ver a plataforma "(.*)" na lista de plataformas disponíveis$/, async (nomePlataforma) => {
            try {
                // Fazendo a requisição GET para obter as plataformas do filme
                const response = await axios.get('http://localhost:3000/');
                // Armazenando o filme_id do filme especificado
                const filme = response.data.find((filme) => filme.filme_id === filme_id);
                // Verificando se a plataforma foi adicionada
                const plataforma = filme.plataformas.some((platform) => platform.nome === nomePlataforma);
                expect(plataforma).toBe(true);
            } catch (error) {
                console.error('Erro ao buscar plataformas:', error.message);
            }
        });
    });
});
