describe('Testes de interação', () => {

  it('deve preencher um campo de texto', () => {

    cy.visit('https://example.cypress.io/commands/actions')

    cy.get('.action-email')
      .type('teste@email.com')

    cy.get('.action-email')
      .should('have.value', 'teste@email.com')

  })

  it('deve clicar em um botão', () => {

    cy.visit('https://example.cypress.io/commands/actions')

    cy.get('.action-btn')
        .click()

  })

  it('deve preencher o campo de email', () => {

    cy.visit('https://example.cypress.io/commands/actions')

    cy.get('.action-email')
      .type('qa@teste.com')

    cy.get('.action-email')
      .should('have.value', 'qa@teste.com')

  })

  it('deve verificar se fica vazio', () => {

    cy.visit('https://example.cypress.io/commands/actions')

    cy.get('.action-email')
      .type('qa@teste.com')

    cy.get('.action-email').clear()

    cy.get('.action-email').should('have.value', '')

  })

  it('deve clicar em um botão e ver se fica visivel', () => {

    cy.visit('https://example.cypress.io/commands/actions')

    cy.get('.action-btn').click()
    cy.get('.action-btn').should('be.visible')

  })
})