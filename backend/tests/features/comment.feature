Feature: Comment
  As a usuário do site
  I want to criar um comentário
  So that eu possa compartilhar minha opinião sobre um review

  Scenario: Criar um comentário
    Given Execute um get na rota "http://localhost:3000/" armazenando o id do filme "Oppenheimer"
    And execute um post na rota "http://localhost:3000/comment" com o post_id do "1"º review, user_id "6" e comentário "Concordo com tudo"
    And verifique se o status code é 201 e armazene o comentário
    Then execute um get na rota "http://localhost:3000" e verifique o comentário com o comment_id de retorno existe.

  Scenario: Falha ao criar um comentário vazio
    Given Execute um get na rota "http://localhost:3000/" armazenando o id do filme "Oppenheimer"
    And execute um post na rota "http://localhost:3000/comment" com o post_id do "1"º review, user_id "6" e comentário ""
    Then Uma mensagem de erro "Comment not found" deve ser exibida

  Scenario: Atualizar um comentário
    Given Execute um get na rota "http://localhost:3000/" armazenando o id do filme "Oppenheimer"
    And execute um post na rota "http://localhost:3000/comment" com o post_id do "1"º review, user_id "6" e comentário "Amei o review"
    When execute um put na rota "http://localhost:3000/comment" user_id "6" e comentário "Odiei o review"
    Then execute um get na rota "http://localhost:3000/" e verifique se o comentário contém "Odiei o review"

  Scenario: Apagar um comentário
    Given Execute um get na rota "http://localhost:3000/" armazenando o id do filme "Oppenheimer"
    And execute um post na rota "http://localhost:3000/comment" com o post_id do "1"º review, user_id "6" e comentário "Amei o review"
    When execute um DELETE na rota "http://localhost:3000/comment" user_id "6" e o comment id do comentário publicado
    Then Executa um GET na rota "http://localhost:3000/" para verificar se o comentário foi apagado.

  Scenario: Criar um comentário de comentário
    Given Execute um get na rota "http://localhost:3000/" armazenando o id do filme "Oppenheimer"
    And execute um post na rota "http://localhost:3000/comment" com o post_id do "1"º review, user_id "6" e comentário "Comentário a ser respondido"
    When execute um post na rota "http://localhost:3000/comment" com o post_id do comentário anterior, user_id "6" e comentário "Respondi o comentário"
    Then Executa um GET na rota "http://localhost:3000/" para verificar se o comentário "Respondi o comentário" do user_id "6" foi adicionado

  Scenario: Erro ao apagar um comentário de outro usuário
    Given Execute um get na rota "http://localhost:3000/" armazenando o id do filme "Oppenheimer"
    And execute um post na rota "http://localhost:3000/comment" com o post_id do "1"º review, user_id "6" e comentário "Amei o review"
    When execute um DELETE na rota "http://localhost:3000/comment" user_id "100" e o comment id do comentário publicado
    Then deve ser retornado a mensagem de erro "Comment not found or user not authorized"