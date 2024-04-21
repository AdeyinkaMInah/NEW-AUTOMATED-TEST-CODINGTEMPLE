describe('DemoQA Alerts', () => {
  it('should verify alert button functionality', () => {
    cy.visit('https://demoqa.com/alerts');
    cy.get('#alertButton').click()
    cy.get('#timerAlertButton').click()
    cy.get('#confirmButton').click()
    cy.get('#confirmButton').type('Jasmine')


    
  
    

  })
})
