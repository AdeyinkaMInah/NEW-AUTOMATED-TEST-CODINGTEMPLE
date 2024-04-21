describe('Health Check', () => {

    it('Perform a ping health check', () => {
  
      cy.request('GET', 'https://restful-booker.herokuapp.com/ping')
  
        .should((response) => {
  
          expect(response.status).to.eq(201);
  
          expect(response.body).to.have.length.greaterThan(0);
          cy.screenshot
          
  
        });
  
    });
  
  });