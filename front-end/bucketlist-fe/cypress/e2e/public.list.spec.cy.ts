describe('template spec', () => {
    it('passes', () => {
      cy.visit('http://localhost:4200/');
      cy.get("#username").type("user");
      cy.get("#password").type("123");
      cy.get("#submit").click();
      cy.get("#2").should('exist');
        })
  })