class ButtonsPage
{
    clickOnButtons()
    {
        cy.contains('span.text','Buttons').click()
    }
    doubleclickButton()
    {
        return cy.get('#doubleClickBtn')
    }
    doubleClickMsg()
    {
        return cy.get('#doubleClickMessage')
    }
    rightClickButton()
    {
        return cy.get('#rightClickBtn')

    }
      rightClickMsg()
    {
        return cy.get('#rightClickMessage')
    }
    dynamicClickBtn()
    {
    return cy.contains('button', /^Click Me$/)
    }
       dynamicClickMsg()
    {
        return cy.get('#dynamicClickMessage')
    }

}
export default new ButtonsPage();