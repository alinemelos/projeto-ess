import { Before, Given, When, And, Then, After } from 'cypress-cucumber-preprocessor/steps'


  // Scenario: Busca de filme por nome
  
  let busca = ''
  Given('que o usuário está na página inicial', () => {
    cy.visit(`http://localhost:3005/userdashboard`)
  })
  
  And('os filmes "Os Vingadores" e "Vingadores Ultimato" estão cadastrados no site', () => {})

  When('o usuário seleciona a opção de pesquisa', () => {
    busca = cy.get('[data-testid="caixa de busca"]')
  })

  And('o usuário escreve "Vingadores" e clica no botão "Pesquisar"', () => {
    busca.type('Vingadores')
    cy.get('[data-testid="submeter busca"]').click()
  })
  
  Then('os posts dos filmes "Os Vingadores" e "Vingadores Ultimato" são exibidos', () => {})


  // Scenario: Busca de filme por categoria

  And('a categoria "Ação" está cadastrada e existem filmes categorizados nessa categoria', () => {})

  And('o usuário escreve "Ação" e clica no botão "Pesquisar"', () => {
    busca.type('Ação')
    cy.get('[data-testid="submeter busca"]').click()
  })
  
  Then('os posts dos filmes da categoria "Ação" são exibidos', () => {})


  // Scenario: Busca falhou

  And('o filme "asdfghjkl" não esta cadastrado no site', () => {})

  And('o usuário escreve "asdfghjkl" e clica no botão "Pesquisar"', () => {
    busca.type('asdfghjkl')
    cy.get('[data-testid="submeter busca"]').click()
  })
  
  Then('uma mensagem informando que não foram encontrados resultados é exibida', () => {})
