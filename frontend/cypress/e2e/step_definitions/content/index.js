/* eslint-disable prettier/prettier */
import {  Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'


Given('Estou na página "adminDashboard"', () => {
  cy.visit(`http://localhost:3005/admindashboard`)
})

When('Eu pressiono o botão "adicionar mídia"', () => {
  cy.get('[data-testid="triangle"]').click()
})

And('Um "Modal de Conteúdo" é aberto na tela', () => {
  cy.get('[data-testid="modal"]').should('exist')
})

And('Preencho as informações "nome", "ano", "diretor", "duracao", "genero", "sinopse" e "poster" com os dados "Deadpool", "2016", "Tim Miller", "1h54m", "Comédia", "Baseado no anti-herói não convencional da Marvel Comics, Deadpool conta a história da origem do ex-agente das Forças Especiais que se tornou o mercenário Wade Wilson." e "imagemPoster" respectivamente e clico no botão "Confirmar"', () => {
  cy.get('[data-testid="square"]').click()
  cy.get('[data-testid="prompt"]').type('https://m.media-amazon.com/images/M/MV5BZmU4OGZiODItYzAwYy00MWU3LTg3ODUtN2IwN2Q0NzBhZDUyXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_QL75_UX480_.jpg')
  cy.get('[data-testid="botaoConfirmarPrompt"]').click()
  cy.get('[data-testid="input-name"]').type('Deadpool')
  cy.get('[data-testid="input-diretor"]').type('2016')
  cy.get('[data-testid="input-year"]').type('Tim Miller')
  cy.get('[data-testid="input-duration"]').type('1h54m')
  cy.get('[data-testid="input-genre"]').type('Comédia')
  cy.get('[data-testid="sinopse"]').type('Baseado no anti-herói não convencional da Marvel Comics, Deadpool conta a história da origem do ex-agente das Forças Especiais que se tornou o mercenário Wade Wilson.')
  cy.get('[data-testid="botao"]').click()
  })

  Then('Aparece uma mensagem de confirmação "Filme cadastrado com sucesso"', () => {
    cy.get('[data-testid="adicionar"]').contains('Filme Cadastrado com Sucesso')
  })

  
  And('Preencho as informações "nome", "ano", "diretor", "duracao", "genero", "sinopse" e "poster" com os dados "O Exorcista", "1973", "William Friedkin", "2h12m", "Terror", "Em Georgetown, Washington, uma atriz vai gradativamente tomando consciência que a sua filha de doze anos está tendo um comportamento completamente assustador." e "imagemPoster" respectivamente e clico no botão "Confirmar"', () => {
    cy.get('[data-testid="square"]').click()
    cy.get('[data-testid="prompt"]').type('https://http2.mlstatic.com/D_NQ_NP_682779-MLB41490235362_042020-O.webp')
    cy.get('[data-testid="botaoConfirmarPrompt"]').click()
    cy.get('[data-testid="input-name"]').type('O Exorcista')
    cy.get('[data-testid="input-diretor"]').type('1973')
    cy.get('[data-testid="input-year"]').type('William Friedkin')
    cy.get('[data-testid="input-duration"]').type('2h12m')
    cy.get('[data-testid="input-genre"]').type('Terror')
    cy.get('[data-testid="sinopse"]').type('Em Georgetown, Washington, uma atriz vai gradativamente tomando consciência que a sua filha de doze anos está tendo um comportamento completamente assustador.')
    cy.get('[data-testid="botao"]').click()
    })

When('Eu clico no componente "Filme" e escolho a opção "Excluir Filme"', () => {
  cy.visit(`http://localhost:3005/Adm/6b41a0a1-0e1e-5909-8f3d-44a8f05f4547`)
  cy.get('[data-testid="delete"]').click()

})

And('Aparece um modal com a mensagem "Tem certeza que deseja excluir o filme?" e clico "Confirmar"', () => {
  cy.get('[data-testid="verificar-deletar"]').contains('Você tem certeza que deseja apagar o filme?')
  cy.get('[data-testid="Continue"]').click()
})

And('Aparece um modal com a mensagem "Filme Removido com Sucesso" e o filme não estã mais na página "Feed"', () => {
  cy.get('[data-testid="deletar"]').contains('Filme Removido com Sucesso')
  cy.get('[data-testid="botao_confirmar"]').click()
  
})

And('Preencho as informações "nome", "ano", "diretor", "duracao", "genero", "sinopse" e "poster" com os dados "1984", "1984", "Michael Radford", "1h53m", "Drama", "Mil novecentos e oitenta e quatro é um romance distópico do escritor inglês George Orwell." e "imagePoster" respectivamente e clico no botão "Confirmar"', () => {
  cy.get('[data-testid="square"]').click()
  cy.get('[data-testid="prompt"]').type('https://image.tmdb.org/t/p/w600_and_h900_bestv2/2EOfGaRluwJe6OlR21JtbLhWDvt.jpg')
  cy.get('[data-testid="botaoConfirmarPrompt"]').click()
  cy.get('[data-testid="input-name"]').type('1984')
  cy.get('[data-testid="input-diretor"]').type('1984')
  cy.get('[data-testid="input-year"]').type('Michael Radford')
  cy.get('[data-testid="input-duration"]').type('1h53m')
  cy.get('[data-testid="input-genre"]').type('Drama')
  cy.get('[data-testid="sinopse"]').type('Mil novecentos e oitenta e quatro é um romance distópico do escritor inglês George Orwell.')
  cy.get('[data-testid="botao"]').click()
  })

  When('Eu clico no componente "Filme" e escolho a opção "Editar"', () => {
    cy.visit(`http://localhost:3005/Adm/28e43335-5848-52a4-bcd8-223e571c80f1`)
    cy.get('[data-testid="edit"]').click()
  })

  And('Modifico as informações do campo "genero" e "sinopse" para "Romance" e "Mil novecentos e oitenta e quatro é um romance distópico do escritor inglês George Orwell. parte para o mundo humano em busca da verdadeira felicidade." respectivamente', () => {
    cy.get('[data-testid="input-genre"]').type('Drama')
    cy.get('[data-testid="sinopse"]').type('Mil novecentos e oitenta e quatro é um romance distópico do escritor inglês George Orwell.')
    cy.get('[data-testid="botao"]').click()
    })

    Then('Aparece uma mensagem de confirmação "Filme Editado com Sucesso"', () => {
      cy.get('[data-testid="adicionar"]').contains('Filme Editado com Sucesso')
    })

    Then('Aparece uma mensagem de confirmação "Filme já cadastrado no sistema"', () => {
      cy.get('[data-testid="adicionar"]').contains('Filme já cadastrado no sistema')
    })
  
    
    And('Preencho as informações "nome", "ano", "diretor", "duracao", "genero", "sinopse" e "poster" com os dados "Um Lugar Silencioso", "2024", "Michael Sarnoski ", "1h39min", "Terror", "Um Lugar Silencioso: Dia Um é um spin-off de Um Lugar Silencioso, filme de 2018 dirigido por John Krasinski, que também estrela o filme ao lado da esposa, Emily Blunt." e "" respectivamente e clico no botão "Confirmar"', () => {
      cy.get('[data-testid="input-name"]').type('Um Lugar Silencioso')
      cy.get('[data-testid="input-diretor"]').type('2024')
      cy.get('[data-testid="input-year"]').type('Michael Sarnoski')
      cy.get('[data-testid="input-duration"]').type('1h39min')
      cy.get('[data-testid="input-genre"]').type('Terror')
      cy.get('[data-testid="sinopse"]').type('Um Lugar Silencioso: Dia Um é um spin-off de Um Lugar Silencioso, filme de 2018 dirigido por John Krasinski, que também estrela o filme ao lado da esposa, Emily Blunt.')
      cy.get('[data-testid="botao"]').click()
      })

      Then('Aparece uma mensagem de erro "Preencha o campo "Poster"', () => {
        cy.get('[data-testid="adicionar"]').contains('Preencha o campo "Poster"')
      })
    
