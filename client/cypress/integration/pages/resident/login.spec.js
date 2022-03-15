describe('test resident login page', () => {
  beforeEach(() => {
    cy.visit('/resident/')
  })

  it('looks inside <title> tag', () => {
    cy.get('head title').should(
      'contain',
      'トップページ - 親子のメンタルヘルススクリーニング'
    )
  })

  it('should login', () => {
    cy.get('[data-cy=user-id]').type('resident-1')
    cy.get('[data-cy=password]').type('resident0218')
    cy.get('[data-cy=login-btn]').click()
    cy.wait(3000)
    cy.get('[data-cy=add-child-btn]').should('be.visible')
    cy.wait(3000)
    cy.get('head title')
  })
})
