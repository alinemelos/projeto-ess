Feature: Realizar busca de filmes e usuários
    As a usuário
    I want to buscar filmes por nome, categoria ou buscar outros usuários
    So that eu possa ver reviews de filmes especificos ou usuários especificos

Scenario: Busca de autor de reviews
        Given que o usuário está na página inicial
        And o usuário "usuário1234" está cadastrado no site
        When o usuário seleciona a opção de pesquisa
        And o usuário escreve “usuário1234” e clica no botão “Pesquisar”
        Then Reviews realizadas pelo usuário “usuário1234” são exibidas

Scenario: Busca de autor de reviews
        Given que o usuário está na página inicial
        And os filmes "Os Vingadores" e "Os Vingadores Ultimato" estão cadastrados no site
        When o usuário seleciona a opção de pesquisa
        And o usuário escreve “Vingadores” e clica no botão “Pesquisar”
        Then os posts dos filmes “Os Vingadores” e “Vingadores Ultimato” são exibidas

Scenario: Busca falhou (GUI)
        Given que o usuário está na página inicial
        And o filme "asdfghjkl" não esta cadastrado no site
        When o usuário seleciona a opção de pesquisa
        And o usuário escreve “asdfghjkl” e clica no botão “Pesquisar”
        Then uma mensagem informando que não foram encontrados resultados é exibida
