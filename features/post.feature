Feature: Post
    As a usuário do site
    I want to criar um review
    So that eu possa compartilhar minha opinião sobre um filme

Scenario: Criar um review.
	Given Eu Estou na página do filme "Eduardo e Mônica"
	When Eu clico no botão "Review"
	And Um "Modal de Review" abre na minha tela
	And Eu preencho "Filme muito bom" no campo "Review", "5" no campo nota e clico em "Publicar"
	Then O "Modal de Review" fecha
	And Eu posso ver meu review no topo do "Campo de Reviews"

Scenario: Criação de um review sem a descricao.
	Given Eu Estou na página do filme "Eduardo e Mônica"
	When Eu clico no botão "Review"
	And Um "Modal de Review" abre na minha tela
    And eu preencho "5" no campo "Nota" e clico no botão "Publicar"
	Then O "Modal de Review" fecha
	And Eu posso ver meu review no topo do "Campo de Reviews"
