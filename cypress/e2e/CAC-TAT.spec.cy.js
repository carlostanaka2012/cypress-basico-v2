/// =<reference types="Cypress"  />

describe('Central de Atendimento ao Cliente TAT', () => {

  it('verifica o titulo da aplicação', () => {
    cy.visit('./src/index.html')

    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })
})