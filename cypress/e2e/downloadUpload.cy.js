import downloadUpload from "../pages/downloadUploadPage.js";
import Treecheckbox from "../pages/checkboxpage";


describe("Valodate file downlaod and upload",()=>{
    beforeEach(()=>{
        cy.visit('/')
        Treecheckbox.clickOnElements()
        downloadUpload.uploadDownloadMenu().click()

        

    })

    it("Filedownload",()=>{

        downloadUpload.downloadBtn().click()
        cy.readFile('cypress/downloads/sampleFile.jpeg',{timeout:1000}).should('exist')
     


    })

    it("FileUpload",()=>{
        downloadUpload.uploadFile()
        .selectFile('cypress/fixtures/example.json')
        downloadUpload.uploadPath().should('contain','example.json')
        


    })


})