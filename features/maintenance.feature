Scenario: Editar review
    Given Estou no sistema com login ‘Aline’, senha ‘administrador’ e no cargo ‘ADM’.
    And Estou no post ‘Eduardo e Monica’ que já existe no sistema.
    When Eu selecionar a opção ‘Editar’.
    Then Irei ter acesso a edição da review
    And Terá as opções ‘Salvar edição’ e ‘Cancelar’

Scenario: Remover review
    Given Estou no sistema com login ‘Aline’, senha ‘administrador’ e no cargo ‘ADM’.
    And Estou no post ‘Eduardo e Monica’ que já existe no sistema.
    When Eu selecionar a opção ‘Excluir’.
    And Responder a mensagem ‘Tem certeza’ com um ‘Sim’
    Then Serei redirecionado a ‘página inicial’
    And O post ‘Eduardo e Monica’ não terá a review.

nova linha aqui
nova nova linha 

nova da nova