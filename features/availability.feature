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
    