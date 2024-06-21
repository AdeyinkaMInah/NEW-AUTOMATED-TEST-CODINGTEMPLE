describe('Add Contact Test', () => {
    it('should add a new contact', () => {
      cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
      cy.get('[data-testid="add-contact"]').click();
      cy.get('input[name="name"]').type('John Doe');
      cy.get('input[name="email"]').type('johndoe@example.com');
      cy.get('input[name="phone"]').type('1234567890');
      cy.get('button[type="submit"]').click();
      cy.contains('John Doe').should('be.visible');
    });
  });
