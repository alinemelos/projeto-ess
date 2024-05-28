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

Scenario: Remoção de Filme
Given Estou logado no usuário "Administrador"
And Estou na página "Feed" e esejo remover o filme "Oppenheimer" que está cadastrado no sistema
When Eu clico no componente "Filme"
And Escolho a opção "Excluir" dentre as opções "Excluir" e "Editar"
And Clico "Sim" na tela de confirmar exclusão
Then O filme é removido com sucesso
And O usuário retorna para a página "Feed"

Scenario: Edição das informações do filme
Given Estou logado no usuário "Administrador"
And Estou na página "Feed" e esejo editar dados do filme "1984" que está cadastrado no sistema
When Eu clico no componente "Filme"
And Escolho a opção "Editar" dentre as opções "Excluir" e "Editar"
And Modifico as informações do campo sinopse de "Steve Spielberg" para "Michael Radford"
Then A informação é editada com sucesso


Scenario: Falha no Cadastro
Given Estou logado no usuário "Administrador"
And Estou na página "Feed" e quero adicionar o filme "Barbie"
When Eu pressiono o botão "adicionar" na tela "adicionar mídia"
And Preencho as informações "Título", "Ano", "Duração", "Gênero" e "Sinopse" com os dados " ", " ", "1h54m", "Comédia" e "Barbie parte para o mundo humano em busca da verdadeira felicidade." respectivamente
Then Aparece a mensagem de erro "Os campos 'Título' e 'Ano'" não foram preenchidos
And O usuario volta para a tela de "adicionar mídia"


Scenario: Falha ao tentar editar arquivo sem modificações
Given Estou logado no usuário "Administrador"
And Estou na página "Feed" e esejo editar dados do filme "1984" que está cadastrado no sistema
When Eu clico no componente "Filme"
And Escolho a opção "Editar" dentre as opções "Excluir" e "Editar"
And Não modifico nenhuma das informações "Título", "Ano", "Duração", "Gênero" e "Sinopse" 
Then A mensagem de erro "Nenhuma modificação foi feita"
And O usuário retorna para a página "Feed"