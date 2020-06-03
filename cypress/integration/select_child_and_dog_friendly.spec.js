/* eslint-disable no-undef */
it('Selects the most child and dog friendly cats', () => {
  cy.visit('http://localhost:4000/');
  cy.get('input').click();
  cy.contains('Kurilian');
});
