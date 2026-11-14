describe('Página inicial do Cypress', () => {

  it('deve exibir o título da página', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('Kitchen Sink')
      .should('be.visible')
  })

  it('deve possuir um link para a documentação', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('a', 'Cypress API')
      .should('be.visible')
  })
  it('deve possuir um campo para e-mail', () => {
    cy.visit('https://example.cypress.io')
    cy.get('input[type="email"]')

  })
})