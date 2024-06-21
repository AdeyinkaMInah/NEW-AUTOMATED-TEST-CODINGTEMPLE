describe('UI Testing', () => {
    it('Should load the contact list page', () => {
      cy.visit('/');
      cy.contains('Contact List').should('be.visible');
    });
  
    it('Should add a new contact', () => {
      cy.visit('/');
      cy.get('button').contains('Add Contact').click();
      cy.get('input[name="name"]').type('John Doe');
      cy.get('input[name="email"]').type('john.doe@example.com');
      cy.get('input[name="phone"]').type('1234567890');
      cy.get('button').contains('Save').click();
      cy.contains('John Doe').should('be.visible');
    });
  
    // Add more UI test cases as needed
  });
