import ButtonsPage from "../pages/buttonsPage";
import Treecheckbox from "../pages/checkboxpage";

describe('Button spage automation',()=>{
    beforeEach(()=>{
        cy.visit('/')
        Treecheckbox.clickOnElements()
     ButtonsPage.clickOnButtons()

    })

  it('Doubleclick validation',()=>{
    
     ButtonsPage.doubleclickButton().dblclick()
    ButtonsPage.doubleClickMsg().should('have.text', 'You have done a double click')

  })
  it('Right validation',()=>{
    
     ButtonsPage.rightClickButton().rightclick()
    ButtonsPage.rightClickMsg().should('have.text', 'You have done a right click')

  })

  it('Dynamic validation',()=>{
    
     ButtonsPage.dynamicClickBtn().click()
    ButtonsPage.dynamicClickMsg().should('have.text', 'You have done a dynamic click')

  })


})