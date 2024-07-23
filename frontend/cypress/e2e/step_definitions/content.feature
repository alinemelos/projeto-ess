Feature: Content
    As a: administrador do site  
    I want to gerenciar a mídia do site 
    So that os usuários possam compartilhar reviews

Scenario: Cadastro de Filme
    Given Estou na página "adminDashboard" 
    When Eu pressiono o botão "adicionar mídia"
    And Um "Modal de Conteúdo" é aberto na tela
    And Preencho as informações "nome", "ano", "diretor", "duracao", "genero", "sinopse" e "poster" com os dados "Deadpool", "2016", "Tim Miller", "1h54m", "Comédia", "Baseado no anti-herói não convencional da Marvel Comics, Deadpool conta a história da origem do ex-agente das Forças Especiais que se tornou o mercenário Wade Wilson." e "imagemPoster" respectivamente e clico no botão "Confirmar"
    Then Aparece uma mensagem de confirmação "Filme cadastrado com sucesso"

Scenario: Remoção de Filme
    Given Estou na página "adminDashboard" 
    When Eu pressiono o botão "adicionar mídia"
    And Um "Modal de Conteúdo" é aberto na tela
    And Preencho as informações "nome", "ano", "diretor", "duracao", "genero", "sinopse" e "poster" com os dados "O Exorcista", "1973", "William Friedkin", "2h12m", "Terror", "Em Georgetown, Washington, uma atriz vai gradativamente tomando consciência que a sua filha de doze anos está tendo um comportamento completamente assustador." e "imagemPoster" respectivamente e clico no botão "Confirmar"
    Then Aparece uma mensagem de confirmação "Filme cadastrado com sucesso" 
    When Eu clico no componente "Filme" e escolho a opção "Excluir Filme"
    Then Aparece um modal com a mensagem "Tem certeza que deseja excluir o filme?" e clico "Confirmar"
    And Aparece um modal com a mensagem "Filme Removido com Sucesso" e o filme não estã mais na página "Feed"

Scenario: Edição das informações do filme
    Given Estou na página "adminDashboard"
    When Eu pressiono o botão "adicionar mídia"
    And Um "Modal de Conteúdo" é aberto na tela
    And Preencho as informações "nome", "ano", "diretor", "duracao", "genero", "sinopse" e "poster" com os dados "1984", "1984", "Michael Radford", "1h53m", "Drama", "Mil novecentos e oitenta e quatro é um romance distópico do escritor inglês George Orwell." e "imagePoster" respectivamente e clico no botão "Confirmar"
    Then Aparece uma mensagem de confirmação "Filme cadastrado com sucesso"
    When Eu clico no componente "Filme" e escolho a opção "Editar"
    And Modifico as informações do campo "genero" e "sinopse" para "Romance" e "Mil novecentos e oitenta e quatro é um romance distópico do escritor inglês George Orwell. parte para o mundo humano em busca da verdadeira felicidade." respectivamente
    Then Aparece uma mensagem de confirmação "Filme Editado com Sucesso"

Scenario: Cadastro de Filme que já existe
    Given Estou na página "adminDashboard" 
    When Eu pressiono o botão "adicionar mídia"
    And Um "Modal de Conteúdo" é aberto na tela
    And Preencho as informações "nome", "ano", "diretor", "duracao", "genero", "sinopse" e "poster" com os dados "Deadpool", "2016", "Tim Miller", "1h54m", "Comédia", "Baseado no anti-herói não convencional da Marvel Comics, Deadpool conta a história da origem do ex-agente das Forças Especiais que se tornou o mercenário Wade Wilson." e "imagemPoster" respectivamente e clico no botão "Confirmar"
    Then Aparece uma mensagem de confirmação "Filme já cadastrado no sistema"

Scenario: Cadastro de Filme sem Poster
    Given Estou na página "adminDashboard" 
    When Eu pressiono o botão "adicionar mídia"
    And Um "Modal de Conteúdo" é aberto na tela
    And Preencho as informações "nome", "ano", "diretor", "duracao", "genero", "sinopse" e "poster" com os dados "Um Lugar Silencioso", "2024", "Michael Sarnoski ", "1h39min", "Terror", "Um Lugar Silencioso: Dia Um é um spin-off de Um Lugar Silencioso, filme de 2018 dirigido por John Krasinski, que também estrela o filme ao lado da esposa, Emily Blunt." e "" respectivamente e clico no botão "Confirmar"
    Then Aparece uma mensagem de erro "Preencha o campo "Poster" 
