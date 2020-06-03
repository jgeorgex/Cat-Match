/* eslint-disable no-undef */
it('Selects dog friendly cats', () => {
  cy.visit('http://localhost:4000/');
  cy.get('#child-friendly').select('no');
  cy.get('input').click();
  cy.contains('Australian Mist');
});
