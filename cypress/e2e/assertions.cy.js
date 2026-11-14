describe('Testes de interação', () => {

  it('deve verificar se o campo de email existe e esta visivel', () => {
    cy.visit('https://example.cypress.io/commands/actions')

    cy.get('.action-email').should('exist')
    cy.get('.action-email').should('be.visible')
  })

  it('deve verificar o campo de email e ver se seu atributo type é email', () => {
    cy.visit('https://example.cypress.io/commands/actions')

    cy.get('.action-email').should('have.attr', 'type', 'email')
    
  })

  it('deve verificar o campo de email', () => {
    cy.visit('https://example.cypress.io/commands/actions')

    cy.get('.action-email').type('qa@teste.com')
    cy.get('.action-email').should('have.value',"qa@teste.com")
    
  })

  it('deve verificar o campo de email', () => {
    cy.visit('https://example.cypress.io/commands/actions')

    
    cy.get('.action-email').should('not.be.disabled')
    cy.get('.action-email').clear()
    cy.get('.action-email').should('be.empty')
    
  })

  
})