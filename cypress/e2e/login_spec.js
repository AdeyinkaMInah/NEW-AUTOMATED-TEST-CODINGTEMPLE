// cypress/integration/login_spec.js
describe('Login Functionality', () => {
    it('should allow user to log in', () => {
      cy.visit('https://contact-list-app.com/login')
      cy.get('input[name="email"]').type('testuser@example.com')
      cy.get('input[name="password"]').type('password123')
      cy.get('button[type="submit"]').click()
      cy.url().should('include', '/dashboard')
    })
  })
  