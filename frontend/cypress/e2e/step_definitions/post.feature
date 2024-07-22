Feature: Post
    As a usuário do site
    I want to criar um review
    So that eu possa compartilhar minha opinião sobre um filme

Scenario: Criar um review.
	Given Eu Estou na página do filme "Teste"
	When Eu clico no botão "Poste um Review"
	Then Um "Modal de Review" abre na minha tela
	And Eu preencho "Filme muito bom" no campo Review, "5" no campo nota e clico em "ENVIAR"
	And O "Modal de Review" fecha
	Then Eu posso ver meu review no "Forum"

Scenario: Criação de um review sem a descricao.
	Given Eu Estou na página do filme "Teste"
	When Eu clico no botão "Poste um Review"
	And Um "Modal de Review" abre na minha tela
    And Eu preencho "5" no campo nota e clico no botão "ENVIAR"
	And O "Modal de Review" fecha
	Then Eu posso ver meu review no "Forum", com nota "5" e sem Review

Scenario: Falha criação de review sem nota.
	Given Eu Estou na página do filme "Teste"
	When Eu clico no botão "Poste um Review"
	And Um "Modal de Review" abre na minha tela
    And Eu preencho "Filme muito bom" no campo Review e clico no botão "Publicar"
	Then Uma "Mensagem de Erro" escrita "Nota é obrigatória" surge acima das estrelas

Scenario: Apagar um review.
	Given Eu Estou na página do filme "Teste"
	When Eu clico no botão "Poste um Review"
	Then Um "Modal de Review" abre na minha tela
	And Eu preencho "Filme muito bom" no campo Review, "5" no campo nota e clico em "ENVIAR"
	And O "Modal de Review" fecha
	Then Eu posso ver meu review no "Forum"
    When Eu clico no icone de "opções" no meu review
	And Eu clico no botão "Deletar"
    Then Meu review é removido do "Campo de Reviews"