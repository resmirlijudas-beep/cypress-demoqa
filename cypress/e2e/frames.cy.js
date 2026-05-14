import Frames from '../pages/framesPage'
import Treecheckbox from "../pages/checkboxpage";

describe('Frame hanling', () => {

    beforeEach(() => {
        cy.visit('/')
        Treecheckbox.clickOnElements()
        Frames.frameMenu()


    })
    it('Verify first iframe', () => {
        
        Frames.getFrameBody(Frames.getFrame1())
        .find('#sampleHeading')
    .should('contain', 'This is a sample page')

    })

    it('Verify secopnd frame',()=>{
        Frames.getFrameBody(Frames.getFrame1())
   .find('#sampleHeading')
    .should('contain', 'This is a sample page')

})

})