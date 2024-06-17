Feature: Comment Management

  Scenario: Criar um comentário
    Given Eu Estou na página do filme "Oppenheimer"
    And aperto no botão "Responder" do primeiro "1" review
    When Eu preencho "Comentário massa" no campo de comentário
    And clico no botão "Enviar Comentário"
    Then O comentário deve ser adicionado ao post

  # Scenario: Falha ao criar um comentário sem corpo
  #   Given Eu Estou na página do post "<post_id>"
  #   When Eu deixo o campo de comentário vazio
  #   And clico no botão "Enviar Comentário"
  #   Then Uma mensagem de erro deve ser exibida

  Scenario: Atualizar um comentário
    Given Eu Estou na página do filme "Oppenheimer"
    And Eu já publiquei um comentário com o texto "Incrível o comentário" respondendo o primeiro "1" review
    When Eu altero o texto para "Odiei o comentário"
    And clico no botão "Atualizar Comentário"
    Then O comentário deve ser atualizado

  Scenario: Apagar um comentário
    Given Eu Estou na página do filme "Oppenheimer"
    And Eu já publiquei um comentário com o texto "Amei o filme" respondendo o primeiro "1" review
    When Eu clico no botão "Apagar Comentário"
    Then O comentário deve ser removido do post
