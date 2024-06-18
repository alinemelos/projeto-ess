Feature: Content
    As a: administrador do site  
    I want to gerenciar a mídia do site 
    So that os usuários possam compartilhar reviews

Scenario: Cadastro de Filme
Given Estou na página "Feed" e quero adicionar um filme
When Eu pressiono o botão "adicionar mídia"
And Preencho as informações "nome", "ano", "duracao", "genero", "sinopse" e "poster" com os dados "Barbie", "2023", "1h54m", "2", "Barbie parte para o mundo humano em busca da verdadeira felicidade." e "https://image.tmdb.org/t/p/original/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg" respectivamente
Then Aparece uma mensagem de confirmação "Filme adicionado com sucesso" e posso ver o filme na "Lista de filmes".

