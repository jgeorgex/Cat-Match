/* eslint-disable no-undef */
it('returns to homepage from shortlist', () => {
  cy.visit('http://localhost:4000/');
  cy.get('input').click();
  cy.get('.navbar-brand').click();
  cy.contains('Do you want a dog friendly cat?');
});
