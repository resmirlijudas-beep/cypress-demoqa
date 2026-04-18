class downloadUpload{

    uploadDownloadMenu(){
        return cy.contains('Upload and Download')
    }
    downloadBtn(){
        return cy.get('#downloadButton')

    }
    uploadFile(){
        return cy.get('#uploadFile')
    }
    uploadPath()
    {
        return cy.get('#uploadedFilePath')
    }

}
export default new downloadUpload();