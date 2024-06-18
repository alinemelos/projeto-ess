const { defineFeature, loadFeature } = require('jest-cucumber');
const axios = require('axios');
const content_feature = loadFeature('./tests/features/content.feature');


defineFeature(content_feature, (test) => {
    test('Cadastro de Filme', ({ given, when, and, then }) => {
        let filme_id;
        given(/^Estou na página "(.*)" e quero adicionar um filme$/, (arg0) => {

        });

        when(/^Eu pressiono o botão "(.*)"$/, (arg0) => {

        });

        and(/^Preencho as informações "(.*)", "(.*)", "(.*)", "(.*)", "(.*)" e "(.*)" com os dados "(.*)", "(.*)", "(.*)", "(.*)", "(.*)" e "(.*)" respectivamente$/, async (arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11) => {
            const content_test = {
                "nome": arg6,
                "ano": arg7,
                "duracao": arg8,
                "genero": arg9,
                "sinopse": arg10,
                "poster": arg11
            };
            console.log("...................AQUI..................");
            const response = await axios.post('http://localhost:3000/movie', content_test);
            filme_id = response.data.filme_id;
            console.log(filme_id);
            

        });

        then(/^Aparece uma mensagem de confirmação "(.*)" e posso ver o filme na "(.*)".$/, async(arg0, arg1) => {
            const response = await axios.get('http://localhost:3000');
            const filme = response.data.find(filme => filme.filme_id === filme_id);


            expect(filme).toEqual(expect.objectContaining({ 
                "nome": "Barbie",
                "ano": "2023",
                "duracao": "1h54m",
                "genero":  "2",
                "sinopse": "Barbie parte para o mundo humano em busca da verdadeira felicidade.",
                "poster": "https://image.tmdb.org/t/p/original/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
            }));
        });
    });
});