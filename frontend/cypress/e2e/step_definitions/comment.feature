Feature: Comment
    As a usuário do site
    I want to criar um comentário
    So that eu possa compartilhar minha opinião sobre um review ou outro comentário

Scenario: Criar um comentário.
	Given Eu Estou na página do filme "Teste"
	When Eu clico no botão de "Responder comentário"
	Then Uma "caixa de texto" abre na minha tela
	And Eu preencho "É verdade" no campo de texto 
	And Eu clico em "PUBLICAR"
	Then Eu posso ver meu comentário no "Fórum"

Scenario: Deletar um comentário
	Given Eu Estou na página do filme "Teste"
	When Eu clico no botão de "Responder comentário"
	Then Uma "caixa de texto" abre na minha tela
	And Eu preencho "É verdade" no campo de texto
	And Eu clico em "PUBLICAR"
	Then Eu posso ver meu comentário no "Fórum" 
	When eu clico nos "3 pontinhos"
	And seleciono "Deletar"
	Then eu não vejo mais o meu comentário

Scenario: Editar um comentário
	Given Eu Estou na página do filme "Teste"
	When Eu clico no botão de "Responder comentário"
	Then Uma "caixa de texto" abre na minha tela
	And Eu preencho "É verdade" no campo de texto 
	And Eu clico em "PUBLICAR"
	Then Eu posso ver meu comentário no "Fórum"
	When eu clico nos "3 pontinhos"
	And seleciono "Editar"
	Then Uma "caixa de texto" abre na minha tela
	And Eu preencho " eu vi esse filme" no campo de texto 
	And Eu clico em "ATUALIZAR"
	Then Eu posso ver meu comentário atualizado no "Fórum"

Scenario: Comentar com comentário vazio
	Given Eu Estou na página do filme "Teste"
	When Eu clico no botão de "Responder comentário"
	Then Uma "caixa de texto" abre na minha tela
	And Eu clico em "PUBLICAR"
	Then Eu não vejo meu comentário no "Fórum"

