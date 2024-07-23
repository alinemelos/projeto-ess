Feature: Mostrar reviews e notas

Scenario: Visualização do título do Filme
    Given que existe o filme "Oppenheimer" e o mesmo está cadastrado
    Then ele verá a sinopse localizada na página

Scenario: Visualização da Detalhes do Filme
    Given que existe o filme "Oppenheimer" e o mesmo está cadastrado
    Then ele verá informações basicas localizadas abaixo da sinopse    


Scenario: Visualização da Diretor do Filme
    Given que existe o filme "Oppenheimer" e o mesmo está cadastrado
    Then ele verá o nome do diretor na aba de diretor