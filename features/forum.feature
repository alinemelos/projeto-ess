Funcionalidade: Comentar em post
Cenário:  Adição de comentário

Dado que eu estou logado com o usuário “ÍTALO” e senha “4i(124ksas12” 
E estou na página de visualização de posts
E olho para um post sobre a cadeira “ESS” com um review da cadeira elogiando muito ela, 
E desejo comentar “Muito imteressante sua review”.

Quando eu digito o comentário na caixa de texto “Muito interessante sua review”
E clico no botão abaixo “Publicar”

Então meu comentário é publicado e fica visível para todos que estiverem visualizando aquele post

Cenário:  Editando meu comentário
Dado que eu estou logado como “ÍTALO” e senha “4i(124ksas12” 
E estou na página de visualização de posts
E vejo um post sobre a cadeira de “ESS” com dois reviews, sendo um deles feito por mim anteriormente: “Muito imteressante sua review”.
E vejo que houve um erro de grafia nele
E desejo corrigir ele.

Quando eu clico nos 3 pontinhos do comentário

Então aparece um pop-up para selecionar “Editar comentário” e “Deletar comentário”.
E eu clico em “Editar comentário”
E posso editar

Quando eu edito o comentário para “Muito interessante sua review”. 
E aperto no botão de publicar

Então o comentário é publicado
E aparece um marcador indicando que houve edição no comentário.

Cenário:  Deletando meu comentário
Dado que eu estou logado como “ÍTALO” e senha “4i(124ksas12” 
E estou na página de visualização de posts
E vejo um post sobre a cadeira de “ESS” com dois reviews, sendo um deles feito por mim anteriormente: “Muito interessante sua review”.
E desejo remover esse comentário.

Quando eu clico nos 3 pontinhos do comentário

Então aparece um pop-up para selecionar “Editar comentário” e “Deletar comentário”.
E eu clico em “Deletar comentário”

Então meu comentário é deletado.

Cenário:  Removendo comentário de terceiro como administrador
Dado que eu estou logado como “ADM” e senha “adm2024!” 
E estou na página de visualização de posts
E vejo um post sobre a cadeira de “ESS” com dois reviews, sendo um deles: “Muito interessante sua review”.
E desejo remover esse comentário.

Quando eu clico nos 3 pontinhos do comentário

Então aparece um pop-up para selecionar “Deletar comentário”.
E eu clico em “Deletar comentário”

Então o comentário é deletado.

Cenário: Erro ao adicionar o comentário em um post por falta de internet.
Dado que eu estou logado com o usuário "ÍTALO" e senha “4i(124ksas12” 
E estou na página de posts
E vejo um post do filme "Fragmentados"
E desejo comentar esse review

Quando eu escrevo o comentário "Incrível sua review"
E aperto em publicar

Então o botão fica carregando
E aparece um popup de falha ao comentar escrito "Erro ao publicar comentário, tente novamente"


Cenário: Erro na hora de deletar comentário de outro usuário.
Dado que eu estou logado com o usuário "ÍTALO" e senha “4i(124ksas12” 
E estou na página de posts
E vejo um comentário negativo em um post que eu gostei criado pelo user "CARLA"
E desejo deletar ele

Quando eu clico nos 3 pontinhos

Então não aparece a opção de deletar.

Cenário: Erro na hora de editar um comentário por escrever o mesmo comentário de antes
Dado que eu estou logado com o usuário "ÍTALO" e senha “4i(124ksas12” 
E estou na página de posts
E vejo um post do filme "Fragmentados"
E vejo um comentário meu nesse review dizendo o seguinte: "Filme incrível"
E desejo editar esse comentário

Quando eu aperto nos 3 pontinhos do comentário

Então aparece um popup com as opções "Excluir" e "Editar"

Quando eu escolho "Editar"
E escrevo "Filme incrível"

Então o botão de "Publicar" para deixar pública essa edição continua desativado

Quando eu passo o mouse por cima do botão

Então aparece uma mensagem de "O comentário não se alterou"

Cenário: ADM não conseguindo editar comentário de usuário
Dado que eu estou logado com o user "ADM" e senha "ADM2024!"
E estou na página de posts
E vejo um post sobre o filme "Fragmentados"
E vejo um comentário sobre ele falando "Incrível o filme" publicado pelo user "ÍTALO"
E desejo editar esse comentário

Quando eu clico nos 3 pontinhos

Então aparece apenas a opção de Deletar comentário
E não consigo editar o comentário do usuário.

Cenário: Adicionando comentário vazio
Dado que eu estou logado com o usuário "ÍTALO" e senha “4i(124ksas12” 
E estou na página de posts
E vejo um post do filme "Fragmentados"
E desejo comentar nesse review.

Quando eu clico na caixa de texto para digitar
E não escrevo nada
E aperto em publicar

Então aparece a mensagem: "Impossível publicar comentário vazio."