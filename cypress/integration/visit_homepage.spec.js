describe('Homepage tests', () => {
  it('Visits homepage', () => {
    cy.visit('http://localhost:4000/');
    cy.contains(`Do you want a dog friendly cat?`);
  });
});
