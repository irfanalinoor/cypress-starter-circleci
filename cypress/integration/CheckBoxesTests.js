const baseURL = 'http://the-internet.herokuapp.com/'

// This website an excellent place to practice different kinds of test automation scenarios

describe('Checkbox Page Tests', function () {


  it('Verify Home Page has required links', function () {
    cy.visit(baseURL)
    cy.contains('Checkboxes').click()
    cy.url()
      .should('include', '/checkboxes')

    //verify that checkbox1 is un-checked when page is loaded
    cy.get('#checkboxes > :nth-child(1)')
      .should('not.be.checked')

    //Set checkbox1 to check and verify
    cy.get('#checkboxes > :nth-child(1)')
      .check()
      .should('be.checked')

    //verify that checkbox2 is checked when page is loaded
    cy.get('#checkboxes > :nth-child(3)')
      .should('be.checked')

    //Set checkbox2 to un-check and verify
    // cy.get('#checkboxes > :nth-child(1)')
    //   .check()
    //   .should('not.be.checked')

  })

})