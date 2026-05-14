class Frames
{
    frameMenu()
    {
       cy.contains('Alerts, Frame & Windows').click()

cy.contains('Frames').click()
    }
    getFrame1()
    {
       return cy.get('#frame1')
    }
    getFrame2()
    {
        return cy.get('#frame2')
    }
    getFrameBody(frame)
    {
        return frame
        .its('0.contentDocument.body')
        .should('not.be.empty')
        .then(cy.wrap)

    }

}
export default new Frames();