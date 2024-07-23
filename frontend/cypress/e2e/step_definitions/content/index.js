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
  cy.get('[data-testid="input-name"]').type('O 1984')
  cy.get('[data-testid="input-diretor"]').type('1984')
  cy.get('[data-testid="input-year"]').type('Michael Radford')
  cy.get('[data-testid="input-duration"]').type('1h53m')
  cy.get('[data-testid="input-genre"]').type('Drama')
  cy.get('[data-testid="sinopse"]').type('Mil novecentos e oitenta e quatro é um romance distópico do escritor inglês George Orwell.')
  cy.get('[data-testid="botao"]').click()
  })

  When('Eu clico no componente "Filme" e escolho a opção "Editar"', () => {
    cy.visit(`http://localhost:3005/Adm/5e6f7g8h-9i10-j11k12-l13m14-n15o16p17q`)
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
    

// And('O "Modal de Review" fecha', () => {
//   cy.get('.modal').should('not.exist')
// })

// And('Eu posso ver meu review no "Forum"', async () => {
//   cy.get('.post').contains('Filme muito bom').should('exist')
// })

// // Scenario: Criação de um review sem a descricao.
// Given('Given Eu Estou na página do filme "Teste"', async () => {
//   cy.visit(`http://localhost:3005/filme/${filme_id}`)
// })

// When('Eu clico no botão "Poste um Review"', () => {
//   cy.get('button').contains('Poste um Review').click()
// })

// Then('Um "Modal de Review" abre na minha tela', () => {
//   cy.get('.modal').should('exist')
// })

// And('Eu preencho "5" no campo nota e clico no botão "ENVIAR"', () => {
//   // Select the Rating component using the data-testid attribute
//   cy.get('[data-testid="rating-component"]').as('rating')

//   // Measure the dimensions and calculate the position to click
//   cy.get('@rating').then(($el) => {
//     const ratingWidth = $el.width()
//     const starsCount = 5 // Assuming 5 stars in the Rating component
//     const targetStarIndex = 5 // 5th star for the maximum rating
//     const clickPosition = (ratingWidth / starsCount) * (targetStarIndex - 0.5)

//     cy.wrap($el).click(clickPosition, $el.height() / 2)
//   })

//   cy.get('button').contains('ENVIAR').click()
// })

// And('O "Modal de Review" fecha', () => {
//   cy.get('.modal').should('not.exist')
// })

// And('Eu posso ver meu review no "Forum", com nota "5" e sem Review', async () => {
//   // cy.get('.post').contains('Filme muito bom').should('exist')
//   cy.get('.post').within(() => {
//     // Check for 5 red stars
//     cy.get('.MuiRating-iconFilled')
//       .should('have.length', 10)
//       .each(($star) => {
//         cy.wrap($star).find('svg').should('have.attr', 'style', 'color: rgb(255, 24, 44);')
//       })
//   })
// })

// // Scenario: Falha criação de review sem nota.

// And('Eu preencho "Filme muito bom" no campo Review e clico no botão "Publicar"', () => {
//   cy.get('textarea').type('Filme muito bom')
//   cy.get('button').contains('ENVIAR').click()
// })

// Then('Uma "Mensagem de Erro" escrita "Nota é obrigatória" surge acima das estrelas', () => {
//   cy.get('[data-testid="error"]').contains('Nota é obrigatória').should('exist')
// })

// // Scenario: Apagar um review.

// When('Eu clico no icone de "opções" no meu review', () => {
//   cy.get('[data-testid="settings-menu"]').click()
// })

// And('Eu clico no botão "Deletar"', () => {
//   cy.get('li').contains('Deletar').click()
// })

// Then('Meu review é removido do "Campo de Reviews"', () => {
//   cy.get('.post').should('not.exist')
// })

