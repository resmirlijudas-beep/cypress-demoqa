import Alerts from "../pages/alertsPage.js";
import Treecheckbox from "../pages/checkboxpage";

describe("Alert hadling", () => {
    beforeEach(() => {
        cy.visit('/')
         Treecheckbox.clickOnElements()
        Alerts.openAlertsPage()

    })
    it("Simple alert", () => {

        cy.on('window:alert',(text)=>{
            expect(text).to.contains("You clicked a button")

        })
        Alerts.simpleAlertBtn().click()
    })
    it("Timer alert",()=>{
        cy.on('window:alert',(text)=>{
            expect(text).to.contains('This alert appeared after 5 seconds')

        })
        Alerts.timerAlertBtn().click()

    })

    it("confirmation alert-OK",()=>{
        cy.on('window:confirm',(text)=>{
                        expect(text).to.contains('Do you confirm action')


        })
        Alerts.confirmAlertBtn().click()
    })
 it('Handle confirm alert - Cancel', () => {

        cy.on('window:confirm', () => {
            return false
        })

        Alerts.confirmAlertBtn().click()

        cy.contains('You selected Cancel').should('be.visible')

    })
    it("Prompt alet",()=>{
 // ✅ Validate page is loaded
        cy.url().should('include', 'alerts')


        // ✅ Validate button is visible and clickable
        Alerts.promptAlertBtn()
            .should('be.visible')
            .and('be.enabled')
            .click()
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('Resmi')
            Alerts.promptAlertBtn().click()

        cy.contains('You entered Resmi').should('be.visible')


        })

    })




})