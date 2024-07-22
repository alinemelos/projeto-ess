/* eslint-disable prettier/prettier */
import { Before, Given, When, And, Then, After } from 'cypress-cucumber-preprocessor/steps'

Before(async () => {
  await factory_start()
})

After(async () => {
  await factory_end()
})

Given('Eu Estou na página do filme "Teste"', () => {
    cy.visit(`http://localhost:3005/filme/${filme_id}`)
})
  
When('Eu clico no botão "Poste um Review"', () => {
    cy.get('button').contains('Poste um Review').click()
})
  
Then('Um "Modal de Review" abre na minha tela', () => {
    cy.get('.modal').should('exist')
})
  
And('Eu preencho "Filme muito bom" no campo Review, "5" no campo nota e clico em "ENVIAR"', () => {
    cy.get('textarea').type('Filme muito bom')
    // Select the Rating component using the data-testid attribute
    cy.get('[data-testid="rating-component"]').as('rating')
  
    // Measure the dimensions and calculate the position to click
    cy.get('@rating').then(($el) => {
      const ratingWidth = $el.width()
      const starsCount = 5 // Assuming 5 stars in the Rating component
      const targetStarIndex = 5 // 5th star for the maximum rating
      const clickPosition = (ratingWidth / starsCount) * (targetStarIndex - 0.5)
  
      cy.wrap($el).click(clickPosition, $el.height() / 2)
    })
  
    cy.get('button').contains('ENVIAR').click()
})
  
And('O "Modal de Review" fecha', () => {
    cy.get('.modal').should('not.exist')
})
  
And('Eu posso ver meu review no "Forum"', async () => {
    cy.get('.post').contains('Filme muito bom').should('exist')
})


When('Eu estiver na página de adm do filme "Teste"', () => {
    cy.visit(`http://localhost:3005/adm/${filme_id}`)
})

And('Eu clicar no icone "opções" de review de {string}', (nomesUsuarios) => {
    // Converta a string de nomes em um array
    const nomesArray = nomesUsuarios.split(' ou ').map(nome => nome.trim());   
    // Encontre o post correto e clique no menu de opções
    cy.get('.postadm').filter((index, element) => {
        const postTexto = Cypress.$(element).text();
        return nomesArray.some(nome => postTexto.includes(nome));
    }).within(() => {
        cy.get('[data-testid="settings-menu"]').first().should('be.visible').click();
    });
});

//Scenario: Editar Review

And('Eu clico no botão "Editar"', () => {
    cy.get('li').contains('Editar').click()
})

Then('Um "Modal de Review" abre', () => {
    cy.get('.modaladm').should('exist')
})
  
And('Eu preencho "!!" no campo Review e clico em "ENVIAR"', () => {
    cy.get('textarea').type('!!')
    // Select the Rating component using the data-testid attribute
    cy.get('[data-testid="rating-component"]').as('rating')
  
    cy.get('button').contains('ENVIAR').click()
})
  
And('O "Modal de Review" fecha', () => {
    cy.get('.modal').should('not.exist')
})
  
Then('Eu posso ver o review editado no "Forum"', async () => {
    cy.get('.postadm').contains('Filme muito bom!!').should('exist')
})

//Scenario: Falha na edição

And('Eu preencho "!!" no campo Review', () => {
    cy.get('textarea').type('!!')
    // Select the Rating component using the data-testid attribute
    cy.get('[data-testid="rating-component"]').as('rating')
})

And('Selecionar a opção "Sair da página"', () => {
    cy.get('.modaladm').find('[data-testid="exit-button"]').click()
})

Then('Eu posso ver que o review não foi editado no "Forum"', async () => {
    cy.get('.postadm').contains('Filme muito bom').should('exist')
})

//Scenario: Deletar review
And('Eu clico no botão "Deletar"', () => {
    cy.get('li').contains('Deletar').click()
})
Then('Meu review é removido do "Campo de Reviews"', () => {
    cy.get('.postadm').should('not.exist')
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
