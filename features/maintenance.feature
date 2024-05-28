Scenario: Entrar na edição review.
    Given Estou no sistema com login "Aline", senha "administrador" e no cargo "ADM".
    And Estou no post "Eduardo e Monica" que já existe no sistema.
    And Existe uma review do usuario "Duda"
    When Eu selecionar a opção "Editar".
    Then Irei ter acesso a edição da review
    And Terá as opções "Salvar edição" e "Cancelar"

Scenario: Remover review.
    Given Estou no sistema com login "Aline", senha "administrador" e no cargo "ADM".
    And Estou no post "Eduardo e Monica" que já existe no sistema.
    And Existe uma review do usuario "Duda"
    When Eu selecionar a opção "Excluir".
    And Responder a mensagem "Tem certeza" com um "Sim"
    Then Serei redirecionado a "página inicial"
    And O post "Eduardo e Monica" não terá a review do usuario "Duda".

Scenario: Falha na edição.
    Given Estou no sistema com login "Aline", senha "administrador" e no cargo "ADM".
    And Estou no post "Eduardo e Monica" que já existe no sistema.
    And Existe uma review do usuario "Duda"
    And selecionei a opção "Editar"
    When Eu editar o post adicionando a palavra "adorei" ao texto "conteúdo".
    And Fechar a página de edição.
    Then Serei redirecionado a "página inicial"
    And O post "Eduardo e Monica" não terá a palavra "adorei" em seu texto "conteúdo", permanecendo igual.

Scenario: Salvar edição de review.
    Given Estou no sistema com login "Aline", senha "administrador" e no cargo "ADM".
    And Estou no post "Eduardo e Monica" que já existe no sistema.
    And Existe uma review do usuario "Duda"
    And selecionei a opção "Editar"
    When Eu editar o post adicionando a palavra "adorei" ao texto"conteúdo".
    And Selecionar a opção "Salvar"
    Then Serei redirecionado a "página inicial"
    And A review do usuario "Duda" em "Eduardo e Monica" terá a palavra "adorei" em seu texto "conteúdo"