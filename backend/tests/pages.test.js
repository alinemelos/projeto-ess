const { defineFeature, loadFeature } = require('jest-cucumber');
const axios = require('axios');
const post_feature = loadFeature('./tests/features/pages.feature');

defineFeature(post_feature, test => {
    test('Visualização da Sinopse do Filme', ({ given, and, when, then }) => {
        given(/^que existe o filme "(.*)" e o mesmo está cadastrado$/, (arg0) => {

        });

        and('o usuário acessa o post do filme por meio da barra de busca ou da tela inicial', () => {

        });

        when('usuário está no post do filme', () => {

        });

        and('ele acessa a página ao clicar no post,', () => {

        });

        then(/^ele verá a sinopse do filme localizada na primeira parte da página "(.*)", logo abaixo do título do filme: "(.*)" e informações básicas como o gênero: "(.*)", duração: "(.*)" e ano de lançamento: "(.*)"$/, (arg0, arg1, arg2, arg3, arg4) => {

        });
    });

    test('Visualização de Resenhas e Notas na Página do Filme', ({ given, when, then }) => {
        given('que o usuário está na página do filme “Eduardo e Mônica”,', () => {

        });

        when('ele rola a página para a seção de resenhas de usuários,', () => {

        });

        then('ele verá uma lista de resenhas escritas por outros usuários, com cada resenha mostrando o nome do autor, a data da publicação, a nota atribuída e o texto da resenha.', () => {

        });
    });

    test('Feedback e Avaliação de Resenhas - curtir', ({ given, and, when, then }) => {
        given('que o usuário está na página do filme “Eduardo e Mônica”,', () => {

        });

        and(/^existe uma resenha do usuário “Ellian” com o número de curtidas “(\d+)”$/, (arg0) => {

        });

        and('o usuário ainda não curtiu a resenha em questão', () => {

        });

        when('ele decide interagir com essa resenha, clicando em curtir,', () => {

        });

        then(/^o sistema atualizará o número de curtidas em tempo real na resenha correspondente do valor “(\d+)” para “(\d+)”$/, (arg0, arg1) => {

        });
    });
})