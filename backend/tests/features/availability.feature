Feature: Availability
    As a usuário do site
    I want to ver onde os filmes estão disponíveis para assistir
    So that eu possa assistir os filmes

Scenario: Adicionar plataforma
    Given Eu estou na página do filme "Oppenheimer"
    When Eu pressiono o botão "Adicionar plataforma"
    And Eu visualizo um "formulário" na tela
    And Eu preencho "Telecine" no campo "nome", "https://www.netflix.com/br/title/81277950" no campo "link", "img.png" no campo "image" e clico em"Adicionar"
    Then O formulário é fechado
    And Eu posso ver a plataforma "Telecine" na lista de plataformas disponíveis

Scenario: Adicionar plataforma já existente
    Given Eu estou na página do filme "Oppenheimer"
    When Eu pressiono o botão "Adicionar plataforma"
    And Eu visualizo um "formulário" na tela
    And Eu preencho "Telecine" no campo "nome", "https://www.netflix.com/br/title/81277950" no campo "link", "img.png" no campo "image" e clico em"Adicionar"
    Then Eu vejo uma mensagem de erro
