describe('Sample Test', () => {
  it('Visits the app', () => {
    cy.visit('/')
    cy.contains('Welcome to Your App')
  })
})
