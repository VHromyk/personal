describe('Contact Form', () => {
  it('submits the form successfully', () => {
    cy.visit('http://localhost:3000/contacts')

    cy.get('input[name="name"]').type('John Doe')
    cy.get('input[name="company"]').type('Company Ltd.')
    cy.get('input[name="email"]').type('john@example.com')
    cy.get('textarea[name="textarea"]').type('Hello!')

    cy.screenshot('before-submit')

    cy.get('button[type="submit"]').click()

    cy.contains('Thank you for contacting me!').should('be.visible')

    cy.screenshot('after-submit')
  })
})
