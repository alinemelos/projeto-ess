Feature: Content
    As a: administrador do site  
    I want to gerenciar a mídia do site 
    So that os usuários possam compartilhar reviews


Scenario: Cadastro de Filme com sucesso
    Given o banco de dados requer os dados obrigatórios nome, gênero, ano, diretor, duracao, sinopse e poster para o cadastro.
    When o administrador envia uma requisição POST para a rota /movie com os dados "The Lighthouse", "Horror", "2019", "Robert Eggers", "1h49m", "Two lighthouse keepers try to maintain their sanity while living on a remote and mysterious New England island in the 1890s." e "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ve72VxNqjGM69Uky4WTo2bK6rfq.jpg" respectivamente
    Then o sistema retorna o status code 201 e a resposta deve conter a mensagem "Filme Adicionado com Sucesso"

Scenario: Remoção de Filme com Sucesso
    Given o banco de dados requer o ID do filme para a remoção.
    And o filme "Enrolados" está cadastrado no banco de dados com o ID "a7b8c9d0-1e2f-11ef-3a4b-5c6d7e8f9a0b"
    When o administrador envia uma requisição DELETE para a rota /movie passando o ID "a7b8c9d0-1e2f-11ef-3a4b-5c6d7e8f9a0b"
    Then o sistema retorna o status code 200 e a resposta deve conter a mensagem "Filme Removido com Sucesso"
    And o filme "Enrolados" não está mais disponível no banco de dados

Scenario: Edição das Informações do Filme com sucesso
    Given o banco de dados requer um ou mais dos seguintes dados para a edição: filme_id, nome, ano, duracao, genero, sinopse, poster, plataformas.
    And o filme "Os Vingadores" de ID "d9a92df2-2d0e-11ef-85cc-15bfccf04c98" está cadastrado no sistema e possui seus campos sinopse e genero como "Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz, logo reúne os únicos super-heróis que serão capazes de defender a Terra de ameaças sem precedentes. Homem de Ferro, Capitão América, Hulk, Thor, Viúva Negra e Gavião Arqueiro formam o time dos sonhos de Fury, mas eles precisam aprender a colocar os egos de lado e agir como um grupo em prol da humanidade." e "Ação" respectivamente.
    When o administrador envia uma requisição PUT para a rota /movie passando o ID "d9a92df2-2d0e-11ef-85cc-15bfccf04c98" com os campos sinopse e gênero sendo "Thanos INVADIU OS TESTES" e "Ficcção Científica".
    Then o sistema retorna o status code 200 e a mensagem "Filme Editado com Sucesso"
    And Os campos sinopse e genero agora são "Thanos INVADIU OS TESTES" e "Ficcção Científica".

Scenario: Cadastro de Filme que já existe
    Given o banco de dados requer os dados obrigatórios nome, gênero, ano, diretor, duracao, sinopse e poster para o cadastro.
    When o administrador envia uma requisição POST para a rota /movie com os dados "The Lighthouse", "Horror", "2019", "Robert Eggers", "1h49m", "Two lighthouse keepers try to maintain their sanity while living on a remote and mysterious New England island in the 1890s." e "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ve72VxNqjGM69Uky4WTo2bK6rfq.jpg" respectivamente
    Then O sistema retorna o status code 409 e a mensagem de erro "Filme já cadastrado no sistema".

Scenario: Cadastro de Filme com informações incompletas
    Given o banco de dados requer os dados obrigatórios nome, gênero, ano, diretor, duracao, sinopse e poster para o cadastro.
    When o administrador envia uma requisição POST para a rota /movie com os dados "Mad Max: Fury Road", "Action", "2015", "nulo", "2h00m", "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshipper and a drifter named Max." e "https://www.wallpaperflare.com/mad-max-fury-road-movie-cover-mad-max-fury-road-movies-car-wallpaper-purbn" respectivamente
    Then O sistema retorna o status code 400 e a mensagem de erro "O campo diretor não foi preenchido".
