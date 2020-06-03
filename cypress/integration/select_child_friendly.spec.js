/* eslint-disable no-undef */
it('Selects child friendly cats', () => {
  cy.visit('http://localhost:4000/');
  cy.get('#dog-friendly').select('no');
  cy.get('input').click();
  cy.contains('Kurilian');
});
