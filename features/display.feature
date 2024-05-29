Funcionalidade: Mostrar reviews e notas

Scenario: Visualização da Sinopse do Filme
Given que existe o filme "Eduado e Mônica" e o mesmo está cadastrado
and o usuário acessa o post do filme por meio da barra de busca ou da tela inicial
When usuário está no post do filme
and ele acessa a página ao clicar no post,
Then ele verá a sinopse do filme localizada na primeira parte da página "Lorem Ipsum is simply dummy text of the printing and typesetting industry", logo abaixo do título do filme: "Eduardo e Mônica" e informações básicas como o gênero: "Comédia", duração: "1 hora e 54 min" e ano de lançamento: "2020"

Scenario:  Visualização de Resenhas e Notas na Página do Filme
Given que o usuário está na página do filme “Eduardo e Mônica”,
When ele rola a página para a seção de resenhas de usuários,
Then ele verá uma lista de resenhas escritas por outros usuários, com cada resenha mostrando o nome do autor, a data da publicação, a nota atribuída e o texto da resenha.

Scenario:  Feedback e Avaliação de Resenhas - curtir
Given que o usuário está na página do filme “Eduardo e Mônica”, 
and existe uma resenha do usuário “Ellian” com o número de curtidas “50”
and o usuário ainda não curtiu a resenha em questão
When ele decide interagir com essa resenha, clicando em curtir, 
Then o sistema atualizará o número de curtidas em tempo real na resenha correspondente do valor “50” para “51”



