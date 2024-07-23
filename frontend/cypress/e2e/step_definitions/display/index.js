/* eslint-disable prettier/prettier */

import { Before, Given, Then, After } from 'cypress-cucumber-preprocessor/steps'


Before(async () => {
    await factory_start()
  })
  
  After(async () => {
    await factory_end()
  })

// Scenario: Visualização do título do Filme
Given('Eu Estou na página do filme "Teste"', () => {
    cy.visit(`http://localhost:3005/filme/${filme_id}`)
  })
  
Then('Ele verá o título do filme localizada no topo da página', () => {
    cy.get('[data-testid="title"]').as('title').contains('Teste') 
    })

Then('Ele verá o ano do filme localizado na pagina', () => {
  cy.get('.information').contains('1337') 
  })


Then ('Ele verá o diretor do filme localizado na pagina', () => {
    cy.get('.information').contains('Martin Q. A. Scorsese')
  })

Then ('Ele verá o duracao do filme localizado na pagina', () => {
  cy.get('.information').contains('1h54m')
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
    poster: 'https://image.tmdb.org/t/p/original/qirvDexByE5erglM8fdIm0AEVFD.jpg'
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
