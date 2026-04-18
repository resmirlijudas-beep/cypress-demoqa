import Treecheckbox from "../pages/checkboxpage.js";

describe('checkbox validations',()=>{
    beforeEach(()=>{
            cy.visit("/")


    })


    it("Checkbox operations",() =>{

        Treecheckbox.clickOnElements()
        Treecheckbox.clickOnCheckboxmenu()
        Treecheckbox.clickOnhome()
        Treecheckbox.getResult()
        .should('contain','home')
        Treecheckbox.getHomecheckbox()
        .should('have.attr','aria-checked','false')



    })


})
