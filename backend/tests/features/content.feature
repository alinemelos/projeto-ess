Feature: Content
    As a: administrador do site  
    I want to gerenciar a mídia do site 
    So that os usuários possam compartilhar reviews

Scenario: Cadastro de Filme
    Given Estou na página "Feed" e quero adicionar um filme
    When Eu pressiono o botão "adicionar mídia"
    And Preencho as informações "nome", "ano", "duracao", "genero", "sinopse" e "poster" com os dados "Barbie", "2023", "1h54m", "2", "Barbie parte para o mundo humano em busca da verdadeira felicidade." e "https://image.tmdb.org/t/p/original/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg" respectivamente
    Then Aparece uma mensagem de confirmação "Filme adicionado com sucesso" e posso ver o filme na "Lista de filmes".

Scenario: Remoção de Filme
    Given Estou na página "Feed" 
    And  Desejo remover o filme "Openheimer" que está cadastrado no sistema com os dados "2023", "1h52", "3", "A história de J. Robert Oppenheimer, o homem que liderou a equipe que desenvolveu a bomba atômica durante a Segunda Guerra Mundial." e "https://image.tmdb.org/t/p/original/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg"
    When Eu clico no componente "Filme"
    And Escolho a opção "Excluir" e clico "Sim" na tela de confirmar exclusão
    Then O filme é removido com sucesso da página "Feed"

Scenario: Edição das informações do filme
    Given Estou na página "Feed" e esejo editar as informações do filme "1984" que está cadastrado no sistema
    And Ele possui os campos "genero" e "sinopse" com os valores "Comédia" e "Placeholder" respectivamente
    When Eu clico no componente "Filme" e escolho a opção "Editar"
    And Modifico as informações do campo "genero" e "sinopse" para "Romance" e "Mil novecentos e oitenta e quatro é um romance distópico do escritor inglês George Orwell. parte para o mundo humano em busca da verdadeira felicidade." respectivamente
    Then A informação é editada com sucesso e o usuário retorna para a página "Feed"

    Scenario: Cadastro de Filme que já existe
    Given Estou na página "Feed" e quero adicionar o filme "Barbie2"
    When Eu pressiono o botão "adicionar mídia"
    And Preencho as informações "nome", "ano", "duracao", "genero", "sinopse" e "poster" com os dados "Barbie", "2023", "1h54m", "2", "Barbie parte para o mundo humano em busca da verdadeira felicidade." e "https://image.tmdb.org/t/p/original/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg" respectivamente
    And O filme "Barbie" já estava cadastrado
    Then Aparece uma mensagem de erro "O filme já está no sistema"

# Scenario: Cadastro de Filme com informações incompletas
#     Given Estou na página "Feed" e desejo adicionar um filme
#     When Eu pressiono o botão "adicionar mídia"
#     And Preencho apenas as informações "ano", "duracao", "genero", "sinopse" e "poster" com os dados "2023", "1h54m", "2", "Barbie parte para o mundo humano em busca da verdadeira felicidade." e "https://image.tmdb.org/t/p/original/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg" respectivamente
#     Then Aparece uma mensagem de erro "Cadastro Incompleto" e o usuário permanece na página "Feed"
