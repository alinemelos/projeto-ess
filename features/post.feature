Feature: Post
    As a usuário do site
    I want to criar um review
    So that eu possa compartilhar minha opinião sobre um filme

Scenario: Criar um review.
    Given Eu Estou na página do filme "Oppenheimer"
    When Eu clico no botão "Review"
    Then Um "Modal de Review" abre na minha tela
    And O campo "Data" tem a data de hoje
    And Eu escrevo "Filme muito bom" no campo "Review" 
    And Eu escrevo "100" no campo "Nota"
    And Eu clico no botão "Publicar"
    Then O "Modal de Review" fecha
    And Eu posso ver meu review no "Campo de Reviews"

Scenario: Criação de um review sem o review.
    Given Eu Estou na página do filme "Oppenheimer" 
    When Eu clico no botão "Review"
    Then Um "Modal de Review" abre na minha tela
    And Eu escrevo "100" no campo "Nota"
    And Eu clico no botão "Publicar"
    Then O "Modal de Review" fecha
    And Eu posso ver meu review no "Campo de Reviews"

Scenario: Falha criação de review sem nota.
    Given Eu Estou na página do filme "Oppenheimer" 
    When Eu clico no botão "Review"
    Then Um "Modal de Review" abre na minha tela
    And Eu escrevo "Filme muito bom" no campo "Review" 
    And Eu clico no botão "Publicar"
    Then Uma "Mensagem de Erro" escrita "Erro: O campo Nota é de preenchimento obrigatório" surge ao lado do botão "Publicar"
    And Um asterisco vermelho surge ao lado do campo "Nota"

Scenario: Criação de um post com a categoria spoiler.
    Given Eu Estou na página do filme "Oppenheimer"
    When Eu clico no botão "Review"
    Then Um "Modal de Review" abre na minha tela
    And O campo "Data" tem a data de hoje
    And Eu escrevo "Filme muito bom" no campo "Review" 
    And Eu escrevo "100" no campo "Nota"
    And Eu marco a opção "Spoiler"
    And Eu clico no botão "Publicar"
    Then O "Modal de Review" fecha
    And Eu posso ver meu review no "Campo de Reviews"

Scenario: Falha na escolha da data de publicação no futuro.
    Given Eu Estou na página do filme "Oppenheimer"
    When Eu clico no botão "Review"
    Then Um "Modal de Review" abre na minha tela
    And Eu não consigo selecionar a "Data" de publicação no futuro

Scenario: Criação de um post com a data de publicação no passado.
    Given Eu Estou na página do filme "Oppenheimer"
    When Eu clico no botão "Review"
    Then Um "Modal de Review" abre na minha tela
    And Eu altero a "Data" de publicação para o dia de ontem
    And Eu clico no botão "Publicar"
    Then O "Modal de Review" fecha
    And Eu posso ver meu review no "Campo de Reviews"

Scenario: Falha na criação de um post com a data de publicação no passado anterior ao lançamento da obra.
    Given Eu Estou na página do filme "Oppenheimer"
    When Eu clico no botão "Review"
    Then Um "Modal de Review" abre na minha tela
    And Eu altero a "Data" de publicação para o dia "10/10/2010"
    And Eu clico no botão "Publicar"
    Then Uma "Mensagem de Erro" escrita "Erro: Campo de data inválido" surge ao lado do botão "Publicar"
    And Um asterisco vermelho surge ao lado do campo "Data"
