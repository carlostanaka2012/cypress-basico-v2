/// =<reference types="Cypress"  />

describe('Central de Atendimento ao Cliente TAT', function() {

  beforeEach(function(){
    cy.visit('./src/index.html')
  })

  it('verifica o titulo da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it.only('preencha os campos obrigatorios e envia o formulário', function(){
    cy.get('#firstName').type('Carlos')
    cy.get('#lastName').type('Tanaka')
    cy.get('#email').type('tanaka@testes.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()
    
    cy.get('.success').should('be.visible').contains('Mensagem enviada com sucesso.')

  })

  it.only('preencha os campos obrigatorios e envia o formulário com texto longo', function(){
    const longText = 'Teste,teste,teste,red,green,teste,teste,teste,teste,teste'
    cy.get('#firstName').type('Carlos')
    cy.get('#lastName').type('Tanaka')
    cy.get('#email').type('tanaka@testes.com')
    cy.get('#open-text-area').type(longText, { delay: 0})
    cy.get('button[type="submit"]').click()
    
    cy.get('.success').should('be.visible').contains('Mensagem enviada com sucesso.')

  })
})