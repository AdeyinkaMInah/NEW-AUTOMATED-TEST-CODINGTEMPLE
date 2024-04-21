describe('Update Booking', () => {

    it('should update booking', () => {
  
      cy.request('POST', 'https://restful-booker.herokuapp.com/booking',
      
      {"bookingid":"450",
        "firstname": "Adeyinka",
        "lastname": "AdedejiAjose",
        "totalprice": 350,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2024-04-11",
            "checkout": "2024-04-13"
        },
        "additionalneeds": "Pool,Breakfast"
    },
    
  ).then((response) => {
  
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('bookingid');


  }); 
  
        });
  
    });
  