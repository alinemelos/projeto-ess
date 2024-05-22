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

Scenario: Falha criação de review sem nota.
	Given Eu Estou na página do filme "Oppenheimer"
	When Eu clico no botão "Review"
	And Um "Modal de Review" abre na minha tela
    And eu preencho "Filme muito bom" no campo "Review" e clico no botão "Publicar"
	Then Uma "Mensagem de Erro" escrita "Erro: O campo Nota é de preenchimento obrigatório" surge ao lado do botão "Publicar"
	And Um asterisco vermelho surge ao lado do campo "Nota"

Scenario: Falha na criação de um post não clicou no botão de submeter
	Given Eu Estou na página do filme "Oppenheimer"
	When Eu clico no botão "Review"
	And Um "Modal de Review" abre na minha tela
	And Eu preencho "Filme muito bom" no campo "Review", "5" no campo nota e clico no "X" para fechar
	Then O "Modal de Review" fecha
	And Não existe um review feito por mim no topo do "Campo de Reviews"
