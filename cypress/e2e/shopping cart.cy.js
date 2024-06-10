describe('Shopping cart', () => {
    it('should add a product to the shopping cart', () => {
       cy.visit('https://www.saucedemo.com/',);
       cy.get('[data-test="username"]').type('standard_user')
       cy.get('[data-test="password"]').type('secret_sauce')
       cy.get('[data-test="login-button"]').click()
       cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
       cy.get('.shopping_cart_link').click()
       

  
    })
  })
  
