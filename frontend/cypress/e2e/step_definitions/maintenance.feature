Feature: Maintenance
    As a moderador do site
    I want to editar uma review
    So that eu possa editar uma  review que já existe

Scenario: Criar um review.
	Given Eu Estou na página do filme "Teste"
	When Eu clico no botão "Poste um Review"
	Then Um "Modal de Review" abre na minha tela
	And Eu preencho "Filme muito bom" no campo Review, "5" no campo nota e clico em "ENVIAR"
	And O "Modal de Review" fecha
	Then Eu posso ver meu review no "Forum"

Scenario: Editar review
    Given Eu Estou na página do filme "Teste"
	When Eu clico no botão "Poste um Review"
	Then Um "Modal de Review" abre na minha tela
	And Eu preencho "Filme muito bom" no campo Review, "5" no campo nota e clico em "ENVIAR"
	And O "Modal de Review" fecha
	Then Eu posso ver meu review no "Forum"
    When Eu estiver na página de adm do filme "Teste"
    And Eu clicar no icone "opções" de review de "Yumi Kinoshita ou Lívia Bion ou Livia Bion ou Ítalo Lima ou Miguel Oliveira ou Breno Miranda ou Elian Rodrigues ou Aline Marianna"
    And Eu clico no botão "Editar"
    Then Um "Modal de Review" abre
	And Eu preencho "!!" no campo Review e clico em "ENVIAR"
	And O "Modal de Review" fecha
	Then Eu posso ver o review editado no "Forum"

Scenario: Falha na edição
	Given Eu Estou na página do filme "Teste"
	When Eu clico no botão "Poste um Review"
	Then Um "Modal de Review" abre na minha tela
	And Eu preencho "Filme muito bom" no campo Review, "5" no campo nota e clico em "ENVIAR"
	And O "Modal de Review" fecha
	Then Eu posso ver meu review no "Forum"
    When Eu estiver na página de adm do filme "Teste"
    And Eu clicar no icone "opções" de review de "Yumi Kinoshita ou Lívia Bion ou Livia Bion ou Ítalo Lima ou Miguel Oliveira ou Breno Miranda ou Elian Rodrigues ou Aline Marianna"
    And Eu clico no botão "Editar"
    Then Um "Modal de Review" abre
  	And Eu preencho "!!" no campo Review
  	And Selecionar a opção "Sair da página"
  	And O "Modal de Review" fecha
	Then Eu posso ver que o review não foi editado no "Forum"

Scenario: Remover review
    Given Eu Estou na página do filme "Teste"
	When Eu clico no botão "Poste um Review"
	Then Um "Modal de Review" abre na minha tela
	And Eu preencho "Filme muito bom" no campo Review, "5" no campo nota e clico em "ENVIAR"
	And O "Modal de Review" fecha
	Then Eu posso ver meu review no "Forum"
    When Eu estiver na página de adm do filme "Teste"
    And Eu clicar no icone "opções" de review de "Yumi Kinoshita ou Lívia Bion ou Livia Bion ou Ítalo Lima ou Miguel Oliveira ou Breno Miranda ou Elian Rodrigues ou Aline Marianna"
    And Eu clico no botão "Deletar"
    Then Meu review é removido do "Campo de Reviews"