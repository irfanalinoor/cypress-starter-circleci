const baseURL = 'http://the-internet.herokuapp.com/'

// This website an excellent place to practice different kinds of test automation scenarios

describe('Home Page Tests', function () {

  beforeEach(function () {
    cy.clock()
    cy.visit(baseURL)
  })

  //Verify sample website is loaded
  it('Open Sample Website', function () {
    cy.title()
      .should('include', 'The Internet')
  })

  //Verify links on website
  it('Verify Home Page has required links', function () {
    

    cy.contains('Available Examples')
    cy.contains('A/B Testing')
    cy.contains('Broken Images')
    cy.contains('Challenging DOM')
    cy.contains('Checkboxes')
    cy.contains('Context Menu')
    cy.contains('Disappearing Elements')
    cy.contains('Drag and Drop')
    cy.contains('File Download')
    cy.contains('Geolocation')
    cy.contains('Hovers')
    cy.contains('Infinite Scroll')

  })

})