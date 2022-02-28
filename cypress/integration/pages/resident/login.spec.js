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
})
