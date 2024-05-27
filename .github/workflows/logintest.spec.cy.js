const validUsername = 'testing123';
const validPassword = 'password1234';

describe('Login Test', () => {
  it('should login successfully', () => {
    cy.visit('https://demo.applitools.com')
    cy.get('#username').type ('tesing123')
    cy.get('#password').type ('password1234')
    cy.get('#log-in').click()
    cy.screenshot()

    
  })
})
