/* eslint-disable prettier/prettier */

import { Before, Given, When, Then, After, And } from 'cypress-cucumber-preprocessor/steps'

Before(async () => {
    await factory_start()
  })

After(async () => {
  await factory_end()
})

//Scenario: Ver disponibilidade
Given('Eu Estou na página do filme "Teste"', () => {
    cy.visit(`http://localhost:3005/filme/${filme_id}`)
})

When('Eu clico no botão "Onde Assistir?"', () => {
   cy.get('button').contains('Onde Assistir?').click()
})

Then('Eu posso ver um "modal" com as plataformas disponíveis', () => {
    cy.get('.modal').should('exist')
})

//Scenario: Adicionar Plataforma
Given('Eu estou logado como administrador na página do filme "Teste"', () => {
  cy.visit(`http://localhost:3005/adm/${filme_id}`)
})

When('Eu clico no botão "Onde Assistir?"', () => {
cy.get('button').contains('Onde Assistir?').click()
})

Then('Eu posso ver um "modal" com as plataformas disponíveis', () => {
  cy.get('.modal').should('exist')
})

When('Eu clico no ícone "Adicionar"', () => {
  cy.get('[data-testid="Adicionar"]').click()
})

Then('Eu vejo um "modal"', () => {
  cy.get('.modal').should('exist')
})

And('Eu preencho "Netflix" no campo "Nome"' , () => {
  cy.get('[data-testid="nome"]').type('Netflix')
})

And('"url" em "url"' , () => {
  cy.get('[data-testid="url"]').type('https://www.netflix.com/browse')
})

And('"url" em "imagem"' , () => {
  cy.get('[data-testid="img"]').type('https://www.netflix.com/browse')
})

And('Eu clico em "Adicionar"', () => {
  cy.get('button').contains('Adicionar').click()
})

And('Eu clico no botao para fechar o "modal" de disponibilidade' , () => {
  cy.get('[data-testid="exit"]').click()
})

When('Eu clico no botão "Onde Assistir?"', () => {
  cy.get('button').contains('Onde Assistir?').click()
})

Then('Eu posso ver um "modal" com as plataformas disponíveis e a nova plataforma adicionada', () => {
  cy.get('.modal').should('exist')
})

//Scenario: Remover Plataforma
Given('Eu estou logado como administrador na página do filme "Teste"', () => {
  cy.visit(`http://localhost:3005/adm/${filme_id}`)
})

When('Eu clico no botão "Onde Assistir?"', () => {
cy.get('button').contains('Onde Assistir?').click()
})

Then('Eu posso ver um "modal" com as plataformas disponíveis', () => {
  cy.get('.modal').should('exist')
})

When('Eu clico no ícone "Adicionar"', () => {
  cy.get('[data-testid="Adicionar"]').click()
})

Then('Eu vejo um "modal"', () => {
  cy.get('.modal').should('exist')
})

And('Eu preencho "Netflix" no campo "Nome"' , () => {
  cy.get('[data-testid="nome"]').type('Netflix')
})

And('"url" em "url"' , () => {
  cy.get('[data-testid="url"]').type('https://www.netflix.com/browse')
})

And('"url" em "imagem"' , () => {
  cy.get('[data-testid="img"]').type('https://www.netflix.com/browse')
})

And('Eu clico em "Adicionar"', () => {
  cy.get('button').contains('Adicionar').click()
})

When('Eu clico no botão "Onde Assistir?"', () => {
  cy.get('button').contains('Onde Assistir?').click()
})

Then('Eu posso ver um "modal" com as plataformas disponíveis', () => {
  cy.get('.modal').should('exist')
})

When('Eu clico no ícone "Remover"', () => {
  cy.get('[data-testid="remove"]').click()
})

Then('Eu não vejo mais a plataforma "Netlfix" no modal de disponibilidade', () => {
  cy.get('.modal').should('exist')
  cy.get('.platform').should('not.exist')
})

//Scenario: Adicionar plataforma duplicada
Then('Eu vejo uma mensagem de erro "Plataforma já cadastrada no sistema"', () => {
  cy.get('[data-testid="error"]').contains('Plataforma já cadastrada no sistema').should('exist')
})

let filme_id

let factory_start = async () => {
  // Factory create
  const movieData = {
    nome: 'Teste',
    ano: '1337',
    duracao: '1h54m',
    genero: '1',
    sinopse: 'QA Movie.',
    diretor: 'Martin Q. A. Scorsese',
    poster: 'https://image.tmdb.org/t/p/original/qirvDexByE5erglM8fdIm0AEVFD.jpg',
    plataformas: [
      {
        nome: 'Netflix',
        url: 'https://www.netflix.com/browse',
        image: 'https://www.netflix.com/browse'
      }
    ]
  }

  const response = await fetch('http://localhost:3000/movie', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(movieData)
  })

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  const data = await response.json()
  filme_id = data.filme_id
}

let factory_end = async () => {
  // Factory remove
  const response = await fetch('http://localhost:3000/movie', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ filme_id: filme_id })
  })

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  const data = await response.json()
  expect(data).to.have.property('message', 'Filme Removido com Sucesso')
}