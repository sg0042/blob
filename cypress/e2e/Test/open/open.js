import { defineStep }from "cypress-cucumber-preprocessor/steps";


const URL = 'https://portal-test-qa-challenge.dev.quix.ai/'

defineStep('I open Quix', () => {
    cy.visit(URL)
})

defineStep('I log in', () => {
    cy.findByRole('textbox', {name: /email/i}).type(" quix.qa.challenge@gmail.com")
    cy.findByPlaceholderText(/your password/i).type("Challenge2022")
    cy.findByRole('button', { name: /log in/i }).click()
})

defineStep('I open my workspace', () => {
    cy.get('app-workspace-card').click()
    cy.contains('Add new').should('be.visible')
    }
)

defineStep('I navigate to the Library', () => {
    cy.contains('Library').click({ force: true })
})

defineStep('I should be on the Library page', () => {
    cy.findByRole('heading', { name: /library/i }).should('be.visible')
})