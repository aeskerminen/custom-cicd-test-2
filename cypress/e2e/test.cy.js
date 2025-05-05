describe('Main page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
  })

  it('has title', () => {
    cy.get('[data-testid="cypress-heading"]').should("exist")
      .should('have.text', 'Cypress')
  })

  it('has button', () => {
    cy.get('[data-testid="cypress-button"]').should("exist")
      .should('have.text', 'count is 0')
  })
})

describe('Button', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
  })

  it('increases count when clicked', () => {
    cy.get('[data-testid="cypress-button"]').should("exist")
      .should('have.text', 'count is 0')

    cy.get('[data-testid="cypress-button"]').click()

    cy.get('[data-testid="cypress-button"]').should("exist")
      .should('have.text', 'count is 1')
  })
})