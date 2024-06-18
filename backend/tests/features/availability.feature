Feature: Availability

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

Scenario: Remover plataforma
    Given Eu estou na página do filme "Oppenheimer"
    When Eu pressiono o botão "Remover plataforma" da plataforma "Telecine"
    Then A plataforma "Telecine" é removida 
    And Eu não vejo a plataforma "Telecine" na lista de plataformas disponíveis