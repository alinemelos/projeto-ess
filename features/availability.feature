Feature: Availability
    As a usuário do site
    I want to ver onde os filmes estão disponíveis para assistir
    So that eu possa assistir os filmes

Scenario: Visualizaçao de "onde assistir?" com filme disponível.
	Given Eu estou na página do filme "Eduardo e Mônica"
    And O filme "Eduardo e Mônica" está disponível nas plataformas "Globoplay" e "Telecine"
	When Eu pressiono o botão "onde assistir?"
	Then Eu visualizo uma janela com as plataformas "Globoplay" e "Telecine"
    