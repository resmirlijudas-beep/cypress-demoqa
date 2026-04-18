import Broken from "../pages/brokenPage";
import Treecheckbox from "../pages/checkboxpage";


describe("Broken pages", () => {
    beforeEach(() => {
        cy.visit('/')
        Treecheckbox.clickOnElements()
        Broken.clickBrokenImgBtn()

    })

    it.skip('Validate valid image', () => {

        Broken.validImage().should(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0)

        })
    })
    it('Validate invalid image', () => {

        Broken.brokenImage().should(($img) => {
            expect($img[0].naturalWidth).to.equal(0)
        })
    })
    it('validate valid link', () => {
        Broken.validLink()
            .invoke('attr', 'href')
            .then((url) => {
                cy.request(url).its('status').should('eq', 200)
            })
    })

    it('Validate invalid Link', () => {
        Broken.brokenLink()
            .invoke('attr', 'href')
            .then((url) => {
                cy.request({
                    url: url,
                    failOnStatusCode: false
                }).its('status').should('eq', 500)


            })
    })


})







