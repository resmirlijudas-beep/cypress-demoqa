import LinksPage from "../pages/linksPage";
import Treecheckbox from "../pages/checkboxpage";
describe("LinksPage handling",()=>{
    beforeEach(()=>{
        cy.visit("/")

   })

   it("Verify home link validation",()=>{

     Treecheckbox.clickOnElements()
     LinksPage.clicOnLinks()
     LinksPage.openHomeLink()
     cy.url().should('include','demoqa.com/')
     cy.visit('/links')
     cy.url().should('include','/links')
     LinksPage.openDynamicLink()
     .should('have.attr','href','https://demoqa.com').click()
     cy.url().should('include','demoqa.com')

   }) 
})