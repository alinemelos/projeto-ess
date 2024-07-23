const { defineFeature, loadFeature } = require('jest-cucumber');
const axios = require('axios');
const comment_feature = loadFeature('./tests/features/availability.feature');

defineFeature(comment_feature, test => {
    test('Tentar adicionar filme com todos os campos preenchidos', ({ given, when, and, then }) => {
        let filme_id;
        
        given(/^o banco de dados requisita os campos "nome", "url", e "img"$/, () => {
        });

        and(/^o filme "(.*)" já está cadastrado$/, async (filmeNome) => {
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

        when(/^o usuário admnistrador envia uma requisição "(.*)" para a rota "(.*)" com nome "(.*)", url "(.*)" e img "(.*)"$/, async (arg0, arg1, nome, url, image) => {
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

        then('o status da resposta deve ser 201', () => {
        });
    });


    test('Tentar adicionar plataforma já existente', ({ given, when, and, then }) => {
        let filme_id;
        let errorMessage;
        
        given(/^o banco de dados requisita os campos "nome", "url", e "img"$/, () => {
        });

        and(/^o filme "(.*)" já está cadastrado$/, async (filmeNome) => {
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

        and(/^a plataforma "(.*)" já está cadastrada$/, (arg0) => {
        });

        and(/^o usuário admnistrador envia uma requisição "(.*)" para a rota "(.*)" com nome "(.*)", url "(.*)" e img "(.*)"$/, async (arg0, arg1, nome, url, image) => {
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
    
        then('o status da resposta deve ser 400', () => {
            // Simulação de visualizar a mensagem de erro
        });
    });

    test('Tentar remover plataforma', ({ given, when, and, then }) => {
        let filme_id;
        
        given(/^o filme "(.*)" já está cadastrado no banco de dados$/, async (filmeNome) => {
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

        and(/^possui a plataforma "(.*)"$/, async (nomePlataforma) => {
            try {
                // Fazendo a requisição GET para obter as plataformas do filme
                const response = await axios.get('http://localhost:3000/');
                // Armazenando o filme_id do filme especificado
                const filme = response.data.find((filme) => filme.filme_id === filme_id);
                // Verificando se a plataforma existe
                const plataforma = filme.plataformas.some((platform) => platform.nome === nomePlataforma);
                expect(plataforma).toBe(true);
            } catch (error) {
                console.error('Erro ao buscar plataformas:', error.message);
            }
        });


        then(/^o usuário admnistrador envia uma requisição "(.*)" para a rota "(.*)" com nome "(.*)"$/, async (nomePlataforma) => {
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

       and(/^o status da resposta deve ser 200 e plataforma "(.*)" não deve estar mais cadastrada no filme "(.*)"$/, async (nomePlataforma) => {
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

    test('Tentar adicionar plataforma sem preencher todos os campos', ({ given, when, and, then }) => {
        let filme_id;

        given(/^o banco de dados requisita os campos "nome", "url", e "img"$/, () => {
        });
        
        and(/^o filme "(.*)" já está cadastrado$/, async (filmeNome) => {
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

        and(/^o usuário admnistrador envia uma requisição "(.*)" para a rota "(.*)" com url "(.*)" e img "(.*)"$/, async (arg0, arg1, url, img) => {
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

        then('o status da resposta deve ser 400', () => {
        });
    });

});
