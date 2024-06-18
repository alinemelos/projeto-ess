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

Scenario: Feedback de usuário sobre indiponibilidade do filme
    Given Eu estou na página do filme "Eduardo e Mônica"
    And Eu verifiquei que o filme "Eduardo e Mônica" não está disponível na plataforma "Prime Video"
    And Eu visualizo um botão "Não está mais disponível?"
    When Eu pressiono o botão "Não está mais disponível?"
    Then Eu visualizo uma janela com uma lista suspensa com opções de serviços de streaming
    When Eu seleciono a opção "Prime Video" e pressiono o botão "Enviar"
    Then Eu visualizo uma mensagem de confirmação "Obrigado pelo feedback!"

Scenario: Adicionar plataforma onde um determinado filme está disponível
    Given Eu estou logado como administrador
    And Eu estou na página do filme "Eduardo e Mônica"
    And Eu verifiquei que o filme "Eduardo e Mônica" está disponível na plataforma "Globoplay"
    And Eu visualizo um botão "Adicionar plataforma"
    When Eu pressiono o botão "Adicionar plataforma"
    Then Eu visualizo uma janela com uma lista suspensa com opções de serviços de streaming
    When Eu seleciono a opção "Telecine" e pressiono o botão "Enviar"
    Then Eu visualizo uma mensagem de confirmação "Plataforma adicionada com sucesso!"