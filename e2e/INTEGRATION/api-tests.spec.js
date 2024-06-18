describe('API Testing', () => {
    it('Verify API endpoint responses', () => {
      cy.request('GET', '/api/contacts').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.length.greaterThan(0);
      });
    });
  
    it('Create a new contact', () => {
      cy.request('POST', '/api/contacts', {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '1234567890'
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('id');
      });
    });
  
    // Add more API test cases as needed
  });