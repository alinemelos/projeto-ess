import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

// Scenario: Busca de filme por nome

let busca = ''
Given('que o usuário está na página inicial', () => {
  cy.visit(`http://localhost:3005/userdashboard`)
})

When('o usuário seleciona a opção de pesquisa', () => {
  busca = cy.get('[data-testid="caixa de busca"]')
})

And('o usuário escreve "Vingadores" e clica no botão "Pesquisar"', () => {
  busca.type('Vingadores{enter}')
})

Then('os posts dos filmes "Os Vingadores" e "Vingadores Ultimato" são exibidos', () => {
  cy.get('span').contains('Os Vingadores').should('exist')
  cy.get('span').contains('Vingadores Ultimato').should('exist')
})

// Scenario: Busca de filme por categoria

And('o usuário escreve "Ação" e clica no botão "Pesquisar"', () => {
  busca.type('Ação{enter}')
})

Then('os posts dos filmes da categoria "Ação" são exibidos', () => {
  cy.get('span').contains('Os Vingadores').should('exist')
})

// Scenario: Busca falhou

And('o usuário escreve "asdfghjkl" e clica no botão "Pesquisar"', () => {
  busca.type('asdfghjkl{enter}')
})

Then('uma mensagem informando que não foram encontrados resultados é exibida', () => {
  cy.get('#mensagem_de_erro').should('exist')
})
