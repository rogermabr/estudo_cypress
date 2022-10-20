it('testa a página de política de privacidade de forma independete', function() {
    cy.visit('./src/privacy.html')
    cy.contains('Talking About Testing').should('be.visible')
})
