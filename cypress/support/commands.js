Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Roger')
    cy.get('#lastName').type('Albuquerque')
    cy.get('#email').type('roger@roger.com')
    cy.get('select').select('blog')
    cy.get('[type="radio"]').check('feedback',)
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})

