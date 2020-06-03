/* eslint-disable no-undef */
it('Selects all cats', () => {
  cy.visit('http://localhost:4000/');
  cy.get('#dog-friendly').select('no');
  cy.get('#child-friendly').select('no');
  cy.get('input').click();
  cy.get(':nth-child(68) > :nth-child(2)').contains('York Chocolate');
});
