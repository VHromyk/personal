describe('Contact Form', () => {
  it('submits the form successfully', () => {
    // Відкриваємо сторінку з формою
    cy.visit('http://localhost:3000/contacts') // Змінити на реальний URL

    // Заповнюємо форму
    cy.get('input[name="name"]').type('John Doe')
    cy.get('input[name="company"]').type('Company Ltd.')
    cy.get('input[name="email"]').type('john@example.com')
    cy.get('textarea[name="textarea"]').type('Hello!')

    // Робимо скріншот перед відправкою форми
    cy.screenshot('before-submit') // Назва скріншота 'before-submit'

    // Надсилаємо форму
    cy.get('button[type="submit"]').click()

    // Перевіряємо наявність повідомлення про успішне відправлення
    cy.contains('Thank you for contacting me!').should('be.visible')

    // Робимо скріншот після відправки форми
    cy.screenshot('after-submit')
  })
})
