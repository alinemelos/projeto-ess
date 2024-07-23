Feature: Availability

Scenario: Tentar adicionar filme com todos os campos preenchidos
    Given o banco de dados requisita os campos "nome", "url", e "img"
    And o filme "Oppenheimer" já está cadastrado
    When o usuário admnistrador envia uma requisição "POST" para a rota "/platform" com nome "Telecine", url "https://www.netflix.com/br/title/81277950" e img "img.png"
    Then o status da resposta deve ser 201

Scenario: Tentar adicionar plataforma já existente
    Given o banco de dados requisita os campos "nome", "url", e "img"
    And o filme "Oppenheimer" já está cadastrado
    And a plataforma "Telecine" já está cadastrada
    When o usuário admnistrador envia uma requisição "POST" para a rota "/" com nome "Telecine", url "https://www.netflix.com/br/title/81277950" e img "img.png"
    Then o status da resposta deve ser 400

Scenario: Tentar remover plataforma
    Given o filme "Oppenheimer" já está cadastrado no banco de dados 
    And possui a plataforma "Telecine"
    When o usuário admnistrador envia uma requisição "DELETE" para a rota "/platform" com nome "Telecine"
    Then o status da resposta deve ser 200 e plataforma "Telecine" não deve estar mais cadastrada no filme "Oppenheimer"

Scenario: Tentar adicionar plataforma sem preencher todos os campos
    Given o banco de dados requisita os campos "nome", "url", e "img"
    And o filme "Oppenheimer" já está cadastrado
    When o usuário admnistrador envia uma requisição "POST" para a rota "/" com url "https://www.netflix.com/br/title/81277950" e img "img.png"
    Then o status da resposta deve ser 400