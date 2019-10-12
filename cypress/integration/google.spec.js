beforeEach(() => {
    cy.visit('https://www.google.com')
  })
it("Visits the google vebpage", () => {
    cy.title().should("equal", "Google");
    cy.get('#hplogo').should("have.length", "1");
})
it("Check if there's a query field", () => {
    cy.get('input[name=q]').should("have.length", "1");
})
it("Check if word is contained in title", () => {
    cy.get('input[name=q]').type("lama{enter}", {delay: 100 })
    //cy.get('input[name=btnK]').first().click()
    cy.title().should("contain", "lama");
})
it("Check if a specific link is present", () => {
    cy.get('input[name=q]').type("lama{enter}", {delay: 100 })
    //cy.get('[href="https://es.wikipedia.org/wiki/Lama"] > .LC20lb').should("have.length", "1")
    cy.get('h3').first().should("contain", "Wikipedia");
})

