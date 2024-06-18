Feature: Comentar em post
    As a que ama filmes
    I want to comentar nas reviews de outras pessoas

    so that eu possa discutir as opiniões sobre o filme com outros usuários.

Scenario:  Adição de comentário
    Given eu estou logado com o usuário “ÍTALO” e senha “4i(124ksas12” 
    And estou na página de visualização de filmes
    And olho para um post sobre o filme "EDUARDO E MÔNICA" com um review escrito "Ótimo filme", 
    And desejo comentar “Muito imteressante sua review”.

    When eu digito o comentário na caixa de texto “Muito interessante sua review”
    And clico no botão abaixo “Publicar”

    Then meu comentário é publicado e fica visível para todos que estiverem visualizando aquele post

Scenario:  Editando meu comentário
    Given eu estou logado como “ÍTALO” e senha “4i(124ksas12” 
    And estou na página de visualização de posts
    And vejo um post sobre o filme "EDUARDO E MÔNICA" com dois reviews, sendo um deles feito por "ÍTALO".
    And vejo que houve um erro de grafia nele
    And desejo corrigir ele.

    When eu clico nos 3 pontinhos do comentário

    Then aparece um pop-up para selecionar “Editar comentário” e “Deletar comentário”.
    And eu clico em “Editar comentário”
    And posso editar

    When eu edito o comentário para “Muito interessante sua review”. 
    And aperto no botão de publicar

    Then o comentário é publicado
    And aparece um marcador indicando que houve edição no comentário.

Scenario:  Deletando meu comentário
    Given eu estou logado como “ÍTALO”
    And estou na página de visualização de posts
    And vejo um post sobre o filme "EDUARDO E MÔNICA", com dois reviews, sendo um deles feito por "ÍTALO" e o outro por "JOAO".

    When eu clico nos 3 pontinhos do comentário feito por "ÍTALO".

    Then aparece um pop-up para selecionar “Editar comentário” e “Deletar comentário”.
    And eu clico em “Deletar comentário”

    Then meu comentário é deletado.

Scenario:  Removendo comentário de terceiro como administrador
    Given eu estou logado como “ADM” e senha “adm2024!” 
    And estou na página de visualização de posts
    And vejo um post sobre a cadeira de “ESS” com dois reviews, sendo um deles: “Muito interessante sua review”.
    And desejo remover esse comentário.

    When eu clico nos 3 pontinhos do comentário

    Then aparece um pop-up para selecionar “Deletar comentário”.
    And eu clico em “Deletar comentário”

    Then o comentário é deletado.

Scenario: Erro ao adicionar o comentário em um post por falta de internet.
    Given eu estou logado com o usuário "ÍTALO" e senha “4i(124ksas12” 
    And estou na página de posts
    And vejo um post do filme "Fragmentados"
    And desejo comentar esse review

    When eu escrevo o comentário "Incrível sua review"
    And aperto em publicar

    Then o botão fica carregando
    And aparece um popup de falha ao comentar escrito "Erro ao publicar comentário, tente novamente"


Scenario: Erro na hora de deletar comentário de outro usuário.
    Given eu estou logado com o usuário "ÍTALO" e senha “4i(124ksas12” 
    And estou na página de posts
    And vejo um comentário negativo em um post que eu gostei feito pelo user "ANNA"
    And desejo deletar ele

    When eu clico nos 3 pontinhos

    Then não aparece a opção de deletar
    And não consigo deletar.

Scenario: Erro na hora de editar um comentário por escrever o mesmo comentário de antes
    Given eu estou logado com o usuário "ÍTALO"
    And estou na página de posts
    And vejo um post do filme "Fragmentados"
    And vejo um comentário do usuário "ÍTALO"

    When eu aperto nos 3 pontinhos do comentário

    Then aparece um popup com as opções "Excluir" e "Editar"

    When eu escolho "Editar"
    And escrevo "Filme incrível"

    Then o botão de "Publicar" para deixar pública essa edição continua desativado

    When eu passo o mouse por cima do botão

    Then aparece uma mensagem de "O comentário não se alterou"

Scenario: ADM não conseguindo editar comentário de usuário
    Given eu estou logado com o user "ADM" e senha "ADM2024!"
    And estou na página de posts
    And vejo um post sobre o filme "Fragmentados"
    And vejo um comentário sobre ele falando "Incrível o filme" publicado pelo user "ÍTALO"
    And desejo editar esse comentário

    When eu clico nos 3 pontinhos

    Then aparece apenas a opção de Deletar comentário
    And não consigo editar o comentário do usuário.

Scenario: Adicionando comentário vazio
    Given eu estou logado com o usuário "ÍTALO" e senha "4i(124ksas12"
    And estou na página de posts
    And vejo um post do filme "Fragmentados"
    And desejo comentar nesse review.

    When eu clico na caixa de texto para digitar
    And não escrevo nada
    And aperto em publicar

    Then aparece a mensagem: "Não foi possível publicar o comentário vazio."
