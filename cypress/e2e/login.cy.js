describe('Testes de Login', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('deve realizar login com dados válidos', () => {

    cy.get('#user-name')
      .type('standard_user')

    cy.get('#password')
      .type('secret_sauce')

    cy.get('#login-button')
      .click()

    cy.url()
      .should('include', '/inventory.html')

  })

  it('não deve permitir login com senha incorreta', () => {

  cy.get('#user-name')
    .type('standard_user')

  cy.get('#password')
    .type('senha_errada')

  cy.get('#login-button')
    .click()

  cy.get('h3[data-test="error"]')
    .should('be.visible')

    cy.url().should('eq', 'https://www.saucedemo.com/')
})

it('não deve permitir login com campos vazios', () => {

  cy.get('#login-button')
    .click()

  cy.get('h3[data-test="error"]')
    .should('be.visible')

  cy.url().should('eq', 'https://www.saucedemo.com/')
})

})


describe('Testes do carrinho', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.url().should('include', '/inventory.html')
  })

  it('deve adicionar dois produtos ao carrinho', () => {

    cy.get('#add-to-cart-sauce-labs-backpack').click()

    cy.get('#add-to-cart-sauce-labs-bike-light').click()

    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('have.text', '2')

    cy.get('#shopping_cart_container').click()

    cy.contains('Sauce Labs Backpack')
      .should('be.visible')

    cy.contains('Sauce Labs Bike Light')
      .should('be.visible')
  })

})