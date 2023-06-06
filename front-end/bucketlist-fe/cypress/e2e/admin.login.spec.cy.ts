describe('template spec', () => {
    it('passes', () => {
      cy.visit('http://localhost:4200/');
      cy.get("#username").type("admin");
      cy.get("#password").type("pass");
      cy.get("#submit").click();
        })
  })