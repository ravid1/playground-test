describe('New Order', () => {
  it('should add extra row on click', () => {
    cy.visit('/orders/new-order');
    cy.get('.glyphicon-plus').click();
    cy.get('.glyphicon-plus').click();
    cy.get('.product-container').should('have.length', 3);
  });

});
