Feature: Content
    As a: administrador do site  
    I want to gerenciar a mídia do site 
    So that os usuários possam compartilhar reviews

Scenario: Cadastro de Filme
Given Estou logado no usuário "Administrador"
And Estou na página "Feed" e quero adicionar o filme "Barbie"
When Eu pressiono o botão "adicionar mídia"
And Preencho as informações "Título", "Ano", "Duração", "Gênero" e "Sinopse" com os dados "Barbie", "2023", "1h54m", "Comédia" e "Barbie parte para o mundo humano em busca da verdadeira felicidade." respectivamente
Then Aparece uma mensagem de confirmação e o filme é adicionado com sucesso.

