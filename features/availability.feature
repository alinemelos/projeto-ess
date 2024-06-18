Feature: Availability
    As a usuário do site
    I want to ver onde os filmes estão disponíveis para assistir
    So that eu possa assistir os filmes

Scenario: Visualizaçao de "onde assistir?" com filme disponível
	Given Eu estou na página do filme "Eduardo e Mônica"
    And O filme "Eduardo e Mônica" está disponível nas plataformas "Globoplay" e "Telecine"
	When Eu pressiono o botão "onde assistir?"
	Then Eu visualizo uma janela com as plataformas "Globoplay" e "Telecine"

Scenario: Visualizaçao de "onde assistir?" com filme indisponível
	Given Eu estou na página do filme "Eduardo e Mônica"
    And O filme "Eduardo e Mônica" não está disponível em nenhuma plataforma
	When Eu pressiono o botão "onde assistir?"
	Then Eu visualizo uma janela sem plataformas e com uma caixa de seleção com a mensagem "Desejo ser avisado quando ficar disponível"

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

Scenario: Adicionar plataforma sem preencher todos os campos
    Given Eu estou na página do filme "Oppenheimer"
    When Eu pressiono o botão "Adicionar plataforma"
    And Eu visualizo um "formulário" na tela
    And Eu preencho "https://www.netflix.com/br/title/81277950" no campo "link", "img.png" no campo "image" e clico em "Adicionar"
    Then Eu vejo uma mensagem de erro