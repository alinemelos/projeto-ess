import { Before, Given, When, And, Then, After } from 'cypress-cucumber-preprocessor/steps'

Before(async () => {
    await factory_start()
  })
  
  After(async () => {
    await factory_end()
  })
  
  // Scenario: Criar um comentário
  
  Given('Eu Estou na página do filme "Teste"', () => {
    cy.visit(`http://localhost:3005/filme/${filme_id}`)
  })
  
  When('Eu clico no botão de "Responder comentário"', () => {
    cy.get('[data-testid="arrow"]').as('arrow').click()
  })

  Then('Uma "caixa de texto" abre na minha tela', () => {
    cy.get('.commenting').should('exist')
  })
  
  When('Eu preencho "É verdade" no campo de texto', () => {
    cy.get('textarea').type('É verdade')
  })

  And('Eu clico em "PUBLICAR"', () => {
    cy.get('.btn-publish').as('btn-publish').click()
  })

  Then('Eu posso ver meu comentário no "Fórum"', () => {
      cy.get('.comment').contains('É verdade').should('exist')
  })

  
  // Scenario: Deletar um comentário
  When('eu clico nos "3 pontinhos"', ()=>{
    cy.get('.config-comment').as('config-comment').click()
  })

  And ('seleciono "Deletar"', ()=>{
    cy.get('.delete-comment').as('delete-comment').click()
  })

  Then ('eu não vejo mais o meu comentário', ()=>{
    cy.get('.comment').should('not.exist')
  })

  // Scenario: Editar um comentário
  When('Eu clico no botão de "Responder comentário"', () => {
    cy.get('[data-testid="arrow"]').as('arrow').click()
  })

  Then('Uma "caixa de texto" abre na minha tela', () => {
    cy.get('.commenting').should('exist')
  })
  
  When('Eu preencho "É verdade" no campo de texto', () => {
    cy.get('textarea').type('É verdade')
  })

  And('Eu clico em "PUBLICAR"', () => {
    cy.get('.btn-publish').as('btn-publish').click()
  })

  Then('Eu posso ver meu comentário no "Fórum"', () => {
      cy.get('.comment').contains('É verdade').should('exist')
  })

  When('eu clico nos "3 pontinhos"', ()=>{
    cy.get('.config-comment').as('config-comment').click()
  })

  And ('seleciono "Editar"', ()=>{
    cy.get('.edit-comment').as('delete-comment').click()
  })

  Then('Uma "caixa de texto" abre na minha tela', () => {
    cy.get('.commenting').should('exist')
  })
  
  When('Eu preencho " eu vi esse filme" no campo de texto', () => {
    cy.get('textarea').type(' eu vi esse filme')
  })

  And('Eu clico em "ATUALIZAR"', () => {
    cy.get('.btn-put').as('btn-put').click()
  })

  Then('Eu posso ver meu comentário atualizado no "Fórum"', () => {
      cy.get('.comment').contains('É verdade eu vi esse filme').should('exist')
})

  // Scenario: Comentar com comentário vazio
 Given('Eu Estou na página do filme "Teste"', () => {
    cy.visit(`http://localhost:3005/filme/${filme_id}`)
  })
  
  When('Eu clico no botão de "Responder comentário"', () => {
    cy.get('[data-testid="arrow"]').as('arrow').click()
  })

  Then('Uma "caixa de texto" abre na minha tela', () => {
    cy.get('.commenting').should('exist')
  })

  And('Eu clico em "PUBLICAR"', () => {
    cy.get('.btn-publish').as('btn-publish').click()
  })

  Then('Eu não vejo meu comentário no "Fórum"', () => {
      cy.get('.comment').should('not.exist')
  })


  let filme_id
  let post_id

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

    const postData = {
        user_id: "Breno Miranda",
        filme_id: filme_id, 
        nota: 5,
        review: "Amei o filme"
    }
    
    const response1 = await fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    if (!response1.ok) {
        throw new Error('Network response was not ok')
    }
    
    const data1 = await response1.json()
    post_id = data1
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
  