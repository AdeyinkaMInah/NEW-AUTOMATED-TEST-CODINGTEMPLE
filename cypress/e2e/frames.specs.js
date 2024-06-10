describe('Test on handling Iframes on DemoQA', () => {
    it('should load demoqa.com/frames', () => {
      cy.visit('https://demoqa.com/frames');
      it('Switches to iframe1'), () =>{
        cy.frame('iframe1');
      }
  
  
    })
  })
