Feature: Availability
    As a usuário do site
    I want to ver a disponibilidade de um filme
    So that eu possa saber onde assistir
    As a admnistrador do site
    I want to adicionar a disponibilidade de um filme
    So that os usuários possam saber onde assistir

Scenario: Ver disponibilidade
    Given Eu Estou na página do filme "Teste"
    When Eu clico no botão "Onde Assistir?"
    Then Eu posso ver um "modal" com as plataformas disponíveis

Scenario: Adicionar plataforma
    Given Eu estou logado como administrador na página do filme "Teste"
    When Eu clico no botão "Onde Assistir?"
    Then Eu posso ver um "modal" com as plataformas disponíveis
    When Eu clico no ícone "Adicionar"
    Then Eu vejo um "modal"
    And Eu preencho "Netflix" no campo "Nome" 
    And "url" em "url"
    And "url" em "imagem"
    And Eu clico em "Adicionar"
    And Eu clico no botao para fechar o "modal" de disponibilidade
    When Eu clico no botão "Onde Assistir?"
    Then Eu posso ver um "modal" com as plataformas disponíveis e a nova plataforma adicionada
    
Scenario: Remover plataforma
    Given Eu estou logado como administrador na página do filme "Teste"
    When Eu clico no botão "Onde Assistir?"
    Then Eu posso ver um "modal" com as plataformas disponíveis
    When Eu clico no ícone "Adicionar"
    Then Eu vejo um "modal"
    And Eu preencho "Netflix" no campo "Nome" 
    And "url" em "url"
    And "url" em "imagem"
    And Eu clico em "Adicionar"
    And Eu clico no botao para fechar o "modal" de disponibilidade
    When Eu clico no botão "Onde Assistir?"
    Then Eu posso ver um "modal" com as plataformas disponíveis
    When Eu clico no ícone "Remover"
    Then Eu não vejo mais a plataforma "Netlfix" no modal de disponibilidade

Scenario: Adicionar plataforma duplicada
    Given Eu estou logado como administrador na página do filme "Teste"
    When Eu clico no botão "Onde Assistir?"
    Then Eu posso ver um "modal" com as plataformas disponíveis
    When Eu clico no ícone "Adicionar"
    Then Eu vejo um "modal"
    And Eu preencho "Netflix" no campo "Nome" 
    And "url" em "url"
    And "url" em "imagem"
    And Eu clico em "Adicionar"
    When Eu clico no ícone "Adicionar"
    Then Eu vejo um "modal"
    And Eu preencho "Netflix" no campo "Nome" 
    And "url" em "url"
    And "url" em "imagem"
    And Eu clico em "Adicionar"
    Then Eu vejo uma mensagem de erro "Plataforma já cadastrada no sistema"