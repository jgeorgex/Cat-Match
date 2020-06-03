/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
it('Visits home page', () => {
  cy.visit('http://localhost:4000/');
  cy.contains('Do you want a dog friendly cat?');
});
