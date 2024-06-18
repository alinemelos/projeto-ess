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

    test('Adicionar plataforma já existente', ({ given, when, and, then }) => {
        let filme_id;
        let errorMessage;
        
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
            } catch (error) {
                expect(error.response.status).toBe(400);
                expect(error.response.data).toEqual({
                    "error": "Platform already exists"
                });
            }
        });
    
        then('Eu vejo uma mensagem de erro', () => {
            // Simulação de visualizar a mensagem de erro
        });
    });

    test('Remover plataforma', ({ given, when, and, then }) => {
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

        when(/^Eu pressiono o botão "(.*)" da plataforma "(.*)"$/, (arg0, arg2) => {
            // Simulação do clique no botão
        });

        then(/^A plataforma "(.*)" é removida$/, async (nomePlataforma) => {
            try {
                // Fazendo a requisição DELETE
                const platform_test = {
                    filme_id: filme_id,
                    nome: nomePlataforma
                };
                const response = await axios.delete('http://localhost:3000/platform', { data: platform_test });
                expect(response.status).toBe(200);
            } catch (error) {
                console.error(error.message);
            }
        });

       and(/^Eu não vejo a plataforma "(.*)" na lista de plataformas disponíveis$/, async (nomePlataforma) => {
            try {
                // Fazendo a requisição GET para obter as plataformas do filme
                const response = await axios.get('http://localhost:3000/');
                // Armazenando o filme_id do filme especificado
                const filme = response.data.find((filme) => filme.filme_id === filme_id);
                // Verificando se a plataforma foi removida
                const plataforma = filme.plataformas.some((platform) => platform.nome === nomePlataforma);
                expect(plataforma).toBe(false);
            } catch (error) {
                console.error('Erro ao buscar plataformas:', error.message);
            }
        });
    });

    test('Adicionar plataforma sem preencher todos os campos', ({ given, when, and, then }) => {
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

        and(/^Eu preencho "(.*)" no campo "(.*)", "(.*)" no campo "(.*)" e clico em "(.*)"$/, async (url, arg1, img, arg3, arg5) => {
            try {
                // Fazendo a requisição POST
                const platform_test = {
                    filme_id: filme_id,
                    url: url,
                    img: img
                };
                const response = await axios.post('http://localhost:3000/platform', platform_test);
            } catch (error) {
                expect(error.response.status).toBe(400);
                expect(error.response.data).toEqual({
                    "error": "All fields (filme_id, nome, url, image) are required."
                });
            }
        });

        then('Eu vejo uma mensagem de erro', () => {
            // Simulação de visualizar a mensagem de erro
        });
    });

});
