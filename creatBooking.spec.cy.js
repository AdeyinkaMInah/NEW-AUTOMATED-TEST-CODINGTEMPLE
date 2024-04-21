describe('Create Booking', () => {

    it('should create a new booking', () => {
  
      cy.request('POST', 'https://restful-booker.herokuapp.com/booking',
      
      {
    "bookingid":"450",
        "firstname": "Adeyinka",
        "lastname": "AdedejiAjose",
        "totalprice": 300,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2024-04-11",
            "checkout": "2024-04-12"
        },
        "additionalneeds": "Pool"
    },
    
  ).then((response) => {
  
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('bookingid');


  }); 
  
        });
  
    });