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

Scenario: Ativar alerta para filme indisponível
	Given Eu estou na página do filme "Eduardo e Mônica"
    And O filme "Eduardo e Mônica" não está disponível em nenhuma plataforma
	When Eu pressiono o botão "onde assistir?"
	Then Eu visualizo uma janela sem plataformas e com uma caixa de seleção com a mensagem "Desejo ser avisado quando ficar disponível"
    When Eu marco a caixa de seleção "Desejo ser avisado quando ficar disponível"
    Then Eu visualizo uma mensagem de confirmação "Alerta ativado com sucesso"

Scenario: Notificação de mudança na disponibilidade
    Given Eu estou na página "Feed"
    And Eu ativei o alerta para o filme "Eduardo e Mônica"
    And Eu visualizo um indicador de notificação
    When Eu clico no indicador de notificação
    Then Eu visualizo uma mensagem com a disponibilidade do filme "Eduardo e Mônica"

    